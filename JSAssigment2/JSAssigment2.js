console.log("array with five names and print in reverse:");
let arr= ['Bosco','Nisha','Yash','Amit','Gia'];
let len= arr.length-1;
while(len>=0){
    console.log(arr[len])
    len--;
}

console.log("print all elements that are divisible by 5 from 1 to 50:");
start_num= 1;
end_num= 50;
divisible_by= 5;
for(let i=start_num; i<=end_num; i++){
    if(i%divisible_by==0){
        console.log(i);
    }
}