// Set up each person to match

var personArray = [
  {
    name: 'Adam',
    photo: '',
    scores: [5, 5, 4, 3, 5, 4, 2, 4, 5, 3]
  },
  {
    name: 'Sarah',
    photo: '',
    scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  }
];

module.exports = friendCheck = () => {
  var result1 = [];
  var result2 = [];
  var difference = [];
  for (let i = 0; i < personArray[0].scores.length; i++) {
    result1.push(Math.abs(personArray[0].scores[i]));
  };

  for (let j = 0; j < personArray[1].scores.length; j++) {
    result2.push(Math.abs(personArray[1].scores[j]));
  };

  for (let k = 0; k < result1.length; k++) {
    difference.push(Math.abs(result1[k] - result2[k]));
  }

  for (let i = 0; i < difference.length; i++) {
    if (difference[i] <= 2) {
      
    } else {
      // Show that there's no match
    };
  }
}