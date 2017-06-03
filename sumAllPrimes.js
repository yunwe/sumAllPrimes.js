/*
*calculate given number is prime or not
*@param - number
*@return - boolean
*/
var isPrime = (function(){
  var primes = [];
  
  return function(num){
    //number less than or equal one are not primes
    if( num <= 1) return false;
  
    //if num is in primes array, skip calculation and return true
    if(primes.indexOf(num) > -1) return true;
    
    //one number is a factor of N and that it is smaller than the square-root of the number N
    var sqrt = Math.sqrt(num);
    var primesArrayIndex = 0;
    //smallest factor of a number is a prime
    for(var i = 2, j = Math.floor(sqrt); i <= j; i = primesArrayIndex < primes.length ? primes[primesArrayIndex] : i + 1){
      if(num % i === 0){
        return false;
      }
      
      //if i is a prime and it's not already in primes array, save to prime array
      if(primesArrayIndex >= primes.length && isPrime(i)){
        primes.push(i);  
      } 
      primesArrayIndex++;
    }
    return true;  
  };
}());

function sumPrimes(num) {
  var primes = [];
  for(var i = 0; i <= num; i++){
    if(isPrime(i)){
      primes.push(i);
      
    }    
  }
  return primes.reduce(function(a, b){
    return a + b;
  }, 0);
}

sumPrimes(977);

