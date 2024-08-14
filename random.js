let random=document.getElementById("RandNumber");
let rand=0;
document.getElementById("generate").onclick=function(){
    let min=Number(document.getElementById("min").value) || 1;
    let max=Number(document.getElementById("max").value) || 10;
    if(min<max){
        rand = Math.round((Math.random() * (max-min))+min);
        random.textContent=rand;
    }else{
        random.textContent="Ivalid Input";
    }
    
};