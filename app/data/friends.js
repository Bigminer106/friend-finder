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
    var element = personArray[0].scores[i];
    result1.push(element);
  };

  for (let i = 0; i < personArray[1].scores.length; i++) {
    element = personArray[1].scores[i];
    result2.push(element);
  };

  for (let i = 0; i < result1.length; i++) {
    difference.push(Math.abs(result1[i] - result2[i]));
  };
}