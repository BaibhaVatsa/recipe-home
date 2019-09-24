console.log(API_KEY)
const fetch = require("node-fetch");

RESPONSES = [];
QUERIES = ["burger", "pizza"];
CUISINES = ["german", "italian"];
NUMBERS = [5, 7];

async function getRecipeDish(queryI, cuisineI, numberI) {
	let response = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${queryI}&cuisine=${cuisineI}&number=${numberI}`, {
		method: "GET"
	}).catch(function (err) {
		console.log(err);
	});
	return await response.json();
}

async function printRecipes() {
	for (let i = 0; i < 2; i += 1) {
		RESPONSES.push(getRecipeDish(QUERIES[i], CUISINES[i], NUMBERS[i]));
	}
	console.log(await Promise.all(RESPONSES));
}

printRecipes();