import axios from 'axios'
import React ,{useEffect,useState}from 'react'

export const FormCrearCita = () => {
  const [psicologos, setpsicologos] = useState([])
  useEffect( async () => {
     const dataPsicologos = await axios.get(
         "http://localhost:80/gestionCitas/public/api/psicologos"
     );
     setpsicologos(dataPsicologos.data.psicologos)
  }, [])
  console.log(psicologos)
  return (
      <div className="container container-create">
          <form role="form">
              <div className="form-group">
                  <label htmlFor="email">Motivo</label>
                  <textarea className="form-control" id="motivo" />
              </div>
              <div className="form-group">
                  <label htmlFor="email">Fecha</label>
                  <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                  <label htmlFor="pwd">Hora</label>
                  <input type="password" className="form-control" id="pwd" />
              </div>
              <div className="form-group">
                  <label htmlFor="pwd">Psicologo</label>
                  <select className="form-control">
                      <option value="0"></option>
                      {psicologos.map((psicologo) => (
                          <option key={psicologo.id} value={psicologo.id}>
                              {psicologo.name}
                          </option>
                      ))}
                  </select>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                  Agendar Cita
              </button>
          </form>
      </div>
  );
}
