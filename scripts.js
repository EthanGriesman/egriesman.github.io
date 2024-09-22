// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const iconsBar = document.getElementById('icons-bar');
    let isPaused = false;

    // Function to pause or resume scrolling
    function toggleScrollPause() {
        if (isPaused) {
            iconsBar.classList.remove('paused');
        } else {
            iconsBar.classList.add('paused');
        }
        isPaused = !isPaused;
    }

    // Event listener for clicks on icon items
    document.querySelectorAll('.icon-item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from propagating to the document
            toggleScrollPause();
        });
    });

    // Event listener for clicks outside the icons container
    document.addEventListener('click', (event) => {
        if (!iconsBar.contains(event.target)) {
            if (isPaused) {
                toggleScrollPause(); // Resume animation if it was paused
            }
        }
    });
});
