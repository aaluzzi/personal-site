import { useState } from 'react';
import { IoIosSend } from "react-icons/io";
import Button from './Button';

export default function ContactForm() {
    const [formData, setFormData] = useState({
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
            // TODO implement
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setStatus('Sorry, but this form isn\'t implemented yet.');
            setFormData({
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
                className="w-full bg-stone-900 p-3 rounded-lg shadow-md"
                placeholder="Your email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                className="w-full bg-stone-900 p-3 rounded-lg shadow-md"
                placeholder="Your message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <Button className="bg-stone-800 hover:bg-stone-900" icon={<IoIosSend className="h-6 w-6" />} label="Submit"/>
            {status && <p>{status}</p>}
        </form>
    );

}