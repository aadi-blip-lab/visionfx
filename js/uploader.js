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

            // Set canvas size to match the preview container
            const maxWidth = preview.clientWidth - 70; // Account for padding
            const maxHeight = preview.clientHeight - 70;
            
            const aspectRatio = state.width / state.height;
            let displayWidth = maxWidth;
            let displayHeight = maxWidth / aspectRatio;
            
            if (displayHeight > maxHeight) {
                displayHeight = maxHeight;
                displayWidth = displayHeight * aspectRatio;
            }
            
            state.canvas.width = state.width;
            state.canvas.height = state.height;
            state.canvas.style.maxWidth = displayWidth + "px";
            state.canvas.style.maxHeight = displayHeight + "px";
            state.canvas.style.borderRadius = "16px";
            state.canvas.style.boxShadow = "0 20px 80px rgba(0,0,0,.45)";
            state.canvas.style.display = "block";

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

        video.style.maxWidth = "100%";
        video.style.maxHeight = "100%";
        video.style.borderRadius = "16px";

        preview.appendChild(video);

        state.source = video;
        state.type = "video";

        return;
    }

    alert("Unsupported file type.");

});
