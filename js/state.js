export const state = {

    // Original uploaded source
    source: null,

    // image | video
    type: null,

    // Working canvas
    canvas: null,
    ctx: null,

    // Original dimensions
    width: 0,
    height: 0,

    // Zoom & View
    zoom: 1,
    rotation: 0,
    flipX: false,
    flipY: false,

    // Current preset
    preset: null,

    // Export settings
    export: {
        format: "png",
        quality: 1,
        resolution: "480p"
    },

    // Non-destructive adjustments
    effects: {

        exposure: 0,
        brightness: 0,
        contrast: 0,

        highlights: 0,
        shadows: 0,

        whites: 0,
        blacks: 0,

        saturation: 0,
        vibrance: 0,

        temperature: 0,
        tint: 0,

        clarity: 0,
        texture: 0,

        sharpness: 0,
        blur: 0,

        grain: 0,
        bloom: 0,
        glow: 0,
        halation: 0,
        vignette: 0,

        hue: 0,

        fuji: 0,
        kodak: 0,
        noir: 0,
        hud: 0,
        vhs: 0,
        crt: 0,
        glitch: 0

    }

};
