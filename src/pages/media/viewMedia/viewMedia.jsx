import "./viewMedia.scss";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AppLoader from "../../../components/appLoader/appLoader";


const ViewMedia = (props) => {
    const [media, setMedia] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    console.log(location)
    const id = location?.state?.id

    useEffect(() => {
        axios.get(`https://api-fiffthwall.herokuapp.com/api/feed/${id}`)
        //  .then(res => console.log(res?.data?.post))
         .then(res => setMedia(res?.data?.post))
         .then(res => setLoading(false))
         .catch(err => console.log(err))
    }, [])

    return (
        <div className="view-media">
            <Navbar />
            {loading ? <AppLoader /> :
            <>
            <div data-aos="fade" className="timg" style={{backgroundImage: `url(${media?.img})`}}></div>
            {/* <img src={media?.img} alt="timg" data-aos="fade" className="timg" /> */}
            <div className="bottomm">
                <div data-aos="fade-right" className="desc">
                    <p className="date">{media?.date.slice(0,10)}</p>
                    <p className="titlem">{media?.name}</p>
                    {media?.desc?.comment.map((i, index) => {
                        return (
                            <p className="parad" key={index}>{i}</p>
                        )
                    })}
                    <img className="descimgt" src={media?.desc?.image} />
                </div>
                {media?.section?.map(({banner, txt}, index) => {
                    return (
                        <div data-aos="fade-up" key={index} className="secm">
                            {txt.map(({header, para}) => {
                                return (
                                    <div className={(index + 1) % 2 === 0 ? "flex2 flexy" : "flex1 flexy"}>
                                        <div key={para} className="point">
                                            <p className="boldm">{header}</p>
                                            <p className="normal">{para}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            <img data-aos="fade-right" className="imgx" src={banner} />
                        </div>
                    )
                })}
            </div>
            <Footer />
            </>}

            
        </div>
    )
}

export default ViewMedia;