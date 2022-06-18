import "./projects.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AppLoader from "../../../components/appLoader/appLoader";
import Footer from "../../../components/footer/footer";

const Projects = ({text, showNav, view}) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://fifthwall.herokuapp.com/projects")
        // .then(res => console.log(res?.data))
        .then(res => setProjects(res?.data))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="projects">
            <p className="title">{text}</p>
            {loading ?<AppLoader /> : 
            <>
            <br />
            <br />
            <div className="proj-list">
                {projects.filter(d => view === "home" ? d.featured : d.name).map(({name, client, thumbImg, _id: id}) => {
                    return (
                        <div onClick={() => navigate(`/projects/${id}`, {state: {id: id}})} data-aos="slide-up" style={{backgroundImage: `url(${thumbImg})`}} className="project" key={id}>
                            {/* <div className="overlay">
                                <p className="name">{name}</p>
                                <p className="client">{client}</p>
                            </div> */}
                            
                            <p className="name">{name}</p>
                            <p className="client">{client}</p>
                        </div>
                    )
                })}
            </div>
            {showNav && <Footer />}
            </>}
        </div>
    )
}

export default Projects;