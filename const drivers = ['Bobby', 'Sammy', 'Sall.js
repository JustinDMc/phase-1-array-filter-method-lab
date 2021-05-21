const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(myArray, string) {
    return myArray.filter(function(element) {
        return element.toLowerCase().indexOf(string.toLowerCase()) !== -1
    })
}

function fuzzyMatch(myArray, string) {
    return myArray.filter(function(element) {
        return element
    })
}

function matchName() {
    
}
