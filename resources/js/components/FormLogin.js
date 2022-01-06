import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from '../hooks/useForm';

const  FormLogin = () => {
     
    const [ formValues,handleInputChange,reset] = useForm({
        usuario : '',
        contrasena : ''
    })
    const { usuario, contrasena} = formValues;
    const login = (e)=> {
     e.preventDefault();
     console.log(usuario,contrasena)
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
                                    name="usuario"
                                    value={usuario}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Contrasena</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contrasena"
                                     name="contrasena"
                                    value={contrasena}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='contentButtons'>
                            <button type="submit" className="btn btn-black mt-3 mr-3" >
                                Iniciar Sesion
                            </button>
                            <button
                                type="submit"
                                className="btn btn-secondary mt-3 mr-4 "
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
