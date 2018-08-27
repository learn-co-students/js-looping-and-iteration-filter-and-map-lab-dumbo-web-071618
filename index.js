// Code your solution here:
function driversWithRevenueOver(array, rev){
  return array.filter(n=> n.revenue > rev)
}

function driverNamesWithRevenueOver(array, rev){
  return array.filter(n=> n.revenue > rev).map(n => { return n.name})
}

function exactMatch(array, val){
  key = Object.keys(val)
  value = val[key[0]]

  return array.filter(n=> n[key] === value)
}

function exactMatchToList(array, val){
  key = Object.keys(val)
  value = val[key[0]]

  return array.filter(n=> n[key] === value).map(n=> {return n.name})
}
