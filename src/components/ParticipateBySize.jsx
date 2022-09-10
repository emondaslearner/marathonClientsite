import React, { useState, useEffect } from "react";
const ParticipateBySize = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://marathon-server.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  }, []);

  return (
    <div className="participateBySize">
      <h1>Participate by sending your team in different team sizes*</h1>
      <div className="packages">
        {data.team &&
          data.team.map((data) => {
            return (
              <div className="package">
                <div>
                  <h1>{data.teamSize}</h1>
                  <p>Team Size</p>
                </div>
                <h2>{data.price}</h2>
                <h4>Contribution</h4>
              </div>
            );
          })}
      </div>
      <p>
        *Add-on team of {data.addOnTeam && data.addOnTeam.mamber} for{" "}
        <b>Rs. {data.addOnTeam && data.addOnTeam.price} </b> Race fees are
        additional depending on the category of the run an employee wishes to
        choose.
      </p>
    </div>
  );
};

export default ParticipateBySize;
