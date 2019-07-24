let yearNow = 2019;
let nameAndYear = prompt("Mời bạn nhập tên và năm sinh:");
nameAndYear = nameAndYear.split(",");
console.log("Tên của bạn là: " +nameAndYear[0] + ", " + "Bạn: " + (yearNow - nameAndYear[1]) + " tuổi" );