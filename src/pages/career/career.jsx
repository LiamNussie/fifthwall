import { useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar2 from "../../components/navbar2/navbar2";
import "./career.scss";
import Plusicon from "./plus.svg";

const jobs = [
    {
        title: "Digital Marketing Executive",
        jobType: "Global/Remote",
        desc: "We're looking for an innovative digital marketing executive who can lead, energise, and be inspired by our team and clients in a truly collaborative workplace. The ideal candidate is experienced in delivering results and is constantly looking for new ways to do even better.",
        note: "This is a full-time remote position.",
        responsibilities: [
            "Executing digital marketing campaigns",
            "Leading and managing SEO/PPC, marketing databases, email, social media, and/or display advertising campaigns",
            "Identifying target audiences and devising holistic digital campaigns that engage, inform, and motivate",
            "Developing budgets for ad campaigns",
            "Impeccable written communication skills",
            "Identifying target audiences and devising holistic digital campaigns that engage, inform, and motivate"
        ],
        skills: [
            "Bachelor’s degree or equivalent experience in marketing or a related field",
            "Some knowledge of HTML, CSS, and JavaScript ",
            "Experience in setting up and optimizing PPC campaigns on all major search engines",
            "Solid knowledge of website and marketing analytics tools (e.g., Google Analytics)." 
        ]
    },
    {
        title: "Creative Designer",
        jobType: "Global/Remote",
        desc: "We're searching for a creative designer that can collaborate with a team of creative professionals to shape projects and campaigns for our clients. With the capacity to walk through the process, you will be in charge of producing creative concepts and implementing them across numerous platforms. ",
        note: "This is a full-time remote position.",
        responsibilities: [
            "Will work closely with the creative director  on projects to create compelling design solutions from initial conceptualization through to the final product",
            "Utilizing a deep understanding of the client and target audience to create strategically sound and creatively beautiful solutions that best suit the needs of the project.",
            "Developing design layouts with engaging copy and great use of typography.",
            "Creating engaging motion graphics where needed",
            "Presenting concepts to design team and the ability to adapt revisions after collaborative process",
            "Prioritizing multiple clients, projects and deadlines"  

        ],
        skills: [
            "3+ years of design experience, preferably in an agency setting.",
            "Proven success in managing design projects / timelines.",
            "Expert level Adobe Creative Suite skills.",
            "Excellent communication and organisational abilities",
            "Good time management skills.",
            "Copywriting skills"
        ]
    },
    {
        title: "Front End Developer",
        jobType: "Global/Remote",
        desc: "We’re looking to add a new front end developer to our studio. The primary focus of this position will be to work with the Web Director to develop websites and other related projects for a wide range of uses and clients all around the globe. ",
        note: "This is a full-time remote position.",
        responsibilities: [
            "Ability to successfully manage many projects, priorities, and workload in order to meet all deadlines and timeframes",
            "Define and oversee technical requirements, procedures, best practices, and quality standards for the agency’s development projects",
            "Start-to-finish development of full websites",
            "Building reusable code for future use.",
            "Optimizing web pages for maximum speed and scalability across all devices.",
            "Organized and process-oriented, with the ability to adapt and be flexible when needed",
            "Participate in design and architecture of forward-looking projects",
            "Experience diagnosing and solving cross-browser issues "
        ],
        skills: [
            "2-3 years experience ",
            "3+ years experience with JavaScript and Javascript Frameworks",
            "Expert knowledge of modern back-end development and back-end JavaScript",
            "Solid understanding of HTML / CSS / Advanced CSS Animations / HTML5 / CSS3",
            "Strong UI/UX knowledge",
            "Expert in responsive design and adaptive web development"
        ]
    },
    {
        title: "3D Architectural Artist",
        jobType: "Global/Remote",
        desc: "We are looking for a 3D artist with an imaginative spirit who can grow, inspire, and be inspired by our team and clients. In a highly collaborative atmosphere, you’ll be expected to transform a client's vision into sophisticated marketing graphics. The ideal applicant must be adept in all facets of digital rendering utilising industry standard applications.",
        note: "This is a full-time remote position.",
        responsibilities: [
            "Research and develop new working methods and look at new technologies with a view to challenging existing practises to benefit the team and company as a whole.",
            "Creating beautiful imagery, with an emphasis on atmosphere and storytelling for high-quality digital output",
            "Experience with After Effects and post-processing software",
            "Excellent design skills and a strong foundation in visual storytelling",
            "Creating high-end, luxury renderings."

        ],
        skills: [
            "2-3 years experience",
            "Advanced knowledge of Autodesk 3ds Max, V-Ray, Photoshop, and Adobe Creative Suite",
            "Photography experience",
            "Animation",
            "Furniture Modeling"
        ]
    }
]



const Career = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
      if(clicked === index) {
        return setClicked(null)
      }
      setClicked(index)
    }
    return (
        <div className="career">
            <Navbar2 />
            <div data-aos="fade-right" className="sec1">
                <p className="title">Careers</p>
                <div className="cont">
                    <p className="para">Fifthwall is a blend of creative thinkers, strategists and artists who thrive on collaborative relationships. Our multidisciplinary nature and comprehensive suite of specialised integrated services makes us a model partner for our clients.</p>
                </div>
            </div>
            <div className="bg" data-aos="fade-up"></div>
            <div data-aos="fade-up" className="sec2">
                <p className="title">Join Our Team</p>
                <div className="cont">
                    <p className="para">We're always on the lookout for talented individuals to join our expanding team. Please take a look at our current openings:</p>
                </div>
            </div>

            <div className="jobs">
                {jobs.map(({title, jobType, desc, note, responsibilities, skills}, index) => {
                    return (
                        <div key={index} className="job">
                            <div onClick={() => toggle(index)} className="header">
                                <p className="left tr">{title}</p>
                                <p className="right tr">{jobType}</p>
                                <img src={Plusicon} id={clicked === index ? 'times' : null} alt="plus_icon" />
                            </div>
                           {clicked === index ? <div className="body">
                                <p className="desc">{desc}</p>
                                <p className="info">{note}</p>
                                <div className="res">
                                    <p className="title">Responsibilities</p>
                                    <ul className="ress">
                                        {responsibilities.map((i, index) => {
                                            return (
                                                <li key={index}>{i}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="res">
                                    <p className="title">Experience & Skills</p>
                                    <ul className="ress">
                                        {skills.map((i, index) => {
                                            return (
                                                <li key={index}>{i}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <p className="imp">Apply directly by sending your CV and portfolio to careers@fifthwallagency.com</p>
                            </div> : null}
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Career;