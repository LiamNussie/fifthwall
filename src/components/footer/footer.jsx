import "./footer.scss";
import Logo from './log.svg';
import Fb from './fb.svg';
import Ig from './ig.svg';
import Tw from './tw.svg';
import Ln from './ln.svg';
import Yt from './yt.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <div className="top">
                    <p className="name">Fifthwall<br />(FWA Marketing Limited)</p>
                </div>
                <div className="middle">
                    <p className="tit">Lagos</p>
                    <p className="add">No. 7-11 Obagun Avenue, off Fatai <br />Atere Way, Matori Industrial Estate.</p>
                </div>
                <div className="bottom">
                    <p className="tit">Telephone</p>
                    <p className="phone">+234 (0) 810 904 1169</p>
                </div>
            </div>
            <div className="middle xc">
                <div className="top">
                    <p className="bold">Want to partner <br /> with us?</p>
                </div>
                <div className="middle">
                    <p className="tit">London</p>
                    <p className="add">WEM Tower, 1 Harrow Road, Wembley, <br /> London, HA9 6FA.</p>
                </div>
                <div className="bottom">
                    <p className="tit">General Inquiries</p>
                    <p className="phone">contact@fifthwallagency.com</p>
                </div>
            </div>
            <div className="right cx">
                <div className="top">
                    <img src={Logo} alt="fifthway logo" />
                </div>
                <div className="middle">
                    <img src={Fb} alt="fb" />
                    <img src={Ig} alt="ig" />
                    <img src={Tw} alt="tw" />
                    <img src={Ln} alt="ln" />
                    <img src={Yt} alt="yt" />
                </div>
                <div className="bottom">
                    <p className="small">©2022 FWA Marketing Limited</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;