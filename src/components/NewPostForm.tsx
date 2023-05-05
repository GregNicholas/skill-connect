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

    const [formInfo, setFormInfo] = useState({title: "", description: "", fields: [{val: "", name: "input0"}]});

    const handleSubmit  = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {title, description, fields} = formInfo;
        console.log(fields)
        const { data } = await axios.post("/api/posts", {title, description});
        console.log(data);
        setFormInfo({title: "", description: "", fields: [{val: "", name: "input0"}]});
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name)
        if (name.includes("input")) {
            const inputIndex = parseInt(name.replace("input", ""));
            const updatedFields = [...formInfo.fields];
            updatedFields[inputIndex].val = value;
            setFormInfo({ ...formInfo, fields: updatedFields });
        } else {
            setFormInfo({ ...formInfo, [name]: value });
        }
    }

    const addInputField = () => {
        const newFields = [...formInfo.fields, {val: "", name: `input${formInfo.fields.length}`}];
        setFormInfo((prev) => ({...prev, fields: newFields}));
    }

    const removeInputField = (index: number) => {
        const newFields = [...formInfo.fields];
        newFields.splice(index, 1);
        //update the name property so that it matches the index in the fields array
        const updatedFields = newFields.map((field, i) => {
            return {val: field.val, name: `input${i}`}
        });
        setFormInfo((prev) => ({...prev, fields: updatedFields}));
    }

    const inputStyle = "outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"
    return (
        <>
            <form 
                onSubmit={(e) => handleSubmit(e)}
                className="text-xs sm:text-sm flex-1 flex flex-col gap-4 justify-center items-center"
            >
                <input 
                    onChange={handleChange}
                    id=""
                    name="title"
                    value={formInfo.title}
                    type="text" 
                    placeholder="Title..." 
                    className={inputStyle} 
                    aria-label="title"
                    required
                />
                <input 
                    onChange={handleChange}
                    id="description"
                    value={formInfo.description}
                    name="description"
                    type="text" 
                    placeholder="Description..." 
                    className={inputStyle} 
                    aria-label="description"
                    required
                />
                {
                    formInfo.fields.map((data, index) => {
                        const {val, name} = data;
                        return (
                            <div className="h-10 flex gap-2 items-center w-full max-w-[40ch] mb-3" key={index}>
                            <input className={inputStyle}
                                onChange={(e) => handleChange(e)}
                                id={name}
                                value={val}
                                name={name}
                                type="text" 
                                placeholder={"e.g. previous position"} 
                                aria-label="new subtask"
                                required
                            /> 
                            <button type="button" className="text-2xl font-bold" onClick={(e)=> removeInputField(index)}>x</button>
                            </div>
                        )
                    })
                }
                <button 
                    type="button" 
                    className="px-4 py-2 border-2 border-slate-300 rounded-xl hover:bg-slate-800" 
                    onClick={addInputField}
                >Add an input</button>
                <button 
                    type="submit" 
                    className="bg-slate-800 hover:bg-slate-300 hover:text-slate-800 text-white font-bold py-2 px-4 rounded-xl"
                >Submit</button>
            </form>
        </>
    )
}