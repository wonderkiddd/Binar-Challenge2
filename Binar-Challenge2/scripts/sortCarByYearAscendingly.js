function sortCarByYearAscendingly(cars) {
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  let result = [...cars];
  console.log('data sebelum ascending',result);

  // Tulis code-mu disini
  function bubleAscending(data, dataLength){
    for(i = 0; i < dataLength ; i++){
      for (j = 0; j < (dataLength - i - 1) ; j++){
        if(data[j].year > data[j+1].year){
          var temp = data[j];
          data[j] = data [j+1];
          data[j+1] = temp
        }
      }
    }
    console.log('data ascending : ', data);
    return data;
  }
  result = bubleAscending(result, result.length)
  for(i = 0; i < result.length; i++){
    console.log('hasil ascending year',result[i].year);
  }
  
  // Rubah code ini dengan array hasilAscending sorting secara ascending
  return result;
}
