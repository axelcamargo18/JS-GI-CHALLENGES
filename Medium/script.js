// // Medium

const sentence = prompt("Type in a message");
const upperSentence = sentence.toUpperCase();
const lowerSentence = sentence.toLowerCase();

if (sentence === upperSentence) {
  console.log("Yelling");
} else if (sentence === lowerSentence) {
  console.log("Whispering");
} else {
  console.log("Neither");
}
