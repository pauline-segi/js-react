function add(step) {

    // We gave the number element an id of number so we can use that to get the element
    const numberElement = document.getElementById("number");
    
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerHTML;
    
    number = parseInt(number) + step;
    
    numberElement.innerHTML = number;
}


function minus(step) {

    const numberElement = document.getElementById("number");
    
    let number = numberElement.innerHTML;
    
    number = parseInt(number) - step;
    
    numberElement.innerHTML = number;
}


function countReset() {

    const numberElement = document.getElementById("number");
    
    numberElement.innerHTML = 0;
}

