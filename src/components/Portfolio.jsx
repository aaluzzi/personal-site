import projects from '../assets/projects.json';
import Project from './Project';

export default function Portfolio() {
    return (
        <section id="portfolio" className="p-4 flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Portfolio</h1>
            <p>Here are some of my completed personal projects.</p>
            <div className="p-4 flex flex-wrap justify-center gap-8">
                {projects.map(project => <Project project={project} />)}
            </div>
        </section>
    )
}