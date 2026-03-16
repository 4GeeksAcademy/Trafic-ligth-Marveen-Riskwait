import React, { useState } from "react";




const Semaforo = () => {

    const [color, setColor] = useState("null");
    
    

    return <>
    <div className="bg-dark mx-auto" style={{width:"3rem", height:"7rem"}}></div>
    <div className="d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-around border border-5 rounded-5 border-secondary bg-dark d-block "> 
            <button onClick={()=>setColor("red")} className={`btn border-black border-2 rounded-circle mx-3 my-4 ${color === "red"? "btn-danger" : "btn-secondary"}`  } style={{ width: "8rem", height: "8rem" }}></button>
            <button onClick={()=>setColor("yellow")} className={`btn btn-secondary border-black border-2 rounded-circle mx-3 my-4 ${color === "yellow"? "btn-warning" : "btn-secondary"}` } style={{ width: "8rem", height: "8rem" }}></button>
            <button onClick={()=>setColor("green")} className={`btn btn-secondary border-black border-2 rounded-circle mx-3 my-4 ${color === "green"? "btn-success" : "btn-secondary"}`} style={{ width: "8rem", height: "8rem" }}></button>
        </div>
    </div>
    <div className="bg-dark mx-auto" style={{width:"3rem", height:"23rem"}}></div>
    </>

};


export default Semaforo;