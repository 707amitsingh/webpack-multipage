import "./Heading.scss";

class Heading {
  render(heading) {
    const h1 = document.createElement("h1");
    h1.innerText = heading;
    h1.classList.add("myHeading");
    document.getElementsByTagName("body")[0].appendChild(h1);
  }
}

export default Heading;
