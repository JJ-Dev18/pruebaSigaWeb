import axios from "axios";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { useForm } from "../hooks/useForm";

const FormLogin = ({ setState }) => {
     const { dispatch } = useContext(AuthContext);
     const navigate = useNavigate();
    const [formValues, handleInputChange, reset] = useForm({
        email: "",
        password: "",
    });

    const { email, password } = formValues;
    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:80/gestionCitas/public/api/login",
                {
                    email,
                    password,
                }
            );
            if (res.data) {
                localStorage.setItem("token", res.data.access_token);
                const lastPath = localStorage.getItem("lastPath") || "/gestionCitas/public/";
                dispatch({
                    type:'loggin',
                    payload: {
                        name: res.data.user.name,
                    },
                });

                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="main">
                <div className="col-md-4 col-sm-6">
                    <img src="img/logo.png" alt="logo" />
                    {/* <img src="img/logoLeonidas.png" alt="logo Leonidas" /> */}
                    <div className="login-form">
                        <form onSubmit={login}>
                            <div className="form-group">
                                <label>Usuario</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Contrasena</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contrasena"
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="contentButtons">
                                <button
                                    type="submit"
                                    className="btn btn-black mt-3 mr-3"
                                >
                                    Iniciar Sesion
                                </button>
                                <button
                                    className="btn btn-secondary mt-3 mr-4 "
                                    onClick={() => setState(true)}
                                >
                                    Registrarse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormLogin;


