

<!-- JavaScript to handle button clicks and toggle galleries -->
    function hideAllGalleries() {
        document.querySelectorAll('.gallery').forEach(gallery => {
            gallery.style.display = 'none';
        });
    }

    function showGallery(id) {
        hideAllGalleries(); // Hide all galleries
        document.getElementById(id).style.display = 'block'; // Display the selected gallery
    }

    const audioElement = document.getElementById('audioElement');
    const audioElement1 = document.getElementById('audioElement1');
    const audioElement2 = document.getElementById('audioElement2');

    // Event listeners for each button
    document.getElementById('button1').addEventListener('click', () => {
        showGallery('gallery1');
        audioElement.play();
    });

    document.getElementById('button2').addEventListener('click', () => {
        showGallery('gallery2');
        audioElement1.play();
    });

    document.getElementById('button3').addEventListener('click', () => {
        showGallery('gallery3');
        audioElement2.play();
    });

    // Initially hide all galleries when the page loads
    hideAllGalleries();
