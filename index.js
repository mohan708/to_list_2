const enddate = "12 july 2023 11:12 PM" 
document.getElementById("end-date").innerHTML=enddate;

const inputs=document.querySelectorAll("input");


function clock()
{
    console.log('clock is ok');
    const end = new Date(enddate);
    const now =new Date();
    console.log(now);
    const diff = (end-now)/1000;
    if(diff<0)return 0;
    console.log(diff);
   
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600%24);
    inputs[2].value=Math.floor(diff/60%60);
    inputs[3].value=Math.floor(diff%60);
    //console.log(Math.floor(diff/60)%60);
}

clock();

setInterval(
()=>{
    clock();
},
1000
)