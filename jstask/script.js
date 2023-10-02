let editor = null;
const Tasks = [
    {
        description: "This is a simple task. Make a function called addNumbers that take two paramterers, n1 and n2. These number should be added and returned.",
        name: "addNumbers task",
    }
]
$(document).ready(() => {
    editor = CodeMirror(document.getElementById("editor"), {
        mode: "javascript",
        theme: 'monokai',
        lineWrapping: true,
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        
    })

    $('#sTasks').html(``)
    for (let i = 0; i < Tasks.length; i++) {
        console.log('lol')
        $('#sTasks').append(`<option value="saab">Saab</option>`)
    }
})

const runCode = () => {
    let code = editor.getValue();
    console.log(code)
}