import { state } from "../state.js";
import { render } from "../renderer.js";

const controls = [
    "exposure",
    "brightness",
    "contrast",
    "saturation",
    "grain"
];

controls.forEach(name => {

    const slider = document.getElementById(name);

    const value = document.getElementById(name + "Value");

    slider.addEventListener("input", e => {

        const v = Number(e.target.value);

        state.effects[name] = v;

        value.textContent = v;

        render();

    });

});
