import "./projects.scss";
import Navbar2 from "../../components/navbar2/navbar2";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";


const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fifthwall.herokuapp.com/projects")
        // .then(res => console.log(res?.data))
        .then(res => setProjects(res?.data))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="projects">
            <Navbar2 />
            {loading ? <p>loading...</p> : 
            <>
            <br />
            <br />
            <div className="proj-list">
                {projects.map(({name, client, thumbImg, _id: id}) => {
                    return (
                        <div data-aos="slide-up" style={{backgroundImage: `url(${thumbImg})`}} className="project" key={id}>
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
            <Footer />
            </>}
            
        </div>
    )
}

export default Projects;