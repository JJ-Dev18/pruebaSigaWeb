import React, {useState,useEffect,useContext} from 'react'
import ReactDOM from 'react-dom';
import { AuthContext } from '../auth/AuthContext';
import FormLogin from '../components/FormLogin'
import FormRegister from '../components/FormRegister'

export default function Login() {
  const [state, setState] = useState(false)
  // const { user } = useContext(AuthContext)
  
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
