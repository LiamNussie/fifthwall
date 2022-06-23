import "./viewProjects.scss";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AppLoader from "../../../components/appLoader/appLoader";


const ViewProjects = () => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    console.log(location)
    const id = location?.state?.id

    useEffect(() => {
        axios.get(`https://fifthwall.herokuapp.com/projects/${id}`)
        //  .then(res => console.log(res?.data))
         .then(res => setProject(res?.data))
         .then(res => setLoading(false))
         .catch(err => console.log(err))
    }, [])

    return (
        <div className="view-media">
            <Navbar />
            {loading ? <AppLoader /> :
            <>
            <div data-aos="fade" className="timg" style={{backgroundImage: `url(${project?.bannerImg})`}}></div>
            <div data-aos="fade-right" className="topish">
                <div className="lefti">
                <p className="title">{project?.name}</p><br />
                {project?.about.map((i, index) => {
                    return (
                        <p className="para" key={index}>
                            {i}
                        </p>
                    )
                })}
                <div className="liners">
                    <p><strong>Client: </strong><span>{project?.client}</span></p>
                    <p><strong>Location: </strong><span>{project?.location}</span></p>
                </div>
                </div>
                <div className="righti">
                <p className="lab">Services</p><br />
                <ul>
                    {project?.services.map((i, index) => {
                    return (
                        <li key={index}>{i}</li>
                    )
                    })}
                </ul>
                </div>
                
            </div>
            <div className="visuals">
                {project?.gallery?.map((i, index) => {
                    return (
                        // <div key={index} data-aos="fade-up" className="img" style={{backgroundImage: `url(${i})`, backgroundSize: "cover"}}></div>
                        <img key={index} data-aos="fade-up" src={i} alt="gimg" className="img" />
                        )
                })}
                <div className="halfs">
                    {project?.half?.map((i, index) => {
                        return (
                            <div key={index}  className="half" style={{backgroundImage: `url(${i})`, backgroundSize: "cover"}}></div>
                        )
                    })}
                </div>
                <div className="tiled">
                    {project?.tiled?.map((i, index) => {
                        return (
                            <div key={index}  className="tile" style={{backgroundImage: `url(${i})`, backgroundSize: "cover"}}></div>
                        )
                    })}
                </div>
                {project?.video?.map((i, index) => {
                    return (
                        <video key={index} controls loop src={i}></video>
                    )
                })}
                
            </div>
        
            <Footer />
            </>}

            
        </div>
    )
}

export default ViewProjects;