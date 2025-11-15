# Arrow Function

### Traditional
```javascript
function logger(log){
    console.log(log);
}

logger('Message...');
```

### Exression Function
```javascript
const logger = function(log){
    console.log(log);
}

logger('Message...');
```

### Arrow Function
```javascript
const logger = (log) =>{
    console.log(log);
}

logger('Message...');
```

```javascript
const sum = (a, b) => a + b;

console.log(sum(2, 2));
```

```javascript
const logger = log => console.log(log);

logger('Message...');
```