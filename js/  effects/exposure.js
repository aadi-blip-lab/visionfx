export default function exposure(imageData, effects) {

    const value = effects.exposure;

    if (value === 0) return;

    const data = imageData.data;
    const factor = value * 2;

    for (let i = 0; i < data.length; i += 4) {
        // Clamp RGB values to 0-255 range
        data[i] = Math.max(0, Math.min(255, data[i] + factor));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + factor));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + factor));
    }

}
