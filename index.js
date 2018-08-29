// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    if(driver.revenue > revenue){
      return driver
    }
  });
}

// function driverNamesWithRevenueOver(drivers, revenue){
//     return drivers.filter(function(driver){
//       if(driver.revenue > revenue){
//         return driver.name;
//       }
//     });
// }

function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue).map(function(driver){
      return driver.name;
    });
}


function exactMatch(drivers, obj){
  return drivers.filter(function(driver){
    if(driver.revenue === obj.revenue){
      return driver
    } else if (driver.name === obj.name){
      return driver
    }
  });
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(function(driver){
    return driver.name
  });
}
