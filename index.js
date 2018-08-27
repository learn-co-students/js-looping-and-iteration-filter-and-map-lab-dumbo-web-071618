function driversWithRevenueOver(drivers, string) {
  const newArray = drivers.filter(function(driver){
    return driver['revenue'] > string;
  });
return newArray;
}

function driverNamesWithRevenueOver(drivers, string) {
  const newArray = drivers.filter(function(driver){
    return driver['revenue'] > string});
  const finalArray = newArray.map(obj => obj['name']);
  return finalArray;
}

function exactMatch(drivers, obj) {
  const newArray = drivers.filter(function(driver){
    return driver[Object.keys(obj)] == Object.values(obj);
  })
  return newArray;
}

function exactMatchToList(drivers, obj) {
  const newArray = drivers.filter(function(driver){
    return driver[Object.keys(obj)] == Object.values(obj);
  });
  finalArray = newArray.map(driver => driver['name']);

  return finalArray;
}
