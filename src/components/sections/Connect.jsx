import Header from "../Header";
import { HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Connect() {
    return (
        <>
             <Header title="Connect" />
             <p>Want to talk or collaborate? Reach out to me on some medium!</p>
             <div className="my-4 flex items-center gap-6">
                <a className="h-[100%]" href={getEmailLink()}><HiEnvelope className="h-6 w-6" /></a>
                <a className="h-[100%]" href="https://linkedin.com/in/austin-aluzzi"><FaLinkedin className="h-6 w-6"/></a>
                <a className="h-[100%]" href="https://github.com/aaluzzi"><FaGithub className="h-6 w-6"/></a>
             </div>
        </>
    )
}

function getEmailLink() {
  const encoded = encodeURIComponent('austin' + 'aluzzi' + '@' + 'gmail.com').replace(/%20/g, '%40'); // Encode "@" symbol
  return `mailto:${encoded}`;
}