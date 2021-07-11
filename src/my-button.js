import helloWorld from './hello-world';
import MyButton from "./component/MyButton/MyButton";
import Heading from "./component/Heading/Heading";
import _ from "lodash";
import React from "react";

const heading = new Heading();
heading.render(_.upperFirst("My button page"));
const myButton = new MyButton();
myButton.render();

helloWorld();