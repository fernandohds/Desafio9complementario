class Auto {
    constructor(marca, anio, precio, mail, plan) {
        this.nombre  = marca;
        this.anio  = anio;
        this.precio  = precio;
        this.mail = mail;
        this.plan = plan;
    }}
let arrayAuto = [];
let miForm = document.querySelector("#frm");
let inputMarca = document.querySelector("#marca");

let input1  = frm.children[1].value;
let input2  = Number(frm.children[3].value);
let input3  = Number(frm.children[5].value);
let input4  = frm.children[7].value;
let input5  = frm.children[9].value;

let formulario = document.querySelector("#datosAuto");

frm.addEventListener('submit', agregarAuto);

inputMarca.focus();

function validarForm() {
        input1  = frm.children[1].value;
        input2  = Number(frm.children[3].value);
        input3  = Number(frm.children[5].value);
        input4  = frm.children[7].value;
        input5  = frm.children[9].value;
        console.log(input1);
        console.log(input2);
        console.log(input3);
        console.log(input4);
        console.log(input5);
        
        inputMarca.focus();
    }
   
    function agregarAuto (e) {
        e.preventDefault();
        let formulario = e.target
        arrayAuto.push(new Auto(input1,input2,input3,input4,input5));
        input1  = frm.children[1].value;
        input2  = Number(frm.children[3].value) = '';
        input3  = Number(frm.children[5].value) = '';
        input4  = frm.children[7].value = '';
        input5  = frm.children[9].value = '';
        agregarAlDom();
        inputMarca.focus();
    }   

    function agregarAlDom() {
        formulario.innerHTML = `<h2>Ultimo Auto cotizado:</h2>
        <p>Marca: ${input1} </p>
        <p>Año: ${input2} </p>
        <p>Precio: ${input3} </p>
        <p>Mail: ${input4} </p>
        <p>Plan: ${input5} </p>`
    }
  