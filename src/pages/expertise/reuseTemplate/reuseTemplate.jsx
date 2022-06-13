import Clients from "../../about/clients/clients";
import "./reuseTemplate.scss";

const ReuseTemplate = ({sideText, topText, bottomText, bg}) => {
    return (
        <div className="template">
            <div data-aos="fade-right" className="black">
                <p className="title">{sideText}</p>
                <div className="cont">
                    <p className="top">{topText}</p>
                    <p className="para">{bottomText}</p>
                </div>
            </div>
            <div className="bg" style={{backgroundImage: `url(${bg})`}}></div>
        </div>
    )
}

export default ReuseTemplate;