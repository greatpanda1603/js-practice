alert('Hello JavaScript!');

const userName = prompt('Enter your name');
const greetings = 'Hello ';
alert(greetings + userName);

const age = parseInt(prompt('Enter your age'));
alert(age);
const nextYearAge = add(age,1);
alert(nextYearAge);

if (age >= 18) {
alert('You are adult');
} else {
alert('You are too young');
}

function add(a, b) {
    const result = a + b;
    return result;
}
