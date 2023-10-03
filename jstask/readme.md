# Welcome to JSTask.
*Made by rosessix👀*
### What is JSTask you may ask?
JSTask is a bit of software that allows the user to easily learn how to code. The developer, has a tiny bit of configuration to do. For each question there is an array of properties they have to assign.
```js
const Tasks = [
    {
        description: `# Add two numbers. \nMake a function called \`addNumbers\` that take two paramterers, **n1** and **n2**. \n\nThese number should be added and returned.`,
        name: "addNumbers() task",
        template: `function addNumbers(n1,n2) {
            // Place your code here!
        }`,
        test: [5,3,8]
    },
```
All elements added into task must haev description, name and the test property to run correctly.


### What is build upon?
It is made with jQuery for easier DOM fiddelin' and CodeMirror for the code editor in the center part of the screen.


### How does it work?
![Visual example of how JSTask works](https://i.gyazo.com/32616ec68208238151efc5292d694b5e.gif) Here is an example of how the program is supposed to run.
The video shows the selection between tasks and how the user is supposed to code, while the very right side of the screen is the console output. If the test criteria is met, the test is passed, otherwise it will show the output of the console.