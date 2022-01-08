const editor = document.getElementById('editor');
const preview = document.getElementById('preview')

let key;
let string = '';

editor.addEventListener('keyup', (() => {
    key = this.value;
    value = editor.value;
    preview.innerHTML = marked.parse(value);
}));

