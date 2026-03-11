import React, { useState } from "react";




const Semaforo = () => {

    const [redLight, setRedLight] = useState("btn-secondary");
    const [yellowLight, setYellowLigth] = useState("btn-secondary");
    const [greenLigth, setGreenLigth] = useState("btn-secondary");



    const changeToRedLight = () => {
        if (redLight === "btn-secondary") {
            setRedLight("btn-danger");
        } else {
            setRedLight("btn-secondary");
        }
    };


    const changeToYellowLight = () => {
        if (yellowLight === "btn-secondary") {
            setYellowLigth("btn-warning");
        } else {
            setYellowLigth("btn-secondary");
        }
    };

    const changeToGreenLight = () => {
        if (greenLigth === "btn-secondary") {
            setGreenLigth("btn-success");
        } else {
            setGreenLigth("btn-secondary");
        }
    };

    return <>
    <div className="bg-dark mx-auto" style={{width:"3rem", height:"7rem"}}></div>
    <div className="d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-around border border-5 rounded-5 border-secondary bg-dark d-block "> 
            <div onMouseDown={changeToRedLight} onMouseUp={changeToRedLight} className={"btn border-black border-2 rounded-circle mx-3 my-4 " + redLight } style={{ width: "8rem", height: "8rem" }}></div>
            <div onMouseDown={changeToYellowLight} onMouseUp={changeToYellowLight} className={"btn btn-secondary border-black border-2 rounded-circle mx-3 my-4 " + yellowLight} style={{ width: "8rem", height: "8rem" }}></div>
            <div onMouseDown={changeToGreenLight} onMouseUp={changeToGreenLight} className={"btn btn-secondary border-black border-2 rounded-circle mx-3 my-4 " + greenLigth} style={{ width: "8rem", height: "8rem" }}></div>
        </div>
    </div>
    <div className="bg-dark mx-auto" style={{width:"3rem", height:"23rem"}}></div>
    </>

};


export default Semaforo;