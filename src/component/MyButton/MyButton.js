import "./MyButton.css";

class MyButton {
    MyButtonstyle = "myButtonStyles"
    render() {
        const button = document.createElement('button');
        button.innerText = "My message";
        button.classList.add(this.MyButtonstyle);
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerText = "Hello World";
            p.classList.add("myTextStyles");
            document.getElementsByTagName('body')[0].appendChild(p)
        }
        document.getElementsByTagName('body')[0].appendChild(button)
    }
}

export default MyButton