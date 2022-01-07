import React, {useState,useEffect} from 'react'
import ReactDOM from 'react-dom';
import FormLogin from '../components/FormLogin'
import FormRegister from '../components/FormRegister'

export default function Login() {
  const [state, setState] = useState(false)
  
  return (
    <>
     <div className="sidenav">
                <div className="login-main-text">
                    <img src="img/logoLeonidas.png" alt="logo Leonidas" />
                    <h2>Institución Educativa Leonidas Esteban</h2>

                    <p>Gestion de citas </p>
                </div>
            </div>
      {
        state ? <FormRegister setState={setState}/> : <FormLogin setState={setState}/>
      }
    </>
  )
}
if (document.getElementById("login")) {
    ReactDOM.render(<Login />, document.getElementById("login"));
}