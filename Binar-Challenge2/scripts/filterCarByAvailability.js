function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);
  // console.log(result);

  // Tempat penampungan hasilFilter
  let result = [];
  let hasilFilter = [];
  let carsLength = cars.length;
  

  // Tulis code-mu disini
  function filterCar(cars, carsLength){
    for(i = 0; i < carsLength-1 ; i++){
      if(cars[i].available == true){
        hasilFilter.push(cars[i])
      }
    }
    return hasilFilter
  }
  filterCar(cars, cars.length)
  console.log(hasilFilter);

  result = hasilFilter;


  // Rubah code ini dengan array hasilFilter filter berdasarkan availablity
  return result;
}
