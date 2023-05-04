import {useState} from "react"
import {useEffect} from "react"
import Error from "./Error"


const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

  const [nombre,setNombre]=useState('')
  const [propietario,setPropietario]=useState('')
  const [email,setEmail]=useState('')
  const [fecha,setFecha]=useState('')
  const [sintomas,setSintomas]=useState('')
  const [error,setError]=useState(false);

 
   useEffect(()=>{
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
    
   },[paciente])
  

  const generarId=()=>{
    const random=Math.random().toString(36).substring(2);
    const fecha=Date.now().toString(36);
    return fecha+random
  }

  const handleSubmit=(evt)=>{
    evt.preventDefault();
    if ([nombre,propietario,email,fecha,sintomas].includes("")) {
      setError(true);
      console.log("hay almenos un campo vacio")
      return;
    }
    setError(false)

    //objeto de paciente
    const objPaciente={
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }
    if(paciente.id){
      //editando registro
      objPaciente.id=paciente.id;
      const pacientesActu=pacientes.map(pacienteState => pacienteState.id===paciente.id?objPaciente:pacienteState)
      setPacientes(pacientesActu)
      setPaciente({})
    }
    else{
      //Creando nuevo registro
      objPaciente.id=generarId();
      setPacientes([...pacientes,objPaciente]);
    }
    //reiniciamos el formulario

    setEmail("");
    setFecha("");
    setNombre("");
    setPropietario("");
    setSintomas("");
    
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="mt-5 text-center mb-10">
        Añade Pacientes y {""} <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white  shadow-lg rounded-lg py-10 px-7 mb-10 ">
        {error&& <Error>Todos los campos son obligatorios</Error>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota 
          </label>
          <input value={nombre} onChange={(evt)=>{setNombre(evt.target.value)}} id="mascota" type="text" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5"> 
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre propietario
          </label>
          <input value={propietario} onChange={(evt)=>{setPropietario(evt.target.value)}} id="propietario" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5"> 
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input value={email} onChange={(evt)=>{setEmail(evt.target.value)}} id="email" type="email" placeholder="Email contacto propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5"> 
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input value={fecha} onChange={(evt)=>{setFecha(evt.target.value)}} id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5"> 
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea value={sintomas} onChange={(evt)=>{setSintomas(evt.target.value)}} id="sintomas"placeholder="Describe los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
        </div>
        <input type="submit" value={paciente.id?"Editar Paciente":"Agregar Paciente"} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" />
      </form>
    </div>
    
  )
}
export default Formulario

