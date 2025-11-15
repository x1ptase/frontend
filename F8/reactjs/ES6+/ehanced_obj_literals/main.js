function arrToObj(arr) {
    return arr.reduce((accumulator, currentValue) => {
        // Sử dụng destructuring để lấy key và value từ mảng con hiện tại
        const [key, value] = currentValue;

        // Gán key và value vào đối tượng accumulator
        accumulator[key] = value;

        // Trả về đối tượng đã cập nhật cho lần lặp tiếp theo
        return accumulator;
    }, {}); // {} là đối tượng khởi tạo (initial value) cho accumulator
}

// Expected results:
const obj1 = arrToObj([
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
])
console.log(obj1)


const obj2 = arrToObj([
   ['name', 'Duc Long'], 
   ['age', 18], 
   ['address', 'Ha Noi']
])
console.log(obj2)


