import { useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar2 from "../../components/navbar2/navbar2";
import Clients from "../about/clients/clients";
import "./expertise.scss";
import ReuseTemplate from "./reuseTemplate/reuseTemplate";
import Residential from "./residential.svg";
import Commercial from "./commercial.svg";
import Hospitality from "./hospitality.svg";
import Place from "./place.svg";
import Corporate from "./corporate.svg";
import Luxury from "./luxury.svg";

const Expertise = () => {
    const [page, setPage] = useState("residential");
    return (
        <div className="expertise">
            <Navbar2 />
            <ul className="nav">
                <li onClick={() => setPage("residential")} className={page === "residential" ? "active" : null}>Residential</li>
                <li onClick={() => setPage("commercial")} className={page === "commercial" ? "active" : null}>Commercial</li>
                <li onClick={() => setPage("hospitality")} className={page === "hospitality" ? "active" : null}>Hospitality</li>
                <li onClick={() => setPage("place")} className={page === "place" ? "active" : null}>Place Branding</li>
                <li onClick={() => setPage("corporate")} className={page === "corporate" ? "active" : null}>Corporate</li>
                <li onClick={() => setPage("luxury")} className={page === "luxury" ? "active" : null}>Luxury Branding</li>
            </ul>
            {page === "residential" && <ReuseTemplate bg={Residential} sideText="High-end residential branded campaigns" topText="In the hyper-competitive residential space, standing out isn’t easy. And it’s not enough. A brand needs to inspire, appeal, and engage – it needs to make people want to live there. But above all else it needs to deliver real results." bottomText="A strategic approach from the very beginning can make all the difference to the success and number of sales a residential development achieves – which is why it needs to be carried out professionally – with an agency like Fifthwall. We work carefully to create a strong brand identity that can help to connect a residential development to the community where it lies, help to improve public perception of the site, and also boost leads and sales." />}
            {page === "commercial" && <ReuseTemplate bg={Commercial} sideText="Open for business" topText="We re-envision commercial spaces, with the aim of attracting a diverse mix of tenants transforming it into a destination. We craft brand narratives that weave together the people, the place, and the product in an effort to address the complex process of choosing a location to operate your business. The end result is a far more personal approach to a commercial office campaign—one that is dynamic and adapts to cultural and neighbourhood trends." bottomText="Our highly specialised team of creatives, media planners and production managers are capable of executing standout campaigns that respond accurately to the demands of any project, offering sound advice, and anticipating future marketing needs." />}
            {page === "hospitality" && <ReuseTemplate bg={Hospitality} sideText="Elevated hospitality brand experiences" topText="From the overall concept to the finest details, in hospitality, everything matters. Every hotel and resort in existence, from small boutique properties through to large-scale all inclusives and everything in between, has a brand presence. We build great strategy, visual identity and a diverse platform of integrated marketing materials to create brand experiences that resonate. Our deep level of creative thinking and proven expertise leads to truly one-of-a-kind, industry-leading campaigns." bottomText="Guest experience extends beyond your premises, and is integral to your ongoing communications. As visceral emotional creatures, humans are fond of ideas, stories, concepts and even products that appeal to the coveted emotional nerve in them. We help create an emotive brand that connects and resonates with your audience, optimise the development of your brand loyalty and create guests for life." />}
            {page === "place" && <ReuseTemplate bg={Place} sideText="A place brand reflects what a place currently is and inspires what it can be in the future" topText="In a world where the movement of people, capital and ideas is more fluid than ever, a strong place brand is more important than ever. We capture the spirit of a destination, bringing character to the communities we shape- creating placemaking experiences, people remember." bottomText="The long-term prosperity and growth of a place- a country, city or community, depends very much on how others see it. A place's brand, image and received perception are critical to success. We develop targeted marketing strategies designed to drive visitor numbers and enable the place stand out against global and local competition. " />}
            {page === "corporate" && <ReuseTemplate bg={Corporate} sideText="Branding with purpose- for real estate, corporates and architectural firms" topText="We’re your partner in defining and articulating your brand as an entity that meets the changed expectations people now have for any organisation – whether they’re considering becoming a customer or a member of your team. We work with both new and established businesses looking to re-invent themselves." bottomText="We believe that every brand should have a purpose. Uniting strategy with intuition, vision with business, we pinpoint the visceral spirit of why a brand exists and breathe life into it. By putting purpose first, and working as a strategic and creative resource to our clients, we align every step of the process to reveal a brand’s highest potential." />}
            {page === "luxury" && <ReuseTemplate bg={Luxury} sideText="Luxury at its finest" topText="Luxury home buyers expect extraordinary homes. At Fifthwall, we help you dive into the mind of luxury buyers to build a brand that resonates with them. From design to eloquent storytelling, our team of marketing and branding experts is ready to give your brand the luxurious finish it deserves- to make a lasting impression on your prospective buyers." bottomText="A luxury brand needs to live, breathe, and create an essence. That essence is delivered through visual expressions, tangibility, and consistent language. Details also develop emotion, exclusivity and status. Luxury is about innovation and quality. It is not about showing off, but about being authentic." />}
            <Clients />
            <Footer />
        </div>
    )
}

export default Expertise;