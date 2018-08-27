function driversWithRevenueOver(drivers, rev)   {
    return drivers.filter(driver => driver.revenue > rev)
}

function driverNamesWithRevenueOver(drivers, rev)   {
    return drivers.filter(driver => driver.revenue > rev).map(driver => driver.name)
}

function exactMatch(drivers, attr)   {

    return drivers.filter(driver => driver[Object.keys(attr)[0]] === Object.values(attr)[0])
}

function exactMatchToList(drivers, attr) {
    return drivers.filter(driver => driver[Object.keys(attr)[0]] === Object.values(attr)[0]).map(driver => driver.name)
}