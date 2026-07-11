import { state } from "./state.js";
import { render } from "./renderer.js";

const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

if (!upload) {
    console.error("Upload input not found");
}

if (!preview) {
    console.error("Preview container not found");
}

upload.addEventListener("change", (e) => {

    const file = e.target.files[0];

    if (!file) return;

    preview.innerHTML = "";

    const url = URL.createObjectURL(file);

    // IMAGE
    if (file.type.startsWith("image/")) {

        const img = new Image();

        img.onload = () => {

            state.source = img;
            state.type = "image";

            state.width = img.naturalWidth;
            state.height = img.naturalHeight;

            state.canvas = document.createElement("canvas");
            state.ctx = state.canvas.getContext("2d");
            state.canvas.width = state.width;
            state.canvas.height = state.height;

            render();

            preview.appendChild(state.canvas);

            URL.revokeObjectURL(url);

        };

        img.onerror = () => {
            console.error("Image failed to load.");
        };

        img.src = url;

        return;
    }

    // VIDEO
    if (file.type.startsWith("video/")) {

        const video = document.createElement("video");

        video.src = url;
        video.controls = true;
        video.autoplay = false;
        video.loop = true;
        video.playsInline = true;

        preview.appendChild(video);

        state.source = video;
        state.type = "video";

        return;
    }

    alert("Unsupported file type.");

});
