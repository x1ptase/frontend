### 1. Định nghĩa key: value cho obj
### 2. Định nghĩa method cho obj
### 3. Định nghĩa key cho obj dưới dạng biến

```javascript
var name="JavaScript";
var price=1000;

var course={
    name,
    price,
    getName(){
        return name;
    }
};

console.log(course.getName());
```

```javascript
var fieldName='JavaScript';
var fiedlPrice=10000;    

const course={
    [fieldName]:'JavaScript',
    [fiedlPrice]:1000
};

console.log(course);
```