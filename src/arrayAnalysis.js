function arrayAnalysis(array) {

    const avg = array.reduce((pre, cur) => cur += pre)/array.length;
    const minimum = Math.min(...array);
    const maximum = Math.max(...array);
    const arrLenght = array.length;

    result =  {
        average: avg,
        min: minimum,
        max: maximum,
        length: arrLenght
    }

    return result
  }
  
  module.exports = arrayAnalysis;