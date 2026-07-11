export default function brightness(imageData, effects) {

    const amount = effects.brightness;

    if (amount === 0) return;

    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        // Clamp RGB values to 0-255 range
        data[i] = Math.max(0, Math.min(255, data[i] + amount));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + amount));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + amount));
    }

}
