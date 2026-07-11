const buttons = document.querySelectorAll(".effect-grid button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const img = document.getElementById("previewImage");

        if (!img) return;

        switch (button.innerText) {

            case "High Contrast":

                img.style.filter =
                    "contrast(2.2) brightness(.95)";

                break;

            case "Noir":

                img.style.filter =
                    "grayscale(1) contrast(2.5)";

                break;

            case "Bloom":

                img.style.filter =
                    "brightness(1.15) contrast(1.2)";

                break;

            case "Glow":

                img.style.filter =
                    "brightness(1.3) saturate(1.4)";

                break;

            case "VHS":

                img.style.filter =
                    "contrast(1.3) saturate(.7)";

                break;

            default:

                img.style.filter = "";

        }

    });

});
