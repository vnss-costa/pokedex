import React, { useState } from "react";
import "./css/styles.css";
import "./css/pop-up.css";

// icons
import { AiOutlineStar } from "react-icons/ai";
import { FaWeightHanging } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";

// cores dos tipos de pokemon
import kind_color from "./color-relations";

export default function PokemonDetails() {
  const { pokemon: requested_pokemon } = useParams();
  // Aqui também tira essa inicialização quando implementar a API
  const [pokemon, setPokemon] = useState({
    id: 2,
    name: "ivysaur",
    image_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    number: 2,
    weight: 130,
    height: 10,
    kind:
      "grass;poison;electric;water;ice;fighting;fire;ground;flying;psychic;bug;rock;ghost;dark;dragon;steel;fairy;normal",
    created_at: "2020-05-25T04:48:23.261Z",
    updated_at: "2020-05-25T04:48:23.261Z"
  });

  // Usa a API com GET na rota https://pokedex20201.herokuapp.com/pokemons/{requested_pokemon} e aplica em setPokemon, usando o mesmo esquema de useEffect com lista vazia de dependências

  return (
    <Link to="/" className="curtain">
      {/* <div className="curtain"> */}
      <div>
        <AiOutlineStar size="5rem" />
        <div className="pop-up">
          {console.log(requested_pokemon)}
          <h1>
            <span>{pokemon.name}</span>
            <small>p#{pokemon.number}</small>
          </h1>
          <img src={pokemon.image_url} alt="" />
          <div>
            {pokemon.kind.split(";").map((kind) => {
              return (
                <span
                  key={kind}
                  style={{
                    "--color": kind_color[kind]
                  }}
                >
                  {kind}
                </span>
              );
            })}
          </div>
          <span>
            <FaWeightHanging size="1em" />
            {pokemon.weight / 10} kg
          </span>
          <span>
            <GiBodyHeight size="1em" />
            {pokemon.height / 10} m
          </span>
        </div>
      </div>
      {/* </div> */}
    </Link>
  );
}
