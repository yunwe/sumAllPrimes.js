Array.prototype.swap = function(indexA, indexB){
  var temp = this[indexB];
  this[indexB] = this[indexA];
  this[indexA] = temp;
  return this;
};

Array.prototype.permutations = function(){
  var result = [];
  function generate(n, arr){
    if(n == 1){
      result.push(arr.slice());  
    }else{
      for(var i = 0; i < n - 1; i ++){
        generate(n-1, arr);
        if(n % 2 == 0){
          arr.swap(i, n - 1);
        }else{
          arr.swap(0, n - 1);
        }
      }
      generate(n - 1, arr);
    }
  }
  generate(this.length, this);
  return result;
};


var arr = ["a", "b"];
console.log(arr.permutations());
