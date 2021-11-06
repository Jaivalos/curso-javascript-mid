
//Objeto window

//El objeto window es utilizado para controlar completamente toda la ventana de nuestra pagina web

//open
let youTubeUrl = "https://youtube.com";
let ventana = window.open(youTubeUrl);

//close
ventana.close();

//closed
document.write(`Estado de la ventana: ${ventana.closed}`);

//El window.stop() nos funciona para parar la carga de la pagina 

//print
window.print();

//confirm
let resp = confirm("Estas seguro que quieres salir del sitio web?");
document.write(`<br>Valor del confirm: ${resp}`);