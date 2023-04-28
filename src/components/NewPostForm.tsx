import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    handleSubmit: (e: FormEvent<HTMLFormElement>, title: string, description: string) => Promise<void> 
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    formInfo: {
        title: string;
        description: string;
    }
}

// export default function NewPostForm({ formInfo, handleSubmit, handleChange }: Props) {    
export default function NewPostForm() {    

    const [formInfo, setFormInfo] = useState({title: "", description: "", fields: [{label: ""}]});

    const handleSubmit  = async (e: FormEvent<HTMLFormElement>, title: string, description: string) => {
        e.preventDefault();
        const { data } = await axios.post("/api/posts", {title, description});
        console.log(data);
        setFormInfo({title: "", description: "", fields: [{label: ""}]});
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value});
    }

    const addInputField = () => {
        const newFields = [...formInfo.fields, {label: ""}];
        setFormInfo((prev) => ({...prev, fields: newFields}));
    }

    const removeInputField = (index: number) => {
        const newFields = [...formInfo.fields];
        newFields.splice(index, 1);
        setFormInfo((prev) => ({...prev, fields: newFields}));
    }

    const inputStyle = "outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"
    return (
        <>
            <form 
                onSubmit={(e) => handleSubmit(e, formInfo.title, formInfo.description)}
                className="text-xs sm:text-sm flex-1 flex flex-col gap-4 justify-center items-center"
            >
                <input 
                    value={formInfo.title}
                    onChange={handleChange}
                    name="title"
                    type="text" 
                    placeholder="Title..." 
                    className={inputStyle} 
                    aria-label="title"
                    required
                />
                <input 
                    value={formInfo.description}
                    onChange={handleChange}
                    id="description"
                    name="description"
                    type="text" 
                    placeholder="Description..." 
                    className={inputStyle} 
                    aria-label="description"
                    required
                />
                {
                    formInfo.fields.map((data, index) => {
                        const {label} = data;
                        return (
                            <div className="h-10 flex items-center w-full max-w-[40ch] mb-3" key={index}>
                            <input className={inputStyle}
                                onChange={(e) => handleChange(e)}
                                value={label}
                                type="text" 
                                placeholder={"e.g. Make coffee"} 
                                aria-label="new subtask"
                                required
                            /> 
                            <button type="button" className="text-2xl font-bold" onClick={(e)=> removeInputField(index)}>x</button>
                            </div>
                        )
                    })
                }
                <button className="px-4 py-2" onClick={addInputField}>Add an input</button>
                <button 
                    type="submit" 
                    className="bg-cyan-300 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded"
                >Submit</button>
            </form>
        </>
    )
}