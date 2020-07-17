// *feet to mile converter

function feetToMile(feetValue) {
	if (feetValue < 0) {
		return "Distance value can't be negative! \n";
	}

	var mileValue = feetValue * 0.00018939394;
	return feetValue + " Feet = " + mileValue + " Mile \n";
}

var convertToMile = feetToMile(50000); // enter your feet value here
console.log(convertToMile);


// *wood counter

function woodCalculator(chairs, tables, beds) {
	if (chairs < 0 || tables < 0 || beds < 0) {
		return "Furnitures can't be in negative amount!";
	}

	var woodForChair = chairs * 1;
	var woodForTable = tables * 3;
	var woodForbed = beds * 5;
	var totalWood = woodForChair + woodForTable + woodForbed;

	return (
		woodForChair +
		" cubic-feet wood for chairs, \n" +
		woodForTable +
		" cubic-feet wood for tables, \n" +
		woodForbed +
		" cubic-feet wood for beds, \n" +
		totalWood +
		" cubic-feet wood in total. \n"
	);
}

var woodAmount = woodCalculator(5, 3, 1); // enter amount of required chairs, tables and beds here
console.log(woodAmount);


// *bricks counter

function brickCalculator(floorNumber) {
	var buildingHeight = 0;

	if (floorNumber < 0) {
		return "Floor number can't be negative!";
	} // if floor number is negative
	else if (floorNumber == 0) {
		return "0 bricks are required";
	} // if floor number is 0
	else if (floorNumber <= 10) {
		for (let i = 1; i <= floorNumber; i++) {
			var belowTenHeight = i * 15;
		}
		buildingHeight += belowTenHeight;
	} // if floor number is in 1 to 10
	else if (floorNumber <= 20) {
		for (let i = 1; i <= 10; i++) {
			var belowTenHeight = i * 15;
		}
		buildingHeight += belowTenHeight;

		for (let i = 1; i <= floorNumber - 10; i++) {
			var belowTwentyHeight = i * 12;
		}
		buildingHeight += belowTwentyHeight;
	} // if floor number is in 11 to 20
	else if (floorNumber > 20) {
		for (let i = 1; i <= 10; i++) {
			var belowTenHeight = i * 15;
		}
		buildingHeight += belowTenHeight;

		for (let i = 1; i <= 20 - 10; i++) {
			var belowTwentyHeight = i * 12;
		}
		buildingHeight += belowTwentyHeight;

		for (let i = 1; i <= floorNumber - 20; i++) {
			var aboveTwentyHeight = i * 10;
		}
		buildingHeight += aboveTwentyHeight;
	} // if floor number is 20+
	var totalBrick = buildingHeight * 1000;
	return totalBrick + " bricks are required. \n";
}

var brickAmount = brickCalculator(25); // enter floor number here
console.log(brickAmount);


// *findout tiny friend

function tinyFriend(friends) {
	if (friends.length == 0) {
		return "There is no friend in the array!";
	} else if (friends.length == 1) {
		return "You can't compare between a single name!";
	}

	var nameLengths = [];

	for (let i = 0; i < friends.length; i++) {
		nameLengths.push(friends[i].length);
	} // this will create an array of name lengths

	var min = nameLengths[0];

	for (let i = 0; i < nameLengths.length; i++) {
		var element = nameLengths[i];
		if (element < min) {
			min = element;
			var indexOfSmallest = nameLengths.indexOf(min);
		}
	} // this will find out the index of shortest name
	return friends[indexOfSmallest];
}

var friends = ["Ashraf", "Asif", "Wahid", "Opu", "Jhankar", "Mahbub"]; // enter friend's names here
console.log(tinyFriend(friends));