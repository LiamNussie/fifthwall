import "./viewMedia.scss";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";


const ViewMedia = (props) => {
    const [media, setMedia] = useState(null);
    const [loading, setLoading] = useState(true);

    const id = props?.location?.state?.id

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
            {loading ? <p>loading...</p> :
            <>
            <div data-aos="fade" className="timg" style={{backgroundImage: `url(${media?.img})`}}></div>
            <div className="bottomm">
                <div data-aos="fade-right" className="desc">
                    <p className="date">{media?.date.slice(0,10)}</p>
                    <p className="titlem">{media?.name}</p>
                    {media?.desc?.comment.map((i, index) => {
                        return (
                            <p className="para" key={index}>{i}</p>
                        )
                    })}
                    <div className="descimg" style={{backgroundImage: `url(${media?.desc?.image})`}}></div>
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
                            <div data-aos="fade-right" className="img" style={{backgroundImage: `url(${banner})`, backgroundSize: "cover"}}></div>
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