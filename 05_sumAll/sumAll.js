const sumAll = function(start, end) {
    let sum = 0;
      if (start >  end)
        {  for (let i = end; i <= start; i++) {
          sum += i; }
        }
      else if (start < 0  || end < 0)
        return "ERROR";
      else if ( !Number.isInteger(start)  || !Number.isInteger(end) )
        return "ERROR";
      else if (isNaN(start) || isNaN(end))
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
  console.log(sumAll(10, "90"));
  console.log(sumAll([1,2], 1));
  

// Do not edit below this line
module.exports = sumAll;
