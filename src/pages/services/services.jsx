import { useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar2 from "../../components/navbar2/navbar2";
import "./services.scss";
import Template from "./template/template";

const gallery = ["https://res.cloudinary.com/giftguy/image/upload/v1655626356/01_brand-gif_unljlo.gif",
 "https://res.cloudinary.com/giftguy/image/upload/v1655626372/09b_font_awnek4.png",
  "https://res.cloudinary.com/giftguy/image/upload/v1655626379/11b_ipad_aaq0sy.png",
   "https://res.cloudinary.com/giftguy/image/upload/v1655626366/HEADER_IMAGE_mwly4a.gif",
    "https://res.cloudinary.com/giftguy/image/upload/v1655626376/05_brochure_uyo4ac.png",
     "https://res.cloudinary.com/giftguy/image/upload/v1655626379/15b_edited_mockup8_mvslnq.png"];
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
const gallery2 = ["https://res.cloudinary.com/giftguy/image/upload/v1655626669/10b_digital_mix_bqht0h.png",
 "https://res.cloudinary.com/giftguy/image/upload/v1655626669/11b_web-mockupB_jyy2vv.png",
  "https://res.cloudinary.com/giftguy/image/upload/v1655626672/07_realbanc_webMockup_h5rhgk.gif",
   "https://res.cloudinary.com/giftguy/image/upload/v1655626666/06b_allianz-webpages_slbucx.png",
    "https://res.cloudinary.com/giftguy/image/upload/v1655626668/10_ipad_kzmlsd.png"];
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
const gallery3 = ["https://res.cloudinary.com/giftguy/image/upload/v1655626921/pexelsb-george-milton-6953873_njiczp.png",
 "https://res.cloudinary.com/giftguy/image/upload/v1655626921/pexels-the-lazy-artist-gallery-4352621_azakcu.png",
  "https://res.cloudinary.com/giftguy/image/upload/v1655626918/28b_gift-bag_pli6ji.png",
   "https://res.cloudinary.com/giftguy/image/upload/v1655626914/31_billboard_vzr0pq.png"];
const video3 = ["https://res.cloudinary.com/giftguy/video/upload/v1655626944/Pexels_Videos_2450251_traqhz.mp4"];
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
  "https://res.cloudinary.com/giftguy/image/upload/v1655627247/one_t6ddid.png",
  "https://res.cloudinary.com/giftguy/image/upload/v1655627256/three_pwuzfm.png",
  "https://res.cloudinary.com/giftguy/image/upload/v1655627240/four_omshxb.gif",
  "https://res.cloudinary.com/giftguy/image/upload/v1655627233/five_rirgac.png",
  "https://res.cloudinary.com/giftguy/image/upload/v1655627256/seven_cqjndu.png",
  "https://res.cloudinary.com/giftguy/image/upload/v1655627233/eight_lqpoee.png",
  "https://res.cloudinary.com/giftguy/image/upload/v1655627239/nine_foc9ku.png",
  "https://res.cloudinary.com/giftguy/image/upload/v1655627255/ten_gevicc.png",
];
const video4 = ["https://res.cloudinary.com/giftguy/video/upload/v1655627356/two_s2vcbr.mp4",
 "https://res.cloudinary.com/giftguy/video/upload/v1655627387/six_pmyzlh.mp4",
  "https://res.cloudinary.com/giftguy/video/upload/v1655627326/eleven_uw68ta.mp4"];
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

const gallery5 = ["https://res.cloudinary.com/giftguy/image/upload/v1655628899/one_bmd4h9.png",
 "https://res.cloudinary.com/giftguy/image/upload/v1655628899/two_ctgubv.png",
  "https://res.cloudinary.com/giftguy/image/upload/v1655628899/three_q4bm1l.png",
   "https://res.cloudinary.com/giftguy/image/upload/v1655628898/four_pbfthl.png",
    "https://res.cloudinary.com/giftguy/image/upload/v1655628899/five_ovcye0.gif",
     "https://res.cloudinary.com/giftguy/image/upload/v1655628899/six_ffti4w.png",
      "https://res.cloudinary.com/giftguy/image/upload/v1655628898/seven_f7w3zs.png",
       "https://res.cloudinary.com/giftguy/image/upload/v1655628898/seven_f7w3zs.png"];
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
