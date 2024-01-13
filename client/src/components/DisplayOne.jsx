import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DisplayOne = (props) => {

    const [pirate, setPirate] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then((res) => {
                setPirate(res.data.pirate);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div>
            <div className="header">
                <h1 className="main-text">{pirate.pirateName}</h1>
                <Link className="head-link" to="/home">See Crew</Link>
            </div>
            <div className="card">
                {
                    <div className="card-body">
                        <div>
                            <img src={pirate.imageUrl} alt={pirate.pirateName} width="500" height="600" />

                        </div>

                        <div className="card-right">

                            <div>
                                <Link className="pirate-name" to={`/pirate/edit/${pirate._id}`}> Edit {pirate.pirateName}</Link>
                            </div>
                            <p className="card-text">Position: {pirate.position}</p>
                            <p className="card-text">Treasures: {pirate.treasure}</p>
                            {
                                pirate.treasure > 10 && <p>Want to share?</p>
                            }
                            {
                                pirate.treasure === 0 && <p>Here's a dollar?</p>
                            }
                            {
                                pirate.pegLeg ? <p className="card-text">Peg Leg: Yes!</p>
                                    : <p className="card-text">Peg Leg: No!</p>
                            }
                            {
                                pirate.eyePatch ? <p className="card-text">Eye Patch: Yes!</p>
                                    : <p className="card-text">Eye Patch: No!</p>
                            }

                            {
                                pirate.hookHand ? <p className="card-text">Hook Hand: Yes!</p>
                                    : <p className="card-text">Hook Hand: No!</p>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default DisplayOne;
