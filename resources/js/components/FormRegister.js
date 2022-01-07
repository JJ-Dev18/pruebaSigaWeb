import axios from 'axios';
import { stringify } from 'postcss';
import React, {useEffect} from 'react';
import { useForm } from '../hooks/useForm';

const  FormRegister = ({setState}) => {
     
    const [ formValues,handleInputChange,reset] = useForm({
        name: '',
        email : '',
        password : ''
    })
    const { name, email,password} = formValues;
    const register = async (e)=> {
     e.preventDefault();
     try {
         const res = await axios.post("http://localhost:80/gestionCitas/public/api/register",{
             name,email,password
         });
         if(res.data){
             localStorage.setItem('token',res.data.access_token)
         }
         
     } catch (error) {
         console.log(error)
         
     }

     
    }
   
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
}

export default FormRegister;


