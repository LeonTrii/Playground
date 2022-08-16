const picture = document.getElementById('overlay');
const eye = document.getElementById('eye');

picture.addEventListener('mouseover', () => {
    eye.style.visibility = 'visible';
});

picture.addEventListener('mouseout', () => {
    eye.style.visibility = 'hidden';
})