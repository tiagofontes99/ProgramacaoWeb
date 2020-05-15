function onLoad() {
    const divElement = document.getElementById("1");
    console.log("My div element -> ", divElement);

    const divElement2 = document.getElementById("2");

    divElement2.addEventListener('click', () => {
        divElement2.classList.remove('padding-10');
    });
}

document.addEventListener('DOMContentLoaded', onLoad);

function onLoadCheckbox() {
    const textInput = document.getElementById('textInput');
    const textValue = textInput.value;
    console.log('Valor TextInput: ', textValue);
    const divElement = document.getElementById('container');
    divElement.innerHTML = `<div class="red">${textValue}</div>`;
    var texto =textValue+"; "+"<br>";
    for(let i = 1; i <= 100; i++) {
        console.log('For index -> ', i);
        if (i%3===0&&i%5===0){
            texto+="BigBang";
        } else if (i%5===0){
            texto+="Bang";
        } else if (i%3===0){
            texto+="Big";
        }else{
            texto+=i;
        }
        texto+="; "
        divElement.innerHTML = `<div >${texto}</div>`;
    }


}


