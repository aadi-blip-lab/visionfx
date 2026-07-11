export default function brightness(imageData, effects) {

    const amount = effects.brightness;

    if (amount === 0) return;

    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {

        data[i] += amount;
        data[i + 1] += amount;
        data[i + 2] += amount;

    }

}
