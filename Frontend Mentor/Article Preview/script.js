window.onload = () => {
    const button = document.getElementById('btn');

    button.addEventListener('mouseover', () => {
        document.getElementById('share').style.filter = 'brightness(0) invert(1)';
    });

    button.addEventListener('mouseout', () => {
        document.getElementById('share').style.filter = 'none';
    });

    button.addEventListener('click', () => {
        if (document.getElementById('shareBox').style.display == 'flex') {
            document.getElementById('shareBox').style.display = 'none';
        } else {
            document.getElementById('shareBox').style.display = 'flex';
        }
        
    });

};