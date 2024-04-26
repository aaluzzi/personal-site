import Button from "./Button";
import { ComputerDesktopIcon, CodeBracketIcon } from '@heroicons/react/24/solid';
import Technology from "./Technology";

export default function Project({ project }) {
    return (
        <div className="max-w-[360px] bg-slate-800 rounded-lg p-8 flex flex-col gap-4 drop-shadow-md">
            <img src={`./images/${project.id}.png`} className="aspect-video rounded-md" />
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <div className="flex-grow flex flex-col gap-2 justify-around">
                <p className="flex items-center">{project.description}</p>
                <div className="flex gap-1 justify-center flex-wrap">
                    {project.technologies.map(technology => <Technology key={technology} technology={technology} />)}
                </div>
            </div>
            
            
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