const canvas=document.getElementById("editorCanvas");
const ctx=canvas.getContext("2d");

export function highContrast(){

const img=document.getElementById("previewImage");

if(!img) return;

canvas.width=img.naturalWidth;
canvas.height=img.naturalHeight;

ctx.drawImage(img,0,0);

let image=ctx.getImageData(0,0,canvas.width,canvas.height);

let d=image.data;

for(let i=0;i<d.length;i+=4){

d[i]=Math.min(255,(d[i]-128)*1.8+128);
d[i+1]=Math.min(255,(d[i+1]-128)*1.8+128);
d[i+2]=Math.min(255,(d[i+2]-128)*1.8+128);

}

ctx.putImageData(image,0,0);

img.src=canvas.toDataURL("image/png");

}
