import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const Display = () => {
    const [pirateList, setPirateList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then((res) => {
                setPirateList(res.data.pirates);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deletePirate = (pirateId) => {
        axios.delete(`http://localhost:8000/api/pirate/${pirateId}`)
            .then(res => {
                setPirateList(pirateList.filter(pirate => pirate._id !== pirateId));
            })
            .catch(err => console.log(err));
    };

    const viewPirate = (pirateId) => {
        navigate(`/pirate/${pirateId}`);
    };

    return (
        <div className="total">
            <div className="header">
                <h1 className="main-text">Pirate Crew</h1>
                <Link className="head-link" to="/pirate/add">Create a Pirate</Link>
            </div>
            <div className="resultDiv">
                {pirateList && pirateList.length > 0 ? (
                    pirateList.map((pirate, index) => (
                        
                        <div className="pirate-box" key={index}>
                            {pirate.position === "Captain" ? <p className="golden">Captain</p> : null}
                            
                            <img src={pirate.imageUrl} alt={pirate.pirateName} width="200" height="250" />
                            
                            <div className="pb-content">
                            <h3 className="name-tag">{pirate.pirateName}</h3>
                            <div>
                            <button className="button-pirate blue" onClick={() => viewPirate(pirate._id)}>View Pirate</button>
                            <button className="button-pirate red" onClick={() => deletePirate(pirate._id)}>Walk the plank</button>
                            </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <p>There are no pirates yet!</p>
                        <Link to="/pirate/add">Create One</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Display;
