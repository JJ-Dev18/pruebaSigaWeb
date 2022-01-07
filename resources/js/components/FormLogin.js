import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from '../hooks/useForm';

const  FormLogin = ({setState}) => {
     
    const [ formValues,handleInputChange,reset] = useForm({
        email : '',
        password : ''
    })
   
    const { email, password} = formValues;
    const login = async (e)=> {
     e.preventDefault();
      try {
          const res = await axios.post(
              "http://localhost:80/gestionCitas/public/api/login",
              {
                  email,
                  password,
              }
              );
              console.log(res)
          if (res.data) {
              localStorage.setItem("token", res.data.access_token);
          }
      } catch (error) {
          console.log(error);
      }
    }
    return (
        <>
            <div className="sidenav">
                <div className="login-main-text">
                    <img src="img/logoLeonidas.png" alt="logo Leonidas" />
                    <h2>Institución Educativa Leonidas Esteban</h2>

                    <p>Gestion de citas</p>
                </div>
            </div>
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
                            <div className='contentButtons'>
                            <button type="submit" className="btn btn-black mt-3 mr-3" >
                                Iniciar Sesion
                            </button>
                            <button
                                
                                className="btn btn-secondary mt-3 mr-4 "
                                onClick={()=> setState(true)}
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
}

export default FormLogin;

if (document.getElementById('login')) {
    ReactDOM.render(<FormLogin />, document.getElementById('login'));
}
