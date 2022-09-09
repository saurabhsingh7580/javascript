let a=(arr)=>{
let even=[]
let odd=[]
for(i=0;i<arr.length-1;i++){
    if(arr[i]%2==0)
    {
        even.push(arr[i])
        
    } 
    else
    {
        odd.push (arr[i])
    } 
   }
}

   let arr=[2,5,7,9,12,39,57,22,34,59,60,71,84,]
   a(arr)
console.log(`Even = ${even}`)
console.log(`odd = ${odd}`)
