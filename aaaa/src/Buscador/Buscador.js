import React, {useEffect, useInsertionEffect, useState} from "react"


const Buscador = (props) => {
  const [texto, setTexto] = useState("");
  const [searchPkm, setsearchPkmn] = useState("");
  const [imagePkmn, PkmnsetImage] = useState("");
  const [pkmnHp, setPkmnHp] = useState("");
  const [pkmnAtt,setPkmnAtt] = useState("");
  const [pkmnAttSp, setPkmnAttSp] = useState("");
  const [pkmnDef, setPkmnDef] = useState("");
  const [pkmnDefSp, setPkmnDefSp] = useState("");
  const [pkmnSpeed,setPkmnSpeed] = useState("");
  const [pkmnAtributes,setPkmnAtributes] = useState(0);


  useEffect( () => {
    fetch("https://pokeapi.co/api/v2pokemon/" + searchPkm)
    .then(res => res.json())
     .then(
      (data) => {
          setImagePkmn(data.sprites.front_default)
          setPkmnHp(data.stats[0].base_stat)
          setPkmnAtt(data.stats[1].base_stat)
          setPkmnDef(data.stats[2].base_stat)
          setPkmnAttSp(data.stats[3].base_stat)
          setPkmnDefSp(data.stats[4].base_stat)
          setPkmnSpeed(data.stats[5].base_stat)
          }
        )
     }, [texto])

  const handleChange = (pkmn) => {
    setsearchPkmn(pkmn.target.value)
    }

  const clickUsuario = (evento) => {
    setTexto(searchPkm)
    }

  const clickPokemon = (evento) => {
    console.log("Pokemon presionado")
    console.log(pkmnAtributes)
    if (pkmnAtributes == 0){
      setPkmnAtributes(1)

      } else {
         setPkmnAtributes(0)

        }

    return (
      <>
      <div className="pkmnStats">
      <input placeholder="nombre pokemon" type="text" onChange={(pkmn) => {handleChange(pkmn)}}></input>
      <br></br>
      <button className="button" type="button" onClick={clickUsuario}>Buscar</button>
      <br></br>
      <img onClick={clickPokemon} src={imagePkmn}></img>
      <p>Vida </p>
      <p>Attack </p>
      <p>Defence </p>
      <p>Special Attack </p>
      <p>Special Defence </p>
      <p>Speed</p>

      </div>
      </>
    )

     }

  }

