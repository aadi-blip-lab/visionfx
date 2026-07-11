import { state } from "./state.js";

export function render(){

    if(!state.source) return;

    const canvas=state.canvas;

    const ctx=state.ctx;

    canvas.width=state.source.naturalWidth;
    canvas.height=state.source.naturalHeight;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(state.source,0,0);

}
