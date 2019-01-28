const animals = [
	{ type: 'giraffe', height: 8.2, weight: 315, name: 'Geofrie', top3Foods: ['leaves','roots','children']},
	{ type: 'tiger', height: 2.1, weight: 120, name: 'Tony', top3Foods: ['meat','children','corn flakes']}
]

animalListing(animals, true);


function animalListing( animalArray, listFoods){
	if(listFoods===undefined){
		listFoods = true;
	}
	for(let animalIndex = 0; animalIndex< animalArray.length; animalIndex++){
		let foodSentence;

		let thisAnimal = animalArray[animalIndex];
		let {name, height, type, weight} = animals;
		// let name = thisAnimal.name;
		// let height = thisAnimal.height;
		// let weight = thisAnimal.weight;
		// let type = thisAnimal.type;
		const foods = thisAnimal.top3Foods;
		let [food1, food2, food3] = foods; 
		// let food1 = foods[0];
		// let food2 = foods[1];
		// let food3 = foods[2];
		const sentence = "Animal: "+name+" is a "+type+" and is "+height+" meters at "+(weight*2.2)+" lbs";
		console.log(sentence);
		if(listFoods){
			foodSentence = "   it likes to eat "+food1+", "+food2+", and "+food3;
			console.log(foodSentence)
		}
	}
}