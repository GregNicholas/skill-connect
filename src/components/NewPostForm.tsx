import { ChangeEvent, FormEvent } from 'react';

interface Props {
    handleSubmit: (e: FormEvent<HTMLFormElement>, title: string, description: string) => Promise<void> 
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    formInfo: {
        title: string;
        description: string;
    }
}

export default function NewPostForm({ formInfo, handleSubmit, handleChange }: Props) {    

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
                <button 
                    type="submit" 
                    className="bg-cyan-300 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded"
                >Submit</button>
            </form>
        </>
    )
}