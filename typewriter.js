// The string that we are hoping to print with a typewriter effect
const sentence = "hello there from lighthouse labs";
// the initial time set for the timeout. Gets updated to make typing effect between chars, and the final time creates our line break  
let timer = 50;
//printing chars
for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
}, (timer += 80 ))
}
//generates linebreak at the end of sentence.
setTimeout(() => {
  process.stdout.write("\n")
}, timer);