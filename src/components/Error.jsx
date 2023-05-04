const Error =   ({children})=> {
  return (
    <div> 
        <div className="bg-red-800 text-center uppercase font-bold mb-3 p-3 rounded-md text-white">
            <p>{children}</p>
          </div>
    </div>
  )
}

export default Error