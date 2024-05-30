import Button from "./Button";
import { HiComputerDesktop, HiCodeBracket } from 'react-icons/hi2';
import Technology from "./Technology";

export default function ProjectCard({ project}) {
    return (
        <div className="max-w-[360px] bg-sky-900 rounded-lg p-8 flex flex-col gap-4 drop-shadow-md">
            <a href={project.demo}><img src={`./assets/images/${project.id}.png`} className="aspect-video rounded-md" /></a>
            <h2 className="text-2xl font-bold">{project.name}</h2>
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
            <Button className="bg-stone-800 hover:bg-stone-900" icon={<HiCodeBracket className="h-6 w-6" />} label="Code" link={code} />
            <Button className="bg-green-700 hover:bg-green-800" icon={<HiComputerDesktop className="h-6 w-6" />} label="Demo" link={demo} />
        </>
    )
}