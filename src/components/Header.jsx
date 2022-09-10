import React,{useEffect,useState} from "react";
import logo from "../images/path0.svg";
import marathonLogo from "../images/image696.png";
const Header = () => {

  const [data,setData] = useState([])

  useEffect(() => {
    fetch('https://marathon-server.herokuapp.com/')
    .then(res => res.json())
    .then(data => {
      setData(data[0])
    })
  },[])

  return (
    <div className="headerMain">
      <div className="header flex">
        <div className="logo flex">
          <div>
            <img className="logo1" src={logo} alt="Logo" />
          </div>
          <div>
            <img className="logo2" src={marathonLogo} alt="Marathon Logo" />
          </div>
        </div>
        <div className="marathonDate flex">
          <h1>
            Tata Mumbai Marathon on <span> {data && data.marathonTime} </span>
          </h1>
        </div>
      </div>
      <div className="participateMain">
        <div className="participateBody">
            <h1><span>We Can. </span> We Must. <span> We Will.</span></h1>
            <button>Participate Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
