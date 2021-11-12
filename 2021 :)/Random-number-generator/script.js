    const rollId = document.getElementById('roll');

    rollId.addEventListener('click', () => {
    const minimumId = document.getElementById('minimum').value;
    const maximumId = document.getElementById('maximum').value;

    let random = Math.floor(Math.random() * (maximumId - minimumId + 1));
    random += parseInt(minimumId);
        const resultId = document.getElementById('result');
        let total = resultId.innerHTML = random;
});

