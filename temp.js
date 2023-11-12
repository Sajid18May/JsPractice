function convert(){
    if(document.getElementById('temp').value=='Celcius')
    {
       let a= document.getElementById('t').value;
        let x=a*9/5+32;
       document.getElementById('result').innerHTML=`The Fahrenheit value is ${x}`;
    }
    else{
        let a= document.getElementById('t').value;
        let x=(a-32)*5/9;
       document.getElementById('result').innerHTML=`The Celcius value is ${x}`;

    }
}