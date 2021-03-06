import answer from './answer';
import Person from './person';
import Developer from './developer';

const john = new Person('John Resig', 32);
const doug = new Developer('Douglas Crockford', 61, 'JavaScript');

const people = {
	john,
	doug,
	'john-doe': new Person('John Doe', 80),
};

// Switch cases, fall through and indenting
switch (doug.language) {
	case 'JavaScript':
	// Falls through
	case 'Processing':
		john.party();
		break;
	default:
		john.bummer();
}

// Arrow functions
setTimeout(() => {
	people.doug.loves();
}, 500);

document.body.addEventListener('click', (e) => {
	document.body.innerText = answer;
});

// Rest params and spread operator
function greet(say, ...users) {
	users.forEach(u => say + u.name); // Arrow parens are optional when there are no braces
}

greet('Hi ', john, doug);

const numbers = [1, 5, 8, 3, 2, 7];

Math.max(...numbers);

// Ternary operators
const t1 = john.age === 32 ? 'yes' : 'no';
const t2 = doug.age === 61
	? 'yes, but I am not sure'
	: 'no, definitely not';

greet(t1);
greet(t2);
