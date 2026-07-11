const canvas=document.getElementById("editorCanvas");
const ctx=canvas.getContext("2d");

export function noir(){

const img=document.getElementById("previewImage");

if(!img) return;

canvas.width=img.naturalWidth;
canvas.height=img.naturalHeight;

ctx.drawImage(img,0,0);

let image=ctx.getImageData(0,0,canvas.width,canvas.height);

let d=image.data;

for(let i=0;i<d.length;i+=4){

let g=
0.299*d[i]+
0.587*d[i+1]+
0.114*d[i+2];

g=(g-128)*2.5+128;

g=Math.max(0,Math.min(255,g));

d[i]=g;
d[i+1]=g;
d[i+2]=g;

}

ctx.putImageData(image,0,0);

img.src=canvas.toDataURL("image/png");

}
