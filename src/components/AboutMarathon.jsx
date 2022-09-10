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

  function UnsafeComponent({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return (
    <div className="aboutMarathon">
      <p>
        {data && <UnsafeComponent html={data.marathonInformation} />}
      </p>
    </div>
  );
};

export default AboutMarathon;
