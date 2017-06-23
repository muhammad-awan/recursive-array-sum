function sumArray (array, sum = 0, sumArr = 0){

    for(var i = 0; i <= array.length; i++){
      if (typeof array[i] === 'number' ){
      sum += array[i]
      }
      else if ((array[i]) instanceof Array){
      sumArr += sumArray(array[i])
      }
      total = sum + sumArr
    }
    return total
}



sumArray([5, 4, [3,4], [4], [4, [3, [2]]], [2, [3,4]]]) // => 38

