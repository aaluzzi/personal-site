import Button from "./Button";
import { ComputerDesktopIcon, CodeBracketIcon } from '@heroicons/react/24/solid';

export default function Project({ project }) {
    return (
        <div className="max-w-[360px] bg-slate-800 rounded-lg p-8 flex flex-col gap-4 drop-shadow-md">
            <img src={`./images/${project.id}.png`} className="bg-slate-400 aspect-video" />
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <p className="italic">Built With: {getTechnologiesString(project.technologies)}</p>
            <p className="flex-grow flex items-center">{project.description}</p>
            <div className="flex gap-4 justify-center">
                {ProjectButtons(project.demo, project.code)}
            </div>
        </div>
    )
}

function ProjectButtons(demo, code) {
    return (
        <>
            <Button icon={<ComputerDesktopIcon className="h-[100%]" />} label="Demo" link={demo} />
            <Button icon={<CodeBracketIcon className="h-[100%]" />} label="Code" link={code} />
        </>
    )
}

function getTechnologiesString(technologies) {
    return technologies.toString().replaceAll(',', ', ')
}