import React from "react";
import { useEffect } from "react";

const Logout = () => {

    //promises
    useEffect(() => {
        fetch("/logout", {
            method: "POST",
            headers: {
                Accept: "appllication/json", //this if for cookie
                "Content-Type": "application/json",
            },
            credentials: "include", //this is for cookie
        })
            .then((res) => {
                dispatch({ type: "USER", payload: false });
                navigate("/", { replace: true })
                if (res.status != 200) {
                    const error = new Error(res.error);
                    throw error;
                }
            })
    });

    return <div></div>;
};

export default Logout;
