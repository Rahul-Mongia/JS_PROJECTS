const enddate="9 April 2024 11:00 AM";

document.getElementById('endtime').innerText=enddate;

const inputs=document.querySelectorAll('input')

const clock=()=>{

    const end= new Date(enddate);
    console.log(end);
    const current= new Date();
    console.log(current);

    const diff=(end-current)/1000;
    console.log(diff);

    //days
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;



}

setInterval(() => {
    
    clock();
},1000);


// 1 day=24hrs
// 1hrs=60 min
// 60 min=3600 sec