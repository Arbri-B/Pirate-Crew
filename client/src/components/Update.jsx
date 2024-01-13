import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import axios from 'axios'
import '../App.css'
const Update = (props) => {
    const navigate = useNavigate()


    const [pirate, setPirate] = useState({})
    const [pirateName, setPirateName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [treasure, setTreasure] = useState(0);
    const [catchPhrase, setCatchPhrase] = useState("");
    const [pegLeg, setPegLeg] = useState(false);
    const [eyePatch, setEyePatch] = useState(false);
    const [hookHand, setHookHand] = useState(false);
    const [position, setPosition] = useState('Sailer')
    const [errorMessage, setErrorMessage] = useState("");


    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then((res) => {

                setPirate(res.data.pirate)
                setPirateName(res.data.pirate.pirateName)
                setImageUrl(res.data.pirate.imageUrl)
                setTreasure(res.data.pirate.treasure)
                setCatchPhrase(res.data.pirate.catchPhrase)
                setPegLeg(res.data.pirate.pegLeg)
                setHookHand(res.data.pirate.hookHand)
                setEyePatch(res.data.pirate.eyePatch)

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const navigateBack = () => {
        navigate(-1)
    }

    const updatePirate = (e) => {

        e.preventDefault();
        if (pirateName.length < 5 || pirateName.length > 30 || catchPhrase.length < 5) {
            setErrorMessage('Your form has some unsolved issues!')
        }
        else {

            axios.put(`http://localhost:8000/api/pirate/${id}`, {
                pirateName,
                imageUrl,
                treasure,
                catchPhrase,
                pegLeg,
                eyePatch,
                hookHand,
                position
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    setPirateName("");
                    setImageUrl("");
                    setTreasure(0)
                    setCatchPhrase("")
                    setPegLeg(false);
                    setEyePatch(false);
                    setHookHand(false);
                    setPosition('Sailer')
                })
                .catch(err => {
                    setErrorMessage("Your api has some problems!")
                    console.log(err)
                });

            navigate('/')


        }
    }


    return (
        <div>
            <div className="header">
                <h1 className="main-text">Update {pirate.pirateName}</h1>
                <Link className="head-link" to="/home">See Crew</Link>
            </div>
            <div className="update-form">
                {
                    errorMessage ?
                        <p className="red text-center">{errorMessage}</p> :
                        null
                }

                <form className="form" onSubmit={(e) => updatePirate(e)}>
                    <div className="form-left">
                        <div>
                            <label className="form-label">Pirate Name: </label>
                            <input className="form-control" type="text" value={pirateName} onChange={(e) => setPirateName(e.target.value)} placeholder="Enter the pirate name" />
                        </div>
                        {pirateName.length > 0 && pirateName.length < 5 && pirateName.length > 30 ?
                            <p className="red">The pirate name should be between 5 and 30 characters!</p> :
                            null
                        }
                        <div>
                            <label className="form-label">Image URL: </label>
                            <input className="form-control" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="URL goes here" pattern="https?://.+"
                                title="Include http:// or https:// in the URL" />
                        </div>

                        <div>
                            <label className="form-label"># of Treasure: </label>
                            <input className="form-control" type="number" value={treasure} onChange={(e) => setTreasure(e.target.value)} />
                        </div>



                        <div>
                            <label className="form-label">Catch Phrase: </label>
                            <input className="form-control" type="text" value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} placeholder="What do they say?" />
                        </div>
                        {catchPhrase.length > 0 && catchPhrase.length < 5 ?
                            <p className="red">The catch phrase must be longer than 4 characters</p> :
                            null
                        }

                    </div>

                    <div className="form-right">

                    <div>
                        <label className="form-label">Position: </label>
                        <select className="form-control" value={position} onChange={(e) => setPosition(e.target.value)}>
                            <option value="Sailer">Sailer</option>
                            <option value="Captain">Captain</option>
                            <option value="Firstmate">Firstmate</option>
                        </select>

                    </div>

                    <div>
                        <label className="form-check-label">
                            <input
                                type="checkbox"
                                checked={pegLeg}
                                onChange={() => setPegLeg(!pegLeg)}
                            />
                            Peg Leg
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input
                                type="checkbox"
                                checked={eyePatch}
                                onChange={() => setEyePatch(!eyePatch)}
                            />
                            Eye Patch
                        </label>
                    </div>
                    <div>
                        <label className="form-check-label">
                            <input
                                type="checkbox"
                                checked={hookHand}
                                onChange={() => setHookHand(!hookHand)}
                            />
                            Hook Hand
                        </label>
                    </div>

                    <button className="btn btn-success mt-2">Update the Pirate</button>
                    </div>

                </form>


            </div>
        </div>
    )
}
export default Update;