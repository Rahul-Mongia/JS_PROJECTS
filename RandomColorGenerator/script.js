const btn=document.getElementById('btn');
const colorcode=document.getElementById('color-code');
const copybtn=document.getElementById('copy-btn');
const onclick=()=>{

    const randmnumber=Math.floor(Math.random()*16777215);
    const randmcode="#"+randmnumber.toString(16);

    document.body.style.backgroundColor=randmcode;
    colorcode.innerText=randmcode;
    
    navigator.clipboard.writeText(randmcode);
}

btn.addEventListener('click',onclick);
onclick();

