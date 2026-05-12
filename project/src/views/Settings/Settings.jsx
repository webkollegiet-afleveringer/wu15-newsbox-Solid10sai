import { useState, useEffect } from "react-router";

export default function Settings() {
    function inputHandler(event) {
        console.log(event.target.checked);
        localStorage.setItem("sports", event.target.checked);
    }
    return (
        <>
        <h1>Settings</h1>
        Sports <input type="checkbox" datatype-categort="sports" onInput={inputHandler}/>

        </>
    );
}