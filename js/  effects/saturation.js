export default function saturation(imageData, effects) {

    const amount = effects.saturation;

    if (amount === 0) return;

    const data = imageData.data;
    const factor = 1 + amount / 100;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const gray = 0.299 * r + 0.587 * g + 0.114 * b;

        data[i]     = Math.max(0, Math.min(255, gray + (r - gray) * factor));
        data[i + 1] = Math.max(0, Math.min(255, gray + (g - gray) * factor));
        data[i + 2] = Math.max(0, Math.min(255, gray + (b - gray) * factor));
    }

}
