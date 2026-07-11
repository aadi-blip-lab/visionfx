const canvas = document.getElementById("editorCanvas");
const ctx = canvas.getContext("2d");

function getImage() {
    return document.getElementById("previewImage");
}

function process(callback) {

    const img = getImage();

    if (!img) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.drawImage(img,0,0);

    const image = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    );

    callback(image.data);

    ctx.putImageData(image,0,0);

    img.src = canvas.toDataURL("image/png");

}

document.querySelectorAll(".effect-grid button")
.forEach(btn=>{

btn.onclick=()=>{

switch(btn.innerText){

case "High Contrast":

process(highContrast);

break;

case "Noir":

process(noir);

break;

}

};

});

function highContrast(data){

for(let i=0;i<data.length;i+=4){

data[i]=Math.min(255,(data[i]-128)*1.8+128);

data[i+1]=Math.min(255,(data[i+1]-128)*1.8+128);

data[i+2]=Math.min(255,(data[i+2]-128)*1.8+128);

}

}

function noir(data){

for(let i=0;i<data.length;i+=4){

let g=
0.299*data[i]+
0.587*data[i+1]+
0.114*data[i+2];

g=(g-128)*2.3+128;

g=Math.max(0,Math.min(255,g));

data[i]=g;
data[i+1]=g;
data[i+2]=g;

}

}
