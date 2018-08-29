function driversWithRevenueOver(drivers, rev) {
    return drivers.filter((driver) => driver.revenue > rev)
}

function driverNamesWithRevenueOver(driver, rev) {
    return driversWithRevenueOver(driver, rev).map((driver) => driver.name)
}

function exactMatch(drivers, obj) {
    return drivers.filter((driver) => {
        let tempDriver = {...driver, ...obj}
        console.log(driver, tempDriver)
        let bool = true
        for (const attr in driver) {
            console.log(driver[attr] != tempDriver[attr])
            if (driver[attr] !== tempDriver[attr]) {
                bool = false
            }
        }
        return bool
    })
}

function exactMatchToList(driver, obj) {
    return exactMatch(driver, obj).map((driver) => driver.name)
}