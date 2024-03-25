// Define the superbowlWin function
function superbowlWin(record) {
    // Use the find method to search for a win
    const winningRecord = record.find(game => game.result === "W");

    // If a winning record is found, return the year
    if (winningRecord) {
        return winningRecord.year;
    } else {
        // Otherwise, return undefined
        return undefined;
    }
}

// Example usage:
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // Additional records...
];

console.log(superbowlWin(record)); // Output will be the year of the win or undefined
