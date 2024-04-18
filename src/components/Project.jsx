import Button from "./Button";

export default function Project({ project }) {
    return (
        <div className="max-w-[360px] bg-slate-800 rounded-lg p-8 flex flex-col gap-4 drop-shadow-md">
            <div className="bg-slate-400 aspect-video"></div>
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <p className="italic">Built With: {getTechnologiesString(project.technologies)}</p>
            <p>{project.description}</p>
            <div className="flex gap-4 justify-center">
                {ProjectButtons(project.demo, project.code)}
            </div>
        </div>
    )
}

function ProjectButtons(demo, code) {
    return (
        <>
            <Button label="Demo" link={demo} />
            <Button label="Code" link={code} />
        </>
    )
}

function getTechnologiesString(technologies) {
    return technologies.toString().replaceAll(',', ', ')
}