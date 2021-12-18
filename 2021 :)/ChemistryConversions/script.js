$('#CTOF').click(() => {
    $('#f1').attr('placeholder', (parseFloat(($('#c1').val() * 9/5) + 32)).toFixed(1) + "°F");
});

$('#FTOC').click(() => {
    $('#c2').attr('placeholder', (parseFloat(($('#f2').val() - 32) * 5/9)).toFixed(1) + '°C');
});

$('#CTOK').click(() => {
    $('#k1').attr('placeholder', (parseFloat($('#c3').val() + 273)).toFixed(1) + "K");
});

$("#FTOK").click(() => {
    $('#k2').attr('placeholder', (parseFloat(($('#f3').val() - 32) * 5/9 + 273)).toFixed(1) + "K");
});

$('#KTOF').click(() => {
    $('#f4').attr('placeholder', (parseFloat(($('#k3').val() - 273) * 9/5 + 32)).toFixed(1) + "°F");
});

$('#KTOC').click(() => {
    $('#c4').attr('placeholder', (parseFloat($('#k4').val() - 273)).toFixed(1) + "°C");
});

//ENERGY UNITS

$('#CTOKAL').click(() => {
    $('#Cal1').attr('placeholder', (parseFloat($('#cal1').val() / 1000)).toFixed(2) + " kilocalories")
});

$('#KALTOC').click(() => {
    $('#cal2').attr('placeholder', (parseFloat($('#Cal2').val() * 1000)).toFixed(2) + " calories")
});

$('#CTOJ').click(() => {
    $('#j1').attr('placeholder', (parseFloat($('#cal3').val() * 4.184)).toFixed(2) + ' joules');
});

$('#JTOC').click(() => {
    $('#cal4').attr('placeholder', (parseFloat($('#j2').val() / 4.184).toFixed(2) + ' calories'));
});

$('#KALTOJ').click(() => {
    $('#j3').attr('placeholder', (parseFloat($('#Cal3').val() * 4184).toFixed(2)) + " joules");
});

$('#JTOKAL').click(() => {
    $('#Cal4').attr('placeholder', (parseFloat($('#j4').val() / 4184).toFixed(2)) + " kilocalories");
});

$('#JTOKJ').click(() => {
    $('#kj1').attr('placeholder', (parseFloat($('#j5').val() / 1000).toFixed(2)) + " kilojoules");
});

$('#KJTOJ').click(() => {
    $('#j6').attr('placeholder', (parseFloat($('#kj2').val() * 1000).toFixed(2)) + " joules");
});

$('#KALTOKJ').click(() => {
    $('#kj3').attr('placeholder', (parseFloat($('#Cal5').val() * 4.184).toFixed(2)) + " kilojoules");
});

$('#KJTOKAL').click(() => {
    $('#Cal6').attr('placeholder', (parseFloat($('#kj4').val() / 4.184).toFixed(2)) + " kilocalories");
});

$('#CTOKJ').click(() => {
    $('#kj5').attr('placeholder', ((parseFloat($('#cal5').val() * 4.184)).toFixed(2) / 1000).toFixed(2) + " kilojoules");
});

$('#KJTOC').click(() => {
    $('#cal6').attr('placeholder', ((parseFloat($('#kj6').val() * 1000).toFixed(2)) / 4.184).toFixed(2) + " calories");
});

