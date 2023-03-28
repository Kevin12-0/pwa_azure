/* 
    guardar datos en navegaror con funcion anonima
*/
const dataSave = async () => {
    const coment = document.getElementById('comentText');
    let comentText = coment.value;
    /* obtener el nombre y vercion de un navegador */
    const navigator = bowser.name;
    const version = bowser.version;
    const objectData = {
        navigator: navigator,
        coment: comentText
    }
    console.log(comentText);
    console.log(`${navigator} ${version}`);
    console.log(localStorage.setItem("navegador", `$navigator $version`));

}