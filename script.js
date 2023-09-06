// functions to get add, subtract, multiply, divide
const add = (a,b) => {
    return a + b; 
}

const subtract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    return a / b;
}

// variable for operator function so they can be
// so they can be accessed outside function as well
let entry1;
let operate;
let entry2;

// function takes parameters and operates them to choice
// for instance a + would be add
const operator = (entry1, operate, entry2) => {
    if (operate === "+") {
       return add(entry1, entry2);
    }
    else if (operate === "-") {
        return subtract(entry1, entry2);
    }
    else if (operate === "*") {
       return multiply(entry1, entry2);
    }
    else if (operate === "/") {
       return divide(entry1, entry2);
    } else {
        return;
    }
}

//button variables to access DOM
let clearBtn = document.getElementById('clear');
const myButton = document.querySelectorAll('input.button');

//display we see on screen variable
let display;

//holds a array which i use to store answers
let myarr = [];

//loop through answers and push them in array
myButton.forEach(el => {
    el.addEventListener('click', (event) => {
        display = event.target.value;
        console.log(display);
        document.querySelector('input[id="result"]').value = display;
        
        myarr.push(display)

    });
    
});

//let equalButton = document.querySelector('input[id="equals"]');
let equalButton = document.getElementById("equals");


//clear button
clearBtn.addEventListener('click', function(){
    myarr = [];
})

//clear function
function clearAll(){
    myarr = [];
}

// main function that calls answers and decides what to do
const runMain = () => {
    // change string to numbers in array
    myarr[0] = parseInt(myarr[0])
    myarr[2] = parseInt(myarr[2])
    console.log(myarr);
   
        // take it 4 operators and call function
        switch (myarr[1]) {
            case '+':
            case '-':
            case '*':
            case '/':
                display = operator(myarr[0], myarr[1], myarr[2])
                document.querySelector('input[id="result"]').value = display;
                break;            
            default:
                console.log('None')
                break;
        }
        // if the users wants to add on to the answer this triggers
        switch (myarr[4]){
            case '+':
            case '-':
            case '*':
            case '/':
                console.log('first answer ' + display)
                // i reset the first 3 array values and called operator on them
                myarr[0] = display;
                myarr[1] = myarr[4]
                myarr[2] = myarr[5]
                // change strings to numbers
                myarr[0] = parseInt(myarr[0])
                myarr[2] = parseInt(myarr[2])


                //console.log(myarr)
                display = operator(myarr[0], myarr[1], myarr[2])
                //console.log(display)
                document.querySelector('input[id="result"]').value = display;
                break;

    }
            
}

//call the main decision maker function
equalButton.addEventListener('click', runMain);

//try makeing a new list next
