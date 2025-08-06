import Header from '../Header';
import projects from '../../assets/projects.json';
import ProjectCard from '../ProjectCard';

export default function Portfolio() {
    return (
        <>
            <Header title="Portfolio" />
            <p className="text-lg">Here's some web applications that I built during college:</p>
            <div className="flex flex-wrap justify-center gap-8">
                {projects.map(project => <ProjectCard project={project} key={project.id} />)}
            </div>
        </>
    )
}