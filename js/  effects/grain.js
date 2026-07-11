export function filmGrain(data,intensity=15){

for(let i=0;i<data.length;i+=4){

const noise=(Math.random()-0.5)*intensity;

data[i]+=noise;
data[i+1]+=noise;
data[i+2]+=noise;

}

}
