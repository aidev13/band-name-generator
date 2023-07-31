import { generateSlug } from "random-word-slugs"; // Using ES6 importing method
import chalkAnimation from 'chalk-animation';
import inquirer from "inquirer";

inquirer
  .prompt([
    {
        type: 'number',
        name: 'numWords',
        message: 'How many words do you wish to generate?',
        default: '5'
    },
    {
        type: 'list',
        name: 'animationType',
        message: 'What type of animation do you want?',
        choices: ['rainbow', 'pulse', 'glitch', 'radar', 'neon', 'karaoke']
    }
  ])
  .then((answers) => {
      const slug = generateSlug(answers.numWords, {
          format: "title"
        })
        
        chalkAnimation[answers.animationType](slug)

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
    // const numWords = parseInt(process.argv[2]) // used parseInt to change string into a number
    
  
// console.log(answers)

