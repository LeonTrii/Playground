let number;
let password = '';
const pass = document.getElementById('password');

const combos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','!', '@', '#', '$', '%', '^', 
'&', '*', '(', ')', ';', ':', '"', "'", '`', '/',
`\\`, '?', '.', '{', '}', '[', ']', '-', '_', '+', '=', '|', '~', 
'A', 'B', 'C', 'D', 'E', 'F', 'G,', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P',
'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g,', 'h', 
'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ';', ':', '"', "'", '`', '/',
`\\`, '?', '.', '{', '}', '[', ']', '-', '_', '+', '=', '|', '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

$('#button').click(() => {
    if ($('#num').val() <= 100 && $('#num').val() >= 8) {
        number = parseFloat($('#num').val());
        number = Math.round($('#num').val());
        generate();
    } else {
        alert('Enter a number between 8 and 100.')
    }
}); 

let generate = () => {
    for (let i = 0; i < number; i++) {
        let random = Math.floor(Math.random() * (combos.length));
        password += combos[random];
    }
    console.log(password);
    console.log(password.length)
    pass.innerHTML = password;
    password = '';
}