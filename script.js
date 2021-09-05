function showThis(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4,5);
showThis(5,5);