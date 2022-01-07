import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

export const Navbar = () => {
    const { dispatch , user} = useContext(AuthContext);
    const navigate = useNavigate();
     const handleLogout = () => {
         navigate("/gestionCitas/public/");

         dispatch({
             type: 'loggout',
         });
     };
  return (
      <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
              <a className="navbar-brand">
                  <img
                      src="img/logoLeonidas.png"
                      alt="logo leonidas"
                      className="navbar-brand"
                      width="50"
                  />
                  {user.name}
              </a>

              <button className="btn btn-danger" onClick={handleLogout}>
                  {" "}
                  Logout{" "}
              </button>
          </div>
      </nav>
  );
}
