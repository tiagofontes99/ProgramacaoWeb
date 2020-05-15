function funEx1() {

    var student = {name: "David Rayy", classificacao: "VI", numero: 12};

    document.getElementById('resposta').innerHTML = "student is " + student.name + " " + student.classificacao + " " + student.numero;

}

function funEx2() {

    var student = {name: "David Rayy", sclass: "VI", rollno: 12};
    document.getElementById('resposta').innerHTML = "BEFORE " + student.name + " ->" + student.sclass + "->" + student.rollno + "<br>";
    delete student.rollno;
    document.getElementById('resposta2').innerHTML = "AFTER " + student.name + "-> " + student.sclass + "-> " + student.rollno;

}

function funEx3() {
    document.getElementById('resposta2').innerHTML = "";
    var student = {name: "David Rayy", sclass: "VI", rollno: 12}

    document.getElementById('resposta').innerHTML = "stundent size= " + Object.keys(student).length;


}

function funEx4() {
    document.getElementById('resposta2').innerHTML = "";

    var library = [{author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true}, {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    }, {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false}];

    document.getElementById('resposta').innerHTML = library[0].author + "->" + library[0].title + "->" + library[0].readingStatus + "<br>"
        + library[1].author + "->" + library[1].title + "->" + library[1].readingStatus + "<br>"
        + library[2].author + "->" + library[2].title + "->" + library[2].readingStatus + "<br>";


}

function funEx5() {
    document.getElementById('resposta2').innerHTML = "";

    const raio = document.getElementById('raio');
    const raioValue = raio.value;

    const height = document.getElementById('height');
    const heightValue = height.value;

    document.getElementById('resposta').innerHTML = "Volume =" + 3.14159 * 2 * raioValue * heightValue;


}

function funEx6() {
    document.getElementById('resposta2').innerHTML = "";

    var sample = [6, 4, 0, 3, -2, 1]


    let len = sample.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (sample[j] > sample[j + 1]) {
                let tmp = sample[j];
                sample[j] = sample[j + 1];
                sample[j + 1] = tmp;
            }
        }
    }
    document.getElementById('resposta').innerHTML = sample;


}

function funEx7() {
    document.getElementById('resposta2').innerHTML = "";

    const textValueString = document.getElementById('substring').value;
    let array = [];

    for (let i = 0; i < textValueString.length; i++) {
        for (let j = 0; j <= textValueString.length; j++) {
            if (i < j) {
                let substring = textValueString.substring(i, j);
                array.push(substring);
            }
        }
    }

    document.getElementById("resposta").innerHTML = array;



}

function funEx8() {
    document.getElementById('resposta2').innerHTML = "";

    const raio = document.getElementById('raio2');
    const raioValue = raio.value;


    document.getElementById('resposta').innerHTML = "Area =" + 3.14159*raioValue*raioValue;

}

function funEx9() {
    document.getElementById('resposta2').innerHTML = "";
    document.getElementById('resposta').innerHTML = "go to ex10";

}

function funEx10() {
    document.getElementById('resposta2').innerHTML = "";

    var penguin = {character: "Sparky the Wonder Penguin", origin: " This Modern World ", creator: "Tom Tomorrow" , notes:"A fast-talking penguin (sometimes identified as an auk) who wears a red visor and offers political commentary."};

    console.log("Hello my name is " + penguin.character+" im from " + penguin.origin+" and my creator is "+ penguin.creator+" you want to know something about me ? here it is " +
        + penguin.notes);

}
function funEx11() {
    document.getElementById('resposta2').innerHTML = "";

    var penguin = {character: "Sparky the Wonder Penguin", origin: "This Modern World", creator: "Tom Tomorrow" , notes:"A fast-talking penguin (sometimes identified as an auk) who wears a red visor and offers political commentary."};
    penguin.canFly=false;

    document.getElementById('resposta').innerHTML =" Hello my name is " + penguin.character+" im from " + penguin.origin+" and my creator is "+ penguin.creator+"can i fly? if 0 then no " +
        +penguin.canFly;

}

function funEx12() {

    var penguin = {character: "Sparky the Wonder Penguin", origin: "This Modern World", creator: "Tom Tomorrow" , notes:"A fast-talking penguin (sometimes identified as an auk) who wears a red visor and offers political commentary."};

    penguin.chirp = function () {
        console.log("CHIRP CHIRP! Is this what penguins sound like? (it is not)");
    }
    penguin.chirp();


}




/*
function funEx1() {
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
}*/