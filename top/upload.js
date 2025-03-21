document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const gallery = document.getElementById("gallery");

    fileInput.addEventListener("change", function (event) {
        const files = event.target.files;
        showImages(files);
    });

    function showImages(files) {
        Array.from(files).forEach(file => {
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const img = document.createElement("img");
                    img.src = e.target.result;
                    gallery.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    }
});
