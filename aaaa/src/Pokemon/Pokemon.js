import React, { useEffect, useState } from "react"
import "./pokemon.css"


const Pokemon = (props) => {

    const [texto, setTexto] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [buscarPkmn, setBuscarPkmn] = useState([])
    const [encontrarPkmn, setEncontrarPkmn] = useState([])
    const [imagePkmn, setImagePkmn] = useState("")
    const [imagePkmnShiny, setImagePkmnShiny] = useState("")
    const [imageBack, setImageBack] = useState("")
    const [imageBackShiny, setImageBackShiny] = useState("")



    useEffect( () => {
        
        fetch ("https://pokeapi.co/api/v2/pokemon/" + encontrarPkmn) 
          .then(res => res.json())
          .then(
            (data) => {
                console.log(data)
                console.log(data.abilities)
                console.log(data.moves)
                console.log(data.stats)
                setPokemon(data)        
                setImagePkmn(data.sprites.front_default)
                setImagePkmn(data.sprites.back_default)
                setImagePkmnShiny(data.sprites.front_shiny)
                setImagePkmnShiny(data.sprites.back_shiny)

            }
            )
        fetch ("https://pokeapi.co/api/v2/pokemon/25/encounters")
           .then(res => res.json())
           .then(
            (data2 => {
                console.log(data2)
                setBuscarPkmn(data2.location_area)
            }
                )
           )

    }, [texto])


    const handleChange = (e) => {
        setEncontrarPkmn(e.target.value)
    }


    const clickUsuario = (evento) => {
        setTexto(encontrarPkmn)
       
    }

    return (
        <>


            <input type={props.type} onChange={ (e) =>{handleChange(e)}} className= "buscar" id= "input"/>
            <button onClick= "buscar"  id="boton"> Buscar  </button>
            <br></br>
            <img src={imagePkmn} id= "img" />
            <img src={imageBack} id= "img"  />
            <img src={imagePkmnShiny} id= "img"  />
            <img src={imageBackShiny} id= "img"  />
            <br></br>
            <div id="titulo">nombre </div>
            <div id="div">{pokemon.nombre} </div>
            <br/>
            <div id="titulo">Peso </div>
            <div id="div">{pokemon.peso}</div>
            <br></br>

            <div id="titulo">Estadisticas</div>
            {pokemon.stats?.map((estadistica, idx) => {
                return(<div id="div" key={idx}>{estadistica.stat.name}: {estadistica.base_stat} </div>)
            })}

            <br></br>
            <div id="titulo">Habilidades</div>
            <br></br> 

            {pokemon.abilities?.map((habilidad, idx) => {
                return(<div id="div" key={idx}>{habilidad.ability.name}</div>)
            })}

            <br></br>

            <div id="titulo">Experiencia</div>
            <div id="div"> {pokemon.base_experience}</div>
            <br></br>

            

            <div id="titulo">Movimientos </div>
            {pokemon.moves?.map((movimientos, idx) => {
                return(<div id="div2" key={idx}> movimiento {movimientos.move.name}</div>)
            })}


        </>
    )

}

export default Pokemon