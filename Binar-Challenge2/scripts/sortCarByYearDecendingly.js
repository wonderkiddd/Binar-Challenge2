function sortCarByYearDescendingly(cars) {
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  let result = [...cars];
  console.log('data sebelum descending',result);

  // Tulis code-mu disini
  function bubbleDescending(data, dataLength){
    for(i = 0; i < dataLength ; i++){
      for (j = 0; j < (dataLength - i - 1) ; j++){
        if(data[j].year < data[j+1].year){
          var temp = data[j];
          data[j] = data [j+1];
          data[j+1] = temp
        }
      }
    }
    console.log('data descending : ', data);
    return data;
  }
  result = bubbleDescending(result, result.length)
  for(i = 0; i < result.length; i++){
    console.log('hasilDescending descending year',result[i].year);
  }

  // Rubah code ini dengan array hasilDescending sorting secara ascending
  return result;
}
