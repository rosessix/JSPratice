let editor = null;
let currentTask = []
const Tasks = [
    {
        description: `# Add two numbers. \nMake a function called \`addNumbers\` that take two paramterers, **n1** and **n2**. \n\nThese number should be added and returned.`,
        name: "addNumbers() task",
        template: `function addNumbers(n1,n2) {
    // Place your code here!
}`,
        test: [5,3,8]
    },
    {
        description: `# Subtract two numbers. \nMake a function called \`subtractNumbers\` that take two paramterers, **n1** and **n2**.  \n\nThese number should be subtracted from each other and returned.`,
        name: "subtractNumbers() task",
        test: [5,5,0]
    },
]
$(document).ready(() => {
    editor = CodeMirror(document.getElementById("editor"), {
        mode: "javascript",
        theme: 'monokai',
        fontSize: "15pt",
        lineWrapping: true,
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        autoCloseBrackets: true
    });

    $('#sTask').html(``);
    setTimeout(() => {
        for (let i = 0; i < Tasks.length; i++) {
            console.log('lol');
            $('#sTask').append(`
                <option value="${i}">${Tasks[i].name}</option>
            `);
        };

        setTask({value: 0})
    }, 500);
});

const runCode = () => {
    let code = editor.getValue();
    let tests = currentTask.test
    try {
        var result = eval(`(${code}(${tests[0]}, ${tests[1]}))`)
        $('#codeoutput').html(`Output: ${result}`)
        if (result == tests[2]) {
            $('#codeoutput').html("Test passed!")
        }
    } catch(err) {
        $('#codeoutput').html(err)
    }    
};

const setTask = (task) => {
    currentTask = Tasks[task.value];
    const mdText = marked.parse(currentTask.description);
    $('#taskdescription').html(mdText);
    editor.setValue(currentTask.template || "")
};