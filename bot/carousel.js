const track = document.querySelector('.carousel-track');

// Clona as imagens para efeito contínuo sem travamentos
track.innerHTML += track.innerHTML;
