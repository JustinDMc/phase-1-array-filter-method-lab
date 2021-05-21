const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(myArray, string) {
    return myArray.filter(driver => driver.toLowerCase() === string.toLowerCase())
}


function fuzzyMatch(myArray, string) {
    return myArray.filter(driver => driver.startsWith(string));
}

function matchName(myArray, string) {
    for (const element in myArray) {
        return myArray.filter(driver => driver.name === string)
    }
}