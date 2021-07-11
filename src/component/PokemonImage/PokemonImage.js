import Pika from "./pika2.jpg";
import altText from "./altText.txt";
import "./PokemonImage.scss";

class PokemonImage {
render() {
    const img = document.createElement('img');
    img.alt = altText;
    img.classList.add("poke-image");
    img.src = Pika;
    const body = document.querySelector("body");
    body.appendChild(img);
}
}

export default PokemonImage