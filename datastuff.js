function getDataArray(numItems, eq_const, eq_coeff) {
  let arr = [];

  for (let i = 0; i < numItems + 1; i++) {
    arr.push( eq_const - (i * eq_coeff) )
  }

  return arr;
}

function getDataArrayPV(numItems, eq_const, eq_coeff, discount, n) {
  let arr = [];
  let new_coeff = eq_coeff / ((1 + discount)** n)
  let new_const = eq_const / ((1 + discount)** n)
  for (let i = 0; i < numItems + 1; i++) {
    arr.push( new_const - (i * new_coeff) )
  }

  return arr;
}

function getLabelsArray(n) {
  let arr = [];
  for (let i = 0; i < numItems + 1; i++) {
    arr.push(i.toString() + ";" + (numItems - i).toString());
  }
  return arr;
}

function getIntersectionPoint(numItems, eq_const, eq_coeff, discount, n) {

  return 0;
}
