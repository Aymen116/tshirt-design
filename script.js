function getInputValue(){
   var name=document.getElementById("name");
    var inputVal = document.getElementById("myInput").value;
    var inputVal2 = document.getElementById("myInput2").value;
    name.innerHTML=inputVal;
    number.innerHTML=inputVal2;
    console.log(name);
    console.log(inputVal)
}