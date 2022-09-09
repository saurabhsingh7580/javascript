let arr=[6,7,9,12,14,16,18,25,37,7,8,9,9,9]
let max=0;
for(i=0;i<=arr.length-1;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(max)

// let arr=[9,12,14,8,9,9,9]
// let min=arr[0];
// for(i=0;i<=arr.length-1;i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }
// console.log(min);