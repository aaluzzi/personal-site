import VisitorCount from "../VisitorCount";

export default function Footer() {
    return (
        <div className="text-sm text-stone-500 p-4">
            <div className="font-bold">About This Site</div>
            <div><a className="underline" href="https://github.com/aaluzzi/personal-site" target="_blank">Front End</a> - React, Tailwind, Framer Motion</div>
            <div><a className="underline" href="https://github.com/aaluzzi/personal-site-sam" target="_blank">Back End</a> - AWS (API, DynamoDB, Lambda, SES)</div>
            <VisitorCount /> 
        </div>
    );
}