let number1 = '', operator = '', number2 = '', display = '';

const buttons = document.querySelectorAll('.btn');
const displayCont = document.querySelector('#calc-display');

function add(){
    display = parseInt(number1) + parseInt(number2);
}

function subtract(){
    display= parseInt(number1) - parseInt(number2);
}

function multiply(){
    display = parseInt(number1) * parseInt(number2);
}

function divide(){
    if(number2 == "0"){
        display = 'Cannot divide by zero';
    }else{
        display = parseInt(number1) / parseInt(number2);
    }

}



buttons.forEach(x=>{
    x.addEventListener('click', () =>{
        let val = x.getAttribute('value');
        
        switch(val){
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                if(operator == '' || operator == undefined){
                    number1 += val;
                    displayCont.innerHTML = number1;
                }else{
                    number2 += val;
                    displayCont.innerHTML = number1 + ' ' + operator + ' ' + number2;
                }
                break;
            case '+':
            case '-':
            case '/':
            case 'x':
                if(display != '' && !isNaN(display) && number1 == ''){
                    number1 = display;
                }
                else if(number1 == ''){
                    number1 = 0
                }

                if(number2 != ''){
                    number1 = doMath();
                    number2 = '';
                }
                operator = val;
                displayCont.innerHTML = number1 + ' ' + operator

                break;
            case '=':
                doMath();
                number1 = '';
                number2 = '';
                operator = '';
                break;
            default:
                number1 = '';
                number2 = '';
                operator = '';
                display = '';
                displayCont.innerHTML = '0';
                break;
        }
    });
});

function doMath(){
    switch(operator){
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case 'x':
            multiply();
            break;
        case '/':
            divide();
            break;
        default:
            break; 

    }
    displayCont.innerHTML = display;
}