// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: "SeongE",
// 	age: 20,
// 	hobbies: ["Sports", "Cooking"],
// 	role: [2, "author"],
// };

// person.role.push("admin");
// console.log(person.role);

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1];

// console.log(person.name);

// for (const hobby of person.hobbies) {
// 	console.log(hobby.toUpperCase());
// }

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: "SeongE",
	age: 20,
	hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN,
};

console.log(person.role);
