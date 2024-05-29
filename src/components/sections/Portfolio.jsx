import Header from '../Header';
import projects from '../../assets/projects.json';
import Project from '../Project';

export default function Portfolio() {
    return (
        <>
            <Header title="Portfolio" />
            <p className="text-lg">Here are some of my web applications that I've (mostly) completed.</p>
            <div className="flex flex-wrap justify-center gap-8">
                {projects.map(project => <Project project={project} />)}
            </div>
        </>
    )
}