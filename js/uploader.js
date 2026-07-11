import { setCurrentFile } from "./preview.js";

const upload = document.getElementById("upload");
const preview = document.getElementById("previewContainer");

upload.addEventListener("change", e => {

    const file = e.target.files[0];

    if (!file) return;

    setCurrentFile(file);

    preview.innerHTML = "";

    const url = URL.createObjectURL(file);

    if (file.type.startsWith("image")) {

        const img = document.createElement("img");

        img.src = url;

        img.id = "previewImage";

        preview.appendChild(img);

    }

    else {

        const video = document.createElement("video");

        video.src = url;

        video.controls = true;

        video.loop = true;

        video.id = "previewVideo";

        preview.appendChild(video);

    }

});
