// Code your solution here

  // Function 1: findMatching
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function 2: fuzzyMatch
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Function 3: matchName
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  
  // Example
  const drivers = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Sarah', hometown: 'Los Angeles' },
   
  ];
  
  console.log(findMatching(drivers, 'Bobby')); // Returns [{ name: 'Bobby', hometown: 'New York' }]
  console.log(fuzzyMatch(drivers, 'B'));    // Returns [{ name: 'Bobby', hometown: 'New York' }, { name: 'Sarah', hometown: 'Los Angeles' }]
  console.log(matchName(drivers, 'Sarah'));  // Returns [{ name: 'Sarah', hometown: 'Los Angeles' }]
  