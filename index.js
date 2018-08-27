// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, match) {
  return drivers.filter(function (driver) {
    for (var key in driver) {
     if (driver[key] === match[key]) {
      return driver[key];
     }
    }
  });
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(driver => driver.name);
}
