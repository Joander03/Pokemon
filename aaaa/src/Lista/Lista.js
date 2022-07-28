import React, {useEffect, useInsertionEffect, useState} from "react"
import "./lista.css"

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [titulo, setTitulo] = useState("Hola soy un titulo")


    useEffect(() => {
        console.log("Soy el userEffect gatillandose ;0")
    },[titulo])

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data)
                setPokemons(data)
                setPokemons(data.results)
            }
        )
    }, [])
       
    const handleClick = () => {
        setTitulo("Ahora soy un titulo")
    }
    
    return (
        <>
            {titulo}
            <div id="zzz"></div>
            {pokemons.map((pokemon) => {
                return(<div id="ola">{pokemon.name}</div>)
            })}
            Pokemon Funciona !  
        </>
    )
}

export default Pokemon