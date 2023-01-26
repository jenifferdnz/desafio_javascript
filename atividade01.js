var a = 10, b = 50
    r = a % b
    while( r != 0) {
        a = b;
        b = r;
        r = a % b;
        
    }
console.log(b)
