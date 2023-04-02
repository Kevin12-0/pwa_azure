/* 
    guardar datos en navegaror con funcion anonima
*/
const dataSave = async () => {
    const coment = document.getElementById('comentText');
    let comentText = coment.value;
    /* obtener el nombre y vercion de un navegador */
    const navigator = bowser.name;
    const version = bowser.version;
    /* se guarda en localStorage */
    localStorage.setItem("navegador", `${navigator} v.${version}`);
    /* imprime lo guardado en localStorage */
    console.log(localStorage.getItem("navegador"));
    /* Guardar comentario en localStorage */
    localStorage.setItem("comentario", comentText)
    console.log(localStorage.getItem("comentario"));
}