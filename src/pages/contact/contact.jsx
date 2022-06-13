import Footer from "../../components/footer/footer";
import Navbar2 from "../../components/navbar2/navbar2";
import "./contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <Navbar2 />
            <div data-aos="fade-right" className="flex-form">
                <div className="left">
                    <p className="title">Get In Touch</p>
                </div>
                <div className="right">
                    <form>
                        <p className="tip">Want to partner with us? Complete the form below and our team will get back to you shortly.</p>
                        <div className="input">
                            <input type="text" placeholder="Full Name*" />
                        </div>
                        <div className="input">
                            <input type="email" placeholder="Email*" />
                        </div>
                        <div className="flexinput">
                            <div className="input sm">
                                <select>
                                    <option selected disabled>Country</option>
                                </select>
                            </div>
                            <div className="input sm">
                                <input type="tel" placeholder="Telephone" />
                            </div>
                        </div>
                        <div className="input yt">
                            <label>Message*</label><br />
                            <textarea cols="30" rows="13"></textarea>
                        </div>
                        <button>Submit Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;