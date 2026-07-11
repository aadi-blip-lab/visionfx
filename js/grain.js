export function addGrain(data, amount=18){

for(let i=0;i<data.length;i+=4){

const noise=(Math.random()-0.5)*amount;

data[i]+=noise;

data[i+1]+=noise;

data[i+2]+=noise;

}

}
