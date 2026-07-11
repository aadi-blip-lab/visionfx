let states=[];

export function save(image){

states.push(image);

}

export function undo(){

return states.pop();

}
