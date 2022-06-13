import "./projects.scss";
import Img from './one.svg';
import Two from './two.svg';
import Three from './three.svg';
import Four from './four.svg';
import Five from './five.svg';
import Six from './six.svg';
import Seven from './seven.svg';
import Eight from './eight.svg';
import Nine from './nine.svg';
import Ten from './ten.svg';
import Eleven from './eleven.svg';
import Twelve from './twelve.svg';

const projects = [
    {
        client: "Starck Project Services",
        name: "Onyx Residences",
        img: Img
    },
    {
        client: "LLO Nominees | ECAD Architects",
        name: "Pathenon Residences",
        img: Two
    },
    {
        client: "Merastar",
        name: "The Summit",
        img: Three
    },
    {
        client: "Polystyrene Industries Limited",
        name: "Ozidu Place",
        img: Four
    },
    {
        client: "Polystyrene Industries Limited",
        name: "Law School Apartments",
        img: Five
    },
    {
        client: "Onnan Unity",
        name: "The Askia Villas",
        img: Six
    },
    {
        client: "Starck Project Services",
        name: "Magnolia",
        img: Seven
    },
    {
        client: "Ashbert Group",
        name: "Abraka Turf and Country Club ",
        img: Eight
    },
    {
        client: "Realbanc Limited",
        name: "Realbanc",
        img: Nine
    },
    {
        client: "RDD Associates",
        name: "RDD Associates",
        img: Ten
    },
    {
        client: "Case Study",
        name: "Ogun State",
        img: Eleven
    },
    {
        client: "Case Study",
        name: "Sanctum Hills Retirement Village ",
        img: Twelve
    }
]

const Projects = () => {
    return (
        <div className="projects">
            <p className="title">Featured Projects</p>
            <div className="proj-list">
                {projects.map(({name, client, img}, index) => {
                    return (
                        <div data-aos="slide-up" style={{backgroundImage: `url(${img})`}} className="project" key={index}>
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
        </div>
    )
}

export default Projects;