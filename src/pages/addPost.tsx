import axios from 'axios';
import NewPostForm from "@/components/NewPostForm";
import { ChangeEvent, FormEvent, useState } from 'react';

export default function AddPost() {
    // const [formInfo, setFormInfo] = useState({title: "", description: "", fields: [{label: ""}]});

    // const handleSubmit  = async (e: FormEvent<HTMLFormElement>, title: string, description: string) => {
    //     e.preventDefault();
    //     const { data } = await axios.post("/api/posts", {title, description});
    //     console.log(data);
    //     setFormInfo({title: "", description: "", fields: [{label: ""}]});
    // }

    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setFormInfo({...formInfo, [e.target.name]: e.target.value});
    // }

    return (
        <div>
            <div>Fill out the form below to customize your post</div>
            {/* <NewPostForm formInfo={formInfo} handleSubmit={handleSubmit} handleChange={handleChange} /> */}
            <NewPostForm />
        </div>
    )
}