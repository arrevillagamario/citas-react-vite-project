import {useEffect} from "react";
import Paciente from "./Paciente.jsx"
const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
  return (
    
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      {pacientes&&pacientes.length?(
        <> 
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="text-xl mt-5 mb-9 text-center">Administra tus <span className="font-bold text-indigo-600">Pacientes y Citas</span></p>
        {pacientes.map((paciente)=>{
          
          return <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}/>
          
        })}
        </>
      ):(
      <> 
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
        <p className="text-xl mt-5 mb-9 text-center">Comienza agregando pacientes<span className="font-bold text-indigo-600">y apareceran en este lugar</span></p>
        {pacientes.map((paciente)=>{
          
          return <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}/>
          
        })}
        </>
        )}
        
        
          
          
    </div>
  )
}

export default ListadoPacientes