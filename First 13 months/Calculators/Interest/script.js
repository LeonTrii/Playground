window.onload = () => {
    let val = document.getElementById("slider").value //gets the oninput value
    const sliderNum = document.getElementById('sliderNum');
    sliderNum.innerHTML = val + '%';

    document.getElementById('btn').addEventListener('click', () => {
    const value = document.getElementById("values").value;
    const years = parseInt(document.getElementById('years').value);
    
    if (value <= 0) {
        alert('Enter a positive number')
    } else {
        let result = (slider.value * years) * value / 100;
        document.getElementById('result').innerHTML = result;
    }
    });

document.getElementById("slider").addEventListener('change', () => {
    val = document.getElementById("slider").value
    sliderNum.innerHTML = val + '%';
});
}