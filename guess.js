const b=Math.floor(Math.random() * 10 + 1) ;
function guessNum(){
    let a=document.getElementById("num").value ;
   
    if(a==b)
        alert("U got the right number");
    else if(a<b)
        alert('Ur number is smaller');
    else
        alert('ur number is larger');
}