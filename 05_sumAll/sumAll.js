const sumAll = function(start, end) {
    let sum = 0;
      if (start >  end)
        {  for (let i = end; i <= start; i++) {
          sum += i; }
        }
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
 
  

// Do not edit below this line
module.exports = sumAll;
