//global primes to store primes number, so it can help in 
//finding primes number
var primes = [];

/*
*calculate given number is prime or not
*@param - number
*@return - boolean
*/
var isPrime = function(num){
  //number less than or equal one are not primes
  if( num <= 1) return false;
  
  //one number is a factor of N and that it is smaller than the square-root of the number N
  var sqrt = Math.sqrt(num);
  var primesArrayIndex = 0;
  //smallest factor of a number is a prime
  for(var i = 2, j = Math.floor(sqrt); i <= j; primesArrayIndex >= primes.length ? i ++ : i = primes[primesArrayIndex]){
    if(num % i === 0){
      return false;
    }
    primesArrayIndex++;
  }
  return true;
};

function sumPrimes(num) {
  //save primes number locally, we can't use global primes array 
  //here because, it can already have values from other function calls
  var localPrimes = [];
  for(var i = 0; i <= num; i++){
    if(isPrime(i)){
      localPrimes.push(i);
      if(primes[primes.length - 1] < i){
        primes.push(i);
      }
    }    
  }
  return localPrimes.reduce(function(a, b){
    return a + b;
  }, 0);
}

//how to use
sumPrimes(977);

