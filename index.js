function driversWithRevenueOver(drivers, integer) {
  // console.log(drivers[0].revenue)
  return drivers.filter(function(driver) {
    return driver.revenue > integer
  })
}

function driverNamesWithRevenueOver(drivers, integer) {
  return drivers.filter(driver => driver.revenue > integer).map(driver => driver.name)
  // return drivers.filter(function(driver) {
  //   return driver.revenue > integer
  // }).map(function(obj) {
  //   return obj.name
  // })
}


function exactMatch(drivers, match) {
  return drivers.filter(function (driver) {
      for (const key in driver) {
       if (driver[key] === match[key]) {
        return driver[key];
       }
      }
    });
  }

  function exactMatchToList(drivers, match) {
    return exactMatch(drivers, match).map(driver => driver.name)
  }
