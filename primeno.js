var num = 7;
var count = 0;
for(l=2; l<num;l++)
{
           
        if(num%l==0)
        {
           count++;
           break;
        }
    }  
        if(count==0)
        {
            console.log("prime no")
        }
        else
        {
            console.log(" not prime no")
            
        }
    