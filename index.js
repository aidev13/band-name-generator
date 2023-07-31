import { generateSlug } from "random-word-slugs"; // Using ES6 importing method
import chalkAnimation from 'chalk-animation';


const numWords = parseInt(process.argv[2]) // used parseInt to change string into a number


const slug = generateSlug(numWords, {
    format: "title"
});


chalkAnimation.neon(slug, 5)


// console.log(slug);
