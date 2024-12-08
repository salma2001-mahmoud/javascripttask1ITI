alert("Welcome to my site");
let username;
do {
    username = prompt("Please enter your name:");
} while (!username || username.trim() === "" || !isNaN(username));

let birthYear;
do {
birthYear = Number(prompt("Please enter your birth year (less than 2010):"));
} while (isNaN(birthYear) || birthYear >= 2010 || birthYear <= 1900);

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

document.write(`<p><strong>Name:</strong> ${username}</p>`)
document.write(`<p><strong>birthYear:</strong> ${birthYear}</p>`)
document.write(`<p><strong>age:</strong> ${age}</p>`)

