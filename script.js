const display = document.getElementById('space');
const calculator = document.querySelector('table');
const back = document.getElementById('back');
const td = document.querySelectorAll('td');

const main = document.querySelector('main');
const theme = document.querySelector('.theme');
const footer = document.querySelector('footer');

let currentTheme = 'dark';
theme.addEventListener('click', ()=>{
    changeTheme();
})

function changeTheme() {
    if(currentTheme=='dark') {
        currentTheme = 'light';
        theme.innerHTML=`<i class="fa-solid fa-xl fa-moon"></i>`;
        theme.style.backgroundColor = "white";
        footer.style.backgroundColor = "rgb(207, 207, 207)";
        footer.style.color = "#212121";
        calculator.style.color="black";
        calculator.style.backgroundColor="white";
        document.body.style.backgroundColor = "white";
    }
    else if(currentTheme=='light') {
        currentTheme = 'dark';
        theme.innerHTML=`<i class="fa-solid fa-sun fa-xl" style="color: white;"></i>`;
        theme.style.backgroundColor = "#212121";
        footer.style.backgroundColor = "rgb(22, 22, 22)";
        footer.style.color = "rgb(125, 124, 124)";
        calculator.style.color="#ffffff";
        calculator.style.backgroundColor="rgb(22, 22, 22)";
        document.body.style.backgroundColor = "#212121";
    }
}


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
