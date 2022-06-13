import './info.scss';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div data-aos="fade-up" className="info">
            <p className="para">We are a group of talented, result-driven and highly collaborative professionals, working as a team to make our clients project a reality. The uniqueness inherent to spaces and places inspires us to craft purposeful brand experiences dedicated to the people that live within these built environments.</p>
            <br />
            <Link to="/about" style={{textDecoration: "none", color: "#000"}}><p className="more">Learn More</p></Link>
        </div>
    )
}

export default Info;