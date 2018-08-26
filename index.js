// Code your solution here:
function driversWithRevenueOver(array, amount) {
  return array.filter(function (element) {
    return element.revenue > amount;
  });
}

function driverNamesWithRevenueOver(array, amount) {
  return driversWithRevenueOver(array, amount).map(function (element) {
    return element.name;
  });
}

function exactMatch(array, object) {
  return array.filter(function (element) {
    const key = Object.keys(object)[0];
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    return element.hasOwnProperty(key) && element[key] == object[key];
  });
}

function exactMatchToList(array, object) {
  return exactMatch(array, object).map(function (element) {
    return element.name;
  });
}
