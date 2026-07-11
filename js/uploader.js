import { state } from "./state.js";
import { render } from "./renderer.js";

const upload=document.getElementById("upload");

const preview=document.getElementById("preview");

upload.onchange=e=>{

const file=e.target.files[0];

if(!file) return;

preview.innerHTML="";

const url=URL.createObjectURL(file);

if(file.type.startsWith("image")){

const img=new Image();

img.onload=()=>{

state.source=img;

state.type="image";

state.canvas=document.createElement("canvas");

state.ctx=state.canvas.getContext("2d");

render();

preview.appendChild(state.canvas);

};

img.src=url;

}

else{

const video=document.createElement("video");

video.src=url;

video.controls=true;

video.loop=true;

video.autoplay=false;

video.style.width="100%";

preview.appendChild(video);

}

}
