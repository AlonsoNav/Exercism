//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  let [groups, totalCost, remainingBooks] = getBaseGroups(books);
  books = remainingBooks;
  return costAux(books, groups, totalCost);
};

const getBaseGroups = (books) => {
    const frequency = {};
    const groups = [];

    books.forEach(value => {
      frequency[value] = (frequency[value] || 0) + 1;
    });

    const maxFrequency = Math.max(...Object.values(frequency));

    const mostFrequentValues = Object.keys(frequency)
      .filter(key => frequency[key] === maxFrequency)
      .map(Number);
      
    for (let i = 0; i < maxFrequency; i++)
        groups[i] = mostFrequentValues;

    
    return [groups, (mostFrequentValues.length * 800 * discount(mostFrequentValues.length) * maxFrequency) | 0, books.filter((book) => !mostFrequentValues.includes(book))];
}

const discount = (noDiffBooks) => {
  switch(noDiffBooks){
    case 2:
      return 0.95
    case 3:
      return 0.90
    case 4:
      return 0.80
    case 5:
      return 0.75
    default:
      return 1
  }
}

const costAux = (books, groups, totalCost) => {
    if(books.length == 0)
        return totalCost;
        
    const costs = []
        
    for(const [i, group] of groups.entries()){
      if(groups[i].includes(books[0]))
        continue;
        
      const groupsAux = groups.map(group => [...group]); 
      groupsAux[i].push(books[0]);
      
      const groupLen = group.length + 1;
      costs.push(costAux(books.slice(1),  
                 groupsAux,
                 totalCost - ((groupLen - 1) * 800 * discount(groupLen - 1)) + (groupLen * 800 * discount(groupLen))));
    }
    
    return Math.min(...costs);
}