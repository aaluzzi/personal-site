import { useState } from 'react';
import { IoIosSend } from "react-icons/io";
import Button from './Button';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const resp = await fetch('https://dl0fe78v6j.execute-api.us-west-1.amazonaws.com/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message.trim() }),
            });
            const json = await resp.json();
            setStatus(json.message);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setStatus('Error sending message. Please try again later.');
        }
    };

    return (
        <form className="w-full max-w-[512px] flex flex-col items-center gap-4 rounded-md" onSubmit={handleSubmit}>
            <input
                className="w-full h-0 bg-stone-900 rounded-lg shadow-md focus:bg-stone-800 focus:outline-none"
                placeholder="Your name"
                type="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                className="w-full bg-stone-900 p-3 rounded-lg shadow-md focus:bg-stone-800 focus:outline-none"
                placeholder="Your email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                maxLength="32"
                onChange={handleChange}
                required
            />
            <textarea
                className="w-full bg-stone-900 p-3 rounded-lg shadow-md focus:bg-stone-800 focus:outline-none"
                placeholder="Your message"
                id="message"
                name="message"
                value={formData.message}
                maxLength="1024"
                onChange={handleChange}
                required
            ></textarea>
            <Button className="bg-stone-900 hover:bg-stone-800" icon={<IoIosSend className="h-6 w-6" />} label="Submit" />
            {status && <p>{status}</p>}
        </form>
    );

}