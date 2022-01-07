import React, { useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import {AppRouter} from '../js/routers/AppRouter'
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const Main = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    );
};

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
