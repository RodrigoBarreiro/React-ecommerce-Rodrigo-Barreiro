import { useState } from "react"



export const Form = () => {

    const [ userData , setUserData] = useState ({name: "", lastName: "", direction: "", phoneNumber: "" })

    const handleSubmit = ( event) => {

        event.preventDefault ()
        console.log ( userData )

    }

    return (
        <div className="contenedor_formulario">
            <form className="formulario" action= "" onSubmit={handleSubmit}>
                <input 
                    type = "text" 
                    placeholder="Ingrese su Nombre" 
                    name="name" 
                    onChange={ (event) => setUserData ( {...userData, name: event.target.value})} 
                    value = { userData.name }  
                />
                <input 
                    type = "text" 
                    placeholder="Ingrese su Apellido"
                    name="lastName" 
                    onChange={ (event) => setUserData ( {...userData, lastName: event.target.value})} 
                    value = {userData.lastName}
                />
                <input 
                    type = "text" 
                    placeholder="Ingrese su Direccion" 
                    name="direction" 
                    onChange={ (event) => setUserData ( {...userData, direction: event.target.value})} 
                    value = { userData.direction }  
                />
                <input 
                    type = "number" 
                    placeholder="Ingrese su Telefono" 
                    name="phoneNumber" 
                    onChange={ (event) => setUserData ( {...userData, phoneNumber: event.target.value})} 
                    value = { userData.phoneNumber}  
                />
                <button type ="submit"> Enviar </button>
            </form>
        </div>
    )
}

