function setInput(number){
    document.getElementById('output').value +=number
}function calculator() {
    let output = document.getElementById('output').value;
    result = eval(output);
    document.getElementById('output').value = result;
}