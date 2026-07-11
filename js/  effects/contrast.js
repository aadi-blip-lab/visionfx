export default function contrast(imageData, effects){

    const amount = effects.contrast;

    if(amount === 0) return;

    const data = imageData.data;

    const factor = (259 * (amount + 255)) / (255 * (259 - amount));

    for(let i = 0; i < data.length; i += 4){
        data[i] = Math.max(0, Math.min(255, factor * (data[i] - 128) + 128));
        data[i + 1] = Math.max(0, Math.min(255, factor * (data[i + 1] - 128) + 128));
        data[i + 2] = Math.max(0, Math.min(255, factor * (data[i + 2] - 128) + 128));
    }

}
