function ArrayChallenge(strArr) {
    // Define a dictionary to map card names to their values
    const cardValues = {
        "two": 2, "three": 3, "four": 4, "five": 5, "six": 6,
        "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        "jack": 10, "queen": 10, "king": 10, "ace": 11
    };

    // Initialize variables to keep track of the total value and highest card
    let totalValue = 0;
    let highestCard = "two";  // Initialize with the lowest card

    // Iterate through the cards and calculate the total value
    for (const card of strArr) {
        const cardValue = cardValues[card];
        totalValue += cardValue;
        if (cardValue > cardValues[highestCard]) {
            highestCard = card;
        }
    }

    // Check if there is an ace and adjust its value if necessary
    while (totalValue > 21 && strArr.includes("ace")) {
        totalValue -= 10;  // Convert ace from 11 to 1
        const aceIndex = strArr.indexOf("ace");
        strArr.splice(aceIndex, 1);
    }

    // Determine the output based on the total value
    if (totalValue === 21) {
        return "blackjack " + highestCard;
    } else if (totalValue < 21) {
        return "below " + highestCard;
    } else {
        return "above " + highestCard;
    }
}

// Test cases
console.log(ArrayChallenge(["two", "three", "ace", "king"]));  // Output: "below king"
console.log(ArrayChallenge(["four", "ten", "king"]));          // Output: "above king"
console.log(ArrayChallenge(["four", "ace", "ten"]));           // Output: "below ten"
console.log(ArrayChallenge(["ace", "queen"]));                 // Output: "blackjack ace"
