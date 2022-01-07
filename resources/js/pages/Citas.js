import React from 'react'
import { useNavigate} from 'react-router-dom'
export const Citas = () => {
  const navigate = useNavigate()
  return (
      <div>
          <h1>Listas</h1>
          <button
              className='btn btn-primary'
              onClick={() => navigate("/gestionCitas/public/dashboard/createCitas")}
          >Crear Cita</button>
      </div>
  );
}
