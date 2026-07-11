import { state } from "./state.js";

const pipeline = [];

// Register an effect
export function registerEffect(effect) {
    pipeline.push(effect);
}

// Main renderer
export function render() {

    if (!state.source) return;

    const canvas = state.canvas;
    const ctx = state.ctx;

    if (!canvas || !ctx) return;

    canvas.width = state.width;
    canvas.height = state.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
        state.source,
        0,
        0,
        canvas.width,
        canvas.height
    );

    let imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    );

    pipeline.forEach(effect => {
        effect(imageData, state.effects);
    });

    ctx.putImageData(imageData, 0, 0);

}
