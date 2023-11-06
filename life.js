function life(){
    const a=document.getElementById("name").value;
    const b=parseInt(document.getElementById("age").value);

    document.getElementById("life").innerHTML= a+", you have "+(90-b)+" years "+(90-b)*12 +" months and "+(90-b)*365 +" days of life remaining";
}