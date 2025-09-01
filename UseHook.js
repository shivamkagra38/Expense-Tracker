import { useEffect, useState } from "react";

const UseHook = () => {

    console.log("Custom Hook");

    const[state,setState] = useState("");

    useEffect(()=>{
        setState("Shivam");
    },[]);

    return (<h1>Shivam</h1>);

}

export default UseHook;