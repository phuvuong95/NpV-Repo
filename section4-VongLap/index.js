// let N = prompt("Mời bạn nhập số N:");
// N = Number(N);

// let tong = 0;
// for (let index = 0; index < N + 1; index++) {
//     tong = tong + index;
// }
// console.log(tong);

// let N = Number(prompt("Mời bạn nhập số cạnh của đa giác:"));
// let P = 0;
// for (let index = 0; index < N; index++) {
//     let do_dai = Number(prompt("Độ dài cạnh thứ " + (index + 1) + " là: "));
//     P += do_dai;
// }
// console.log("Chu vi đa giác " + N + " cạnh là: " + P);


// let N = Number(prompt("Mời bạn nhập số N: "));
// let tong = 0;
// for (let index = 1; index < N + 1  ; index++) {
//     tong = tong + 1/index;
// }
// console.log(tong);

// let N = Number(prompt("Mời bạn nhập số N: "));
// let tong = 0;

// for (let index = 1; index < N + 1  ; index++) {
//     tong = tong + 1/(index * (index + 1));
// }
// console.log(tong);


// let index = 0;
// while (index < 3) {
//     console.log(++index);
// }

// let password = prompt("Mời nhập mật khẩu: ");
// const inValidCharacter = ["%","$","_"];

// let notValid = true;
// while (notValid){
//     password = prompt("Mật khẩu của bạn quá ngắn,Mời bạn nhập lại: ");
//     if(password.length < 8){
//         for(char of inValidCharacter){
//             if(password.includes(char)){
//                 notValid = false;
//             }
//         }
//     }
// }
// console.log(password);