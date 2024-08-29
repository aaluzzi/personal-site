import Header from "../Header";
import ContactForm from "../ContactForm";

export default function Connect() {
    return (
        <>
             <Header title="Contact Me" />
             <p>If you're not a robot, reach out to me at <a className="underline" href="mailto:austinaluzzi@gmail.com">austinaluzzi@gmail.com</a> or through the form below.</p>
             <ContactForm />
        </>
    )
}