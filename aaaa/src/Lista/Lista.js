import React, {useEffect, useInsertionEffect, useState} from "react"

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
                setPokemons(data.results)
            }
        )
    })
       
    const handleClick = () => {
        setTitulo("Ahora soy un titulo")
    }
    
    return (
        <>
            {titulo}
            <button onClick={handleClick}> Cambiar titulo</button>
            {pokemons.map((pokemon) => {
                return(<div>{pokemon.name}</div>)
            })}
            Pokemon Funciona !  
        </>
    )
}

export default Pokemon