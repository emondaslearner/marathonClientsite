import React, { useState, useEffect } from "react";

const AboutMarathon = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://marathon-server.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  }, []);
  return (
    <div className="aboutMarathon">
      <p>
        {data && data.marathonInformation}
      </p>
    </div>
  );
};

export default AboutMarathon;
