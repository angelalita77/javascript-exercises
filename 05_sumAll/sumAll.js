const sumAll = function(start, end) {
    let sum = 0;
      if (start >  end)
        {  for (let i = end; i <= start; i++) {
          sum += i; }
        }
      else if (start < 0)
        return "ERROR";
      else
      {
      for (let i = start; i <= end; i++) {
        sum += i;
        }
      }
  return sum;
  }
  
  console.log(sumAll(1, 4));
  console.log(sumAll(1, 4000));
  console.log(sumAll(123, 1));
  console.log(sumAll(-10, 4));
  

// Do not edit below this line
module.exports = sumAll;
