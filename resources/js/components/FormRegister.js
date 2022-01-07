import axios from "axios";
import { stringify } from "postcss";
import React, { useEffect, useState, useContext } from "react";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const FormRegister = ({ setState }) => {
    const [estudiantes, setestudiantes] = useState([]);
    const [loading, setloading] = useState(true);
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formValues, handleInputChange, reset] = useForm({
        name: "",
        email: "",
        password: "",
        estudiante_id : ""
    });
    const { name, email, password,estudiante_id } = formValues;

    useEffect(() => {
            axios
            .get("http://localhost:80/gestionCitas/public/api/estudiantes")
            .then(function (response) {
                setestudiantes(response.data.estudiantes);
                setloading(false);
               
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const register = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:80/gestionCitas/public/api/register",
                {
                    name,
                    email,
                    password,
                    estudiante_id: parseInt(estudiante_id),
                },
                { headers: { "Content-Type": "application/json" } }
            );
            if (res.data) {
                console.log(res.data)
                localStorage.setItem("token", res.data.access_token);
                dispatch({
                    type: "loggin",
                    payload: {
                        name: res.data.user.name,
                    },
                });
                navigate("/dashboard/");
            }
        } catch (error) {
            console.log(error.response?.data);
        }
    };
  
    return (
        <>
            <div className="main">
                <div className="col-md-4 col-sm-6">
                    <img src="img/logo.png" alt="logo" />
                    {/* <img src="img/logoLeonidas.png" alt="logo Leonidas" /> */}
                    <div className="login-form">
                        <form onSubmit={register}>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                />
                            </div>
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
                            <div className="form-group">
                                <label>Cod Estudiante</label>
                                <select
                                    className="custom-select"
                                    name="estudiante_id"
                                    value={estudiante_id}
                                    onChange={handleInputChange}
                                >
                                    <option
                                        
                                        value="0"
                                    >
                                       
                                    </option>
                                    {!loading &&
                                        estudiantes.map((estudiante) => (
                                            <option
                                                key={estudiante.id}
                                                value={estudiante.id}
                                            >
                                                {estudiante.id}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            <div className="contentButtons">
                                <button
                                    type="submit"
                                    className="btn btn-secondary mt-3 mr-4 "
                                >
                                    Registrarse
                                </button>
                                <button
                                    className="btn btn-black mt-3 mr-3"
                                    onClick={() => setState(false)}
                                >
                                    Ya tengo cuenta
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormRegister;
