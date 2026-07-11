const upload = document.getElementById("upload");
const preview = document.getElementById("previewContainer");

upload.addEventListener("change", function () {

const file = this.files[0];

if(!file) return;

preview.innerHTML="";

const url = URL.createObjectURL(file);

if(file.type.startsWith("image")){

const img=document.createElement("img");

img.src=url;

preview.appendChild(img);

}

else if(file.type.startsWith("video")){

const video=document.createElement("video");

video.src=url;

video.controls=true;

video.autoplay=false;

video.loop=true;

preview.appendChild(video);

}

});
