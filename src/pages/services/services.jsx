import { useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar2 from "../../components/navbar2/navbar2";
import "./services.scss";
import Template from "./template/template";
import One from "./servicesbranding/one.gif";
import Two from "./servicesbranding/two.png";
import Three from "./servicesbranding/three.png";
import Four from "./servicesbranding/four.gif";
import Five from "./servicesbranding/five.png";
import Six from "./servicesbranding/six.png";
import Onex from "./servicesdigital/one.png";
import Twox from "./servicesdigital/two.png";
import Threex from "./servicesdigital/three.gif";
import Fourx from "./servicesdigital/four.png";
import Fivex from "./servicesdigital/five.png";
import Onexx from "./servicesintegratedmarketing/one.png";
import Twoxx from "./servicesintegratedmarketing/two.png";
import Threexx from "./servicesintegratedmarketing/three.png";
import Fourxx from "./servicesintegratedmarketing/four.png";
import Fivexx from "./servicesintegratedmarketing/five.mp4";
import Onexxx from "./servicesvisualization/one.png";
import Twoxxx from "./servicesvisualization/two.mp4";
import Threexxx from "./servicesvisualization/three.png";
import Fourxxx from "./servicesvisualization/four.gif";
import Fivexxx from "./servicesvisualization/five.png";
import Sixxxx from "./servicesvisualization/six.MP4";
import Sevenxxx from "./servicesvisualization/seven.png";
import Eightxxx from "./servicesvisualization/eight.png";
import Ninexxx from "./servicesvisualization/nine.png";
import Tenxxx from "./servicesvisualization/ten.png";
import Elevenxxx from "./servicesvisualization/eleven.mp4";
import Onexxxx from "./servicesarchitecture/one.png";
import Twoxxxx from "./servicesarchitecture/two.png";
import Threexxxx from "./servicesarchitecture/three.png";
import Fourxxxx from "./servicesarchitecture/four.png";
import Fivexxxx from "./servicesarchitecture/five.gif";
import Sixxxxx from "./servicesarchitecture/six.png";
import Sevenxxxx from "./servicesarchitecture/seven.png";
import Eightxxxx from "./servicesarchitecture/eight.png";

const gallery = [One, Two, Three, Four, Five, Six];
const servicesbranding = [
  "Brand Identity",
  "Brand Campaign",
  "Brand Strategy",
  "Content Creation",
  "Collateral Materials Design",
  "Copywriting",
  "Naming",
  "Packaging Design",
  "Property Books & Brochures",
  "Photography and Art Direction",
  "Brand Positioning",
  "Print and Online Advertising",
  "Print Production",
  "Product Development",
  "Outdoor/Indoor Signage",
  "Signage Conceptualization",
];
const gallery2 = [Onex, Twox, Threex, Fourx, Fivex];
const servicesdigital = [
  "Digital Design & Strategy",
  "E-Newsletters",
  "Digital Consulting",
  "Analytics & Reporting",
  "Interactive Tools & Applications",
  "User Experience Design",
  "User Interface Design",
  "Targeted Campaigns",
  "Property Interactive Visualiser",
  "Responsive Website Design",
  "Website Development",
  "Paid Search & Media",
  "Social: Paid & Earned",
  "Search Engine Marketing (SEM)",
  "Search Engine Optimization (SEO)",
  "Social Media Management",
];
const gallery3 = [Onexx, Twoxx, Threexx, Fourxx];
const video3 = [Fivexx];
const servicesintegratedmarketing = [
  "Market research",
  "Marketing planning",
  "Data segmentation & Personalisation",
  "Marketing Campaigns & Toolkits",
  "On-site Marketing",
  "Event Production",
  "Media Engagement",
  "Social Media Marketing",
  "Analytics & Reporting",
  "Email Marketing",
  "Influencer Marketing",
];

const gallery4 = [
  Onexxx,
  Threexxx,
  Fourxxx,
  Fivexxx,
  Sevenxxx,
  Eightxxx,
  Ninexxx,
  Tenxxx,
];
const video4 = [Twoxxx, Sixxxx, Elevenxxx];
const servicesvisualization = [
  "Art Direction",
  "Illustrations",
  "Exterior Renderings",
  "Interior Renderings",
  "Marketing Floorplans",
  "3D Floorplans",
  "3D Virtual Tours",
  "Still Renderings",
  "Film & Video",
  "Photography",
  "Architectural Animations",
];

const gallery5 = [Onexxxx, Twoxxxx, Threexxxx, Fourxxxx, Fivexxxx, Sixxxxx, Sevenxxxx, Eightxxxx];
const servicesarchitecture = [
  "Conceptual Sketches",
  "Project Consulting",
  "Architectural Presentations",
  "Interior Design Consulting",
  "Experiential Marketing Centers",
  "Scale Models",
];

const Services = () => {
  const [page, setPage] = useState("branding");
  return (
    <div className="services">
      <Navbar2 />
      <ul className="nav">
        <li
          onClick={() => setPage("branding")}
          className={page === "branding" ? "active" : null}
        >
          Branding
        </li>
        <li
          onClick={() => setPage("digital")}
          className={page === "digital" ? "active" : null}
        >
          Digital
        </li>
        <li
          onClick={() => setPage("integrated")}
          className={page === "integrated" ? "active" : null}
        >
          Integrated Marketing
        </li>
        <li
          onClick={() => setPage("visualization")}
          className={page === "visualization" ? "active" : null}
        >
          Visualisation
        </li>
        <li
          onClick={() => setPage("architecture")}
          className={page === "architecture" ? "active" : null}
        >
          Architecture Consulting
        </li>
      </ul>
      {page === "branding" && (
        <Template
          text1="Branding"
          text2="The brand you know today will be reimagined for its tomorrow"
          text3="Brands need to be built with real purpose. Once we understand your vision, we’ll help you bring it together in a way people engage with and remember. Whether you’re selling off-plan, developing an idea from scratch or rethinking your brand strategy for the next stage of growth- we partner with you to uncover the heart of your story and push ourselves to deliver unique solutions that bring your vision to life. "
          text4="We’ll use our creativity and commercial know-how to deliver credible and differentiated brand identities and brand experiences across multiple touch points."
          gallery={gallery}
          services={servicesbranding}
        />
      )}
      {page === "digital" && (
        <Template
          text1="Digital"
          text2="Digital strategies that elevate the brand experience"
          text3="With the ever-changing world of digital, we pay close attention to advancements in technology and digital trends. Whether you are looking for eye-catching websites, apps, expertly-defined SEO strategy or a hybrid of the above, we can advise on the best technological solution to fulfil your brief.  "
          text4="Our audience-first approach to scoping, web design, technical know-how, and robust development process generate transformative results for our clients. "
          gallery={gallery2}
          services={servicesdigital}
        />
      )}
      {page === "integrated" && (
        <Template
          video={video3}
          text1="Integrated Marketing"
          text2="360° Approach to marketing "
          text3="The world of marketing is changing rapidly and brands have to work harder to connect, using multiple and complex channels to tell stories that resonate. Our integrated marketing campaigns are finely crafted to consider traditional channels but also the potential for sponsorship and PR, social media and guerrilla marketing techniques. "
          text4="With myriad avenues to reach potential consumers, we consider it essential to align with all parties on messages and ensure consistency across channels."
          gallery={gallery3}
          services={servicesintegratedmarketing}
        />
      )}
      {page === "visualization" && (
        <Template
          video={video4}
          text1="Visualisation"
          text2="Photorealistic CGI with No Limits"
          text3="Envisioning a world that doesn’t yet exist, takes a great amount of skill. Our in-house visualisation studio specializes in the transformation of architects’ concepts and developer’s visions into powerful three-dimensional photorealism. We create imagery that make a lasting impact- from still images to full 3D fly throughs, our stunning visualisations bring developments to life. "
          text4="Our integrated approach allows our team to create the most evocative, realistic environments perfectly in sync with a brand’s core identity. "
          gallery={gallery4}
          services={servicesvisualization}
        />
      )}
      {page === "architecture" && (
        <Template
          text1="Architecture Consulting"
          text2="Taking architectural concepts, a step further"
          text3="Our team of architects and strategists provide critical insight for developer concepts, new buildings and renovations, pulling from knowledge gained from past projects, best practices, and trend research. "
          text4="Our unique position as a one-stop creative solution for players in the property industry, enables us orchestrate branded experiences through strategic spatial consulting across both small and large projects."
          gallery={gallery5}
          services={servicesarchitecture}
        />
      )}

      <Footer />
    </div>
  );
};

export default Services;
