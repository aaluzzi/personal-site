import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Connect() {
    return (
        <section id="connect" className="p-8 flex flex-col items-center justify-center gap-6">
             <h1 className="text-3xl font-bold">Connect</h1>
             <p>Want to talk? Reach out to me on some medium!</p>
             <div className="h-8 flex items-center gap-6">
                <a className="h-[100%]" href={getEmailLink()}><EnvelopeIcon className="h-[100%]" /></a>
                <a className="h-[100%]" href="https://linkedin.com/in/austinaluzzi"><img className="h-[100%]" src="./assets/icons/linkedin.png" alt="LinkedIn icon" /></a>
                <a className="h-[100%]" href="https://github.com/aaluzzi"><img className="h-[100%]" src="./assets/icons/github.png" alt="Github icon" /></a>
             </div>
        </section>
    )
}

function getEmailLink() {
  const encoded = encodeURIComponent('austin' + 'aluzzi' + '@' + 'gmail.com').replace(/%20/g, '%40'); // Encode "@" symbol
  return `mailto:${encoded}`;
}