import Footer from "../../components/footer/footer";
import Navbar2 from "../../components/navbar2/navbar2";
import "./contact.scss";
import emailjs from "@emailjs/browser"
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {

    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');

    const [loading, setLoading] = useState(false);
     
       const data = {
                service_id: 'fifth wall',
                template_id: 'template_87n19ia',
                user_id: 'U1bsIqCzAmD5RB0O3',
                template_params: {
                    user_name: fullName,
                    user_email: email,
                    message: `${message} from ${country}`,
                    reply_to: phone
                }
       }
  
    const sendMessage = async (e) => {
        e.preventDefault();
        setLoading(true)
        
        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
            console.log(res)
            if(res.status === 200) {
                toast.success("Message sent successfully, We would reach out to you shortly")
            }
            setLoading(false)
        } catch(error) {
            console.log(error?.response?.data?.message)
            setLoading(false)
        }
    }
   

    return (
        <div className="contact">
            <Navbar2 />
            <div data-aos="fade-right" className="flex-form">
                <div className="left">
                    <p className="title">Get In Touch</p>
                </div>
                <div className="right">
                    <form onSubmit={sendMessage}>
                        <p className="tip">Want to partner with us? Complete the form below and our team will get back to you shortly.</p>
                        <div className="input">
                            <input required onChange={e => setFullname(e.target.value)} type="text" placeholder="Full Name*" />
                        </div>
                        <div className="input">
                            <input required onChange={e => setEmail(e.target.value)} type="email" placeholder="Email*" />
                        </div>
                        <div className="flexinput">
                            <div className="input sm">
                                <select  onChange={e => setCountry(e.target.value)}>
                                    <option selected disabled>Country</option>
                                    <option value="nigeria">Nigeria</option>
                                </select>
                            </div>
                            <div className="input sm">
                                <input onChange={e => setPhone(e.target.value)} type="tel" placeholder="Telephone" />
                            </div>
                        </div>
                        <div className="input yt">
                            <label>Message*</label><br />
                            <textarea onChange={e => setMessage(e.target.value)} cols="30" rows="13"></textarea>
                        </div>
                        <button type="submit">{!loading ? "Submit Message" : "Sending..."}</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;