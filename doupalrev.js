let arr=[1,1,2,2,3,3,4,5,6,6,7];
let newArray=[];
let j=0;

for(let i=0;i<arr.length-1;i++)
{
    if(arr[i]!=arr[i+1])
    {
         newArray[j++]=arr[i];
    }
}
newArray[j]=arr[arr.length-1];

console.log(newArray);