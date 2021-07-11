import PokemonImage from "./component/PokemonImage/PokemonImage";
import Heading from "./component/Heading/Heading";
import _ from "lodash";
import React from "react";

const heading = new Heading();
const pokemonImage = new PokemonImage();

heading.render(_.upperFirst("Pika Pika"));
pokemonImage.render();