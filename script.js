function startLoading(event) {
    event.preventDefault();

    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('hidden');

    setTimeout(() => {
        window.location.href = event.target.href;
    }, 1500); // Smooth transition delay
}

// Hide the loader after the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('loading-screen').classList.add('hidden');
});
