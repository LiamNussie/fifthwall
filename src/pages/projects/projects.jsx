import "./projects.scss";
import Navbar2 from "../../components/navbar2/navbar2";
import Projects from "../homepage/projects/projects";

const ProjectsP = () => {

    return (
        <div className="projects">
            <Navbar2 />
            <Projects showNav={true} view="projects" />
        </div>
    )
}

export default ProjectsP;