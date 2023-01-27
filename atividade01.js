var a = 10, b = 50
    resto = a % b
    while( resto != 0) {
        a = b;
        b = resto;
        resto = a % b;
        
    }
console.log(b)
