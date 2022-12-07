function identifyPrime(num) {
    let count = 0
    for (let i=1; i<num; i++){
        if(num%num==0){
            count++
        }
        
    }if(count==2){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
}
identifyPrime()