import { highContrast } from "./effects/contrast.js";
import { noir } from "./effects/bw.js";

const buttons=document.querySelectorAll(".effect-grid button");

buttons.forEach(btn=>{

btn.onclick=()=>{

switch(btn.innerText){

case "High Contrast":

highContrast();

break;

case "Noir":

noir();

break;

}

};

});
