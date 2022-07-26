import React, { useEffect, useState } from "react"



const Pokemon = (props) => {

    const [texto, setTexto] = useState("")

    const [imagePkmn, setImagePkmn] = useState("")
    const [imagePkmnShiny, setImagePkmnShiny] = useState("")

    const [searchPkm, setSearchPkmn] = useState("https://pokeapi.co/api/v2/pokemon/")


    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon/" + searchPkm) 
        .then(res => res.json())
        .then(
            (data) => {
                setImagePkmnShiny(data.sprites.front_shiny)
                setImagePkmn(data.sprites.front_default)
            }
        )

    }, [texto])


    const handleChange = (e) => {
        setSearchPkmn(e.target.value)
    }


    const clickUsuario = (evento) => {

        setTexto(searchPkm)
       
    }

    return (
        <>
            Componente funcional
            {/* <input type="text" onClick={clickUsuario}/> */}
            <input type="text" onChange={ (e) => { handleChange(e) } } />
            <br></br>
            <button type="button" onClick={clickUsuario}> Buscar pokemon</button>
            <br></br>

            {/*Funcion flecha, el e es un evento 'a lo que se cambia' y luego se llama  a la funcion y se le pasa (e) como parametro  */}
            <img src={imagePkmn} />
            <img src={imagePkmnShiny} />
        </>
    )

}

export default Pokemon