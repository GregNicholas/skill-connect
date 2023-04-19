import axios from 'axios';
import NewPostForm from "@/components/NewPostForm";
import { ChangeEvent, FormEvent, useState } from 'react';

export default function AddPost() {
    const [formInfo, setFormInfo] = useState({title: "", description: ""});

    const handleSubmit  = async (e: FormEvent<HTMLFormElement>, title: string, description: string) => {
        e.preventDefault();
        const { data } = await axios.post("/api/posts", {title, description});
        console.log(data);
        setFormInfo({title: "", description: ""});
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <NewPostForm formInfo={formInfo} handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
    )
}