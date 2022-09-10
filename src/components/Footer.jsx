import React from "react";
import mail from '../images/Mail.svg'
import phone from '../images/Phone.svg'
import user from '../images/User.svg'

const Footer = () => {
  return (
    <>
      <div className="footerParticipateBody participateBody">
        <h1>
          <span>We Can. </span> We Must. <span> We Will.</span>
        </h1>
        <button>Participate Now</button>
      </div>
      <div className="footer">
        <p><img src={user} alt="" /> Ms. Tanvi Mehta</p>
        <p><img src={phone} alt="" /> +91-98920 44369</p>
        <p><img src={mail} alt="" /> tanvi.mehta@chinmayamission.com</p>
      </div>
    </>
  );
};

export default Footer;
