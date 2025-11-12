// Asegurar que el header se muestre después del loader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('header').style.display = 'block';
        document.getElementById('navigation-content').style.display = 'flex';
        document.getElementById('home-link').classList.add('active');
    }, 1500);
});
