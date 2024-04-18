import projects from '../assets/projects.json';
import Project from './Project';

export default function Portfolio() {
    return (
        <section id="portfolio" className="p-4">
            <h1 className="text-3xl font-bold">My Portfolio</h1>
            <div className="p-8 flex flex-wrap justify-center gap-8">
                {projects.map(project => <Project project={project} />)}
            </div>
        </section>
    )
}