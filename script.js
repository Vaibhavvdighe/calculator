document.querySelectorAll('td');
const display = document.getElementById('space');
const calculator = document.querySelector('table');
const back = document.getElementById('back');


let openBracket = true
calculator.addEventListener('click', (event) => { 
    event.preventDefault();
    if(event.target.id=="space") {
        return;
    }
    if((event.target.innerText=='%' || event.target.innerText=='*' || event.target.innerText=='=') && display.innerText=="") {
        alert('Enter Operands First!');

    }
    else if(event.target.id=="clear") {
        display.innerText=" ";
    }
    else if(event.target.id=="bracket"){
        if(openBracket){
            display.innerText += "(";
            openBracket=false;
        }
        else{
            display.innerText += ")";
            openBracket=true;  
        }
    }
    else if(event.target==back) {
        let text = display.innerText.toString();
        display.innerText=text.substring(0,text.length-1);
    }
    else if(event.target.innerText=="=") {
        display.innerText=eval(display.innerText);
    }
    else {
        display.innerText += event.target.innerText;
    }
})