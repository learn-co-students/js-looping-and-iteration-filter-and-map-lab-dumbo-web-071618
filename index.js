const drivers = [
  {name:"Sally", revenue:"400"},
  {name:"Annette", revenue:"200"},
  {name:"Jim", revenue:"150"}
]

driversWithRevenueOver = (drivers, revenue) => {
  const matchedDrivers = drivers.filter(driver => {
    return driver.revenue > revenue
  })
  return matchedDrivers
}

driverNamesWithRevenueOver = (drivers,revenue) => {
  const arr = driversWithRevenueOver(drivers,revenue)
  driverNames = arr.map(driver => {
    return driver.name
  })
  return driverNames
}

exactMatch = (drivers, attr ) => {
  const attribute = Object.keys(attr)[0]
  const value = attr[attribute]
  // console.log(value)
  let matches = drivers.filter(driver => {
    return driver[attribute] === value
  })
  return matches
}
// exactMatch(drivers, {name: "Sally"})
// console.log(exactMatch(drivers, {name: "Sally"}))

exactMatchToList = (drivers,attr) => {
  const matchedDrivers = exactMatch(drivers,attr)
  const matchedDriverNames = matchedDrivers.map ( driver => {
    return driver.name
  })
  return matchedDriverNames
}
