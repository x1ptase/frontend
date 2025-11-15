/*
Giới thiệu một số hàm built-in
    1. alert
    2. console
    3. confirm
    4. prompt
    5. setTimeout
    6. setInterval
*/

var fullName = "Nguyen Van A";
console.log(fullName);
console.warn(fullName);
console.error(fullName);

confirm("Xác nhận bạn đủ 18 tuổi chưa?");

prompt("Hãy nhập tên của bạn");

setTimeout(function() {
    console.log("Hello F8");
}, 1000);

setInterval(function() {
    console.log("Hello F8");
}, 1000);

var language = 'JavaScript';
console.log(language);