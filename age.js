function age(){
    const a=document.getElementById("name").value;
    const b=parseInt(document.getElementById("age").value);
   
        if (b<12) {
            document.getElementById("result").textContent="your age is invalid";
    }
}