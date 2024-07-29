document.addEventListener('DOMContentLoaded', () => {
    const videoViewer = document.getElementById('video-viewer');
    const videoViewerVideo = document.getElementById('video-viewer-video');
    const closeBtn = document.querySelector('.video-viewer .close');
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
        video.addEventListener('click', () => {
            videoViewerVideo.src = video.src;
            videoViewerVideo.muted = false; // Desactiva el mute al abrir
            videoViewerVideo.loop = true;   // Configura el video para que se reproduzca en bucle
            videoViewer.style.display = 'block';
            videoViewerVideo.play(); // Reproduce el video al abrir

            // Evita el comportamiento de pantalla completa en dispositivos móviles
            videoViewerVideo.addEventListener('webkitfullscreenchange', () => {
                if (document.fullscreenElement || document.webkitFullscreenElement) {
                    document.exitFullscreen();
                }
            });
        });
    });

    closeBtn.addEventListener('click', () => {
        videoViewer.style.display = 'none';
        videoViewerVideo.pause(); // Pausa el video al cerrar
        videoViewerVideo.src = ''; // Limpia la fuente para evitar reproducción automática
        videoViewerVideo.loop = false; // Reestablece el atributo loop
    });

    videoViewer.addEventListener('click', (event) => {
        if (event.target !== videoViewerVideo && event.target !== closeBtn) {
            videoViewer.style.display = 'none';
            videoViewerVideo.pause();
            videoViewerVideo.src = '';
            videoViewerVideo.loop = false; // Reestablece el atributo loop
        }
    });

    videoViewerVideo.addEventListener('click', () => {
        // Alterna entre mute y sonido
        if (videoViewerVideo.muted) {
            videoViewerVideo.muted = false;
        } else {
            videoViewerVideo.muted = true;
        }
    });
});

//PRUEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA


document.addEventListener('DOMContentLoaded', () => {
    const viewer = document.getElementById('photo-viewer');
    const viewerImg = document.getElementById('photo-viewer-img');
    const closeBtn = document.querySelector('.photo-viewer .close');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            viewerImg.src = thumbnail.src;
            viewer.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        viewer.style.display = 'none';
    });

    viewer.addEventListener('click', (event) => {
        if (event.target !== viewerImg && event.target !== closeBtn) {
            viewer.style.display = 'none';
        }
    });
});
