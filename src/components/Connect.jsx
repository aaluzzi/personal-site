import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Connect() {
    return (
        <>
             <h1 className="text-3xl font-bold">Connect</h1>
             <p>Want to talk or collaborate? Reach out to me on some medium!</p>
             <div className="my-4 h-8 flex items-center gap-6">
                <a className="h-[100%]" href={getEmailLink()}><EnvelopeIcon className="h-[100%]" /></a>
                <a className="h-[100%]" href="https://linkedin.com/in/austin-aluzzi"><img className="h-[100%]" src="./assets/icons/linkedin.png" alt="LinkedIn icon" /></a>
                <a className="h-[100%]" href="https://github.com/aaluzzi"><img className="h-[100%]" src="./assets/icons/github.png" alt="Github icon" /></a>
             </div>
        </>
    )
}

function getEmailLink() {
  const encoded = encodeURIComponent('austin' + 'aluzzi' + '@' + 'gmail.com').replace(/%20/g, '%40'); // Encode "@" symbol
  return `mailto:${encoded}`;
}