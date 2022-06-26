import Footer from "../../components/footer/footer";
import Navbar2 from "../../components/navbar2/navbar2";
import "./media.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import AppLoader from "../../components/appLoader/appLoader";


const Media = () => {
    const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://api-fiffthwall.herokuapp.com/api/feeds")
            //  .then(res => console.log(res?.data?.posts))
             .then(res => setMedia(res?.data?.posts))
             .then(res => setLoading(false))
             .catch(err => console.log(err))
    }, [])

   const navigate = useNavigate();

    return (
        <div className="media">
            <Navbar2 />
            <br />
            <br />
            <div className="proj-list">
                {loading ? <AppLoader /> :
                media.map(({name, date, img, _id: id}, index) => {
                    return (
                        <div onClick={() => navigate(`/media/${id}`, {state: {id: id}})} data-aos="slide-up" style={{backgroundImage: `url(${img})`, backgroundPosition: "top"}} className="project" key={index}>
                            {/* <div className="overlay">
                                <p className="name">{name}</p>
                                <p className="date">{moment().calendar(date)}</p>
                            </div> */}
                            <p className="name">{name}</p>
                            <p className="date">{moment().calendar(date)}</p>
                        </div>
                    )
                })}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {!loading && <Footer />}
        </div>
    )
}

export default Media;