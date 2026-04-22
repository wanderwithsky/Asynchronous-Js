function abcd(a){
    // let a = 10;
    return function efgh(){
        console.log(a);
        a++;
    }
}
console.log(abcd(10));
