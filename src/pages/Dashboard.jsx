import React, { useState, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "../styles/Dashboard.css";

const Dashboard = () => {

  const [data, setData] = useState([]);

  //render stat for render component
  const [render,setRender] = useState(false)

  //refs
  const marathonTime = useRef();
  const marathonDescription = useRef()
  const teamSize = useRef()
  const price = useRef()

  //calling data from database
  useEffect(() => {
    fetch("https://marathon-server.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  }, [render]);


  //updating time of marathon
  const update = (e) => {
    e.preventDefault();
    fetch("https://marathon-server.herokuapp.com/timeUpdate", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ data: marathonTime.current.value }),
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector('.alert').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none';
        },2000)
    })
  };

  //updating description
  const updateDescription = (e) => {
    e.preventDefault()
    fetch("https://marathon-server.herokuapp.com/updateDescription", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ data: marathonDescription.current.getContent() }),
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector('.alert').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none';
        },2000)
    })
  }

  //removing package
  const removeTeamPackage = (id) => {
    const filter = data.team.filter(data => {
        return data.id !== id
    })
    fetch("https://marathon-server.herokuapp.com/updateTeamPackage", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ data: filter }),
    })
    .then(res => res.json())
    .then(data => {
        setRender(!render)
        document.querySelector('.alert').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none';
        },2000)
    })
  }

  //adding package
  const addTeamPackage = async (e) => {
    e.preventDefault()

    //checking input empty or not
    if(teamSize.current.value && price.current.value){
        const random = await Math.floor(Math.random() * 800000) + 100000;
        const packages = {id:random,teamSize:teamSize.current.value,price:price.current.value}
        const allPackages = [...data.team,packages]
        fetch("https://marathon-server.herokuapp.com/updateTeamPackage", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ data: allPackages }),
        })
        .then(res => res.json())
        .then(data => {
            setRender(!render)
            document.querySelector('.alert').style.display = 'flex';
            setTimeout(() => {
                document.querySelector('.alert').style.display = 'none';
            },2000)
        })
    }else{
        alert("Team size or price can't be empty")
    }
  }

  return (
    <div className="dashboard">
      <div
        className="alert hidden bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p className="font-bold">Successfully Updated</p>
          </div>
        </div>
      </div>
      <h1 className="text-center">Dashboard</h1>
      <form action="">
        <div className="changeTime mb-4 flex">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Change Marathon Time:
          </label>
          <input
            ref={marathonTime}
            className="timeInput shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder={data && data.marathonTime}
          />
          <button
            onClick={update}
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </div>
        <div className="description">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="des"
          >
            Change Marathon Description:
          </label>
          <Editor
            onInit={(evt, editor) => marathonDescription.current = editor}
            id="des"
            className="desInput"
            apiKey="ueyn19tu5or4ds8wtwe2tkpsblw1qgtvvnkukltxscsf28j3"
            initialValue={data && data.marathonInformation}
            init={{
              height: 200,
              resize: "both",
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }",
            }}
          />
          <button onClick={updateDescription} className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update Description
          </button>
        </div>

        <div className="participateTeamList text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li
            aria-current="true"
            className="block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600"
          >
            Team Size Package List
          </li>
          {data.team &&
            data.team.map((data) => {
              return (
                <li className="block py-2 px-4 w-full border-b border-gray-200">
                  <p>Team Size: {data.teamSize}</p> <p>Price: ₹{data.price}</p>{" "}
                  <div>
                    <i onClick={(e) => removeTeamPackage(data.id)} className="fa-solid fa-rectangle-xmark cursor-pointer"></i>
                  </div>
                </li>
              );
            })}
        </div>
        <div className="addTeamPackage">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="des"
          >
            Add Team Package:
          </label>
          <input
            ref={teamSize}
            className="timeInput shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Team Size"
          />
          <input
            ref={price}
            className="timeInput shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Price"
          />
          <button onClick={addTeamPackage} className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
