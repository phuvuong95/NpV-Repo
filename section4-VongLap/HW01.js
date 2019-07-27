let password = prompt("Mời nhập mật khẩu: ");
const inValidCharacter = ["%","$","_"];

let notValid = true;
while (notValid){
    password = prompt("Mật khẩu của bạn quá ngắn và không có kí tự đặc biệt,Mời bạn nhập lại: ");
    if(password.length < 8){
        for(char of inValidCharacter){
            if(password.includes(char)){
                notValid = false;
            }
        }
    }
}
console.log(password);

