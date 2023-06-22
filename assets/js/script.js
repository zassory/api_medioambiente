
let btnBuscar = document.getElementById("btnBuscar");

let txtCo = document.querySelector(".txtComuna");
txtCo.setAttribute('placeholder', 'Ingrese Comuna');
txtCo.style.color = 'white';

btnBuscar.addEventListener("click", ()=> {

    let txtComuna = document.getElementById("txtComuna").value;

    if(txtComuna === '' || txtComuna === null){
        alert("Debe ingresar la comuna");
        return;
    }

    let nombreComuna = capitalizarPrimeraLetra(txtComuna);

    console.log(nombreComuna);
    
    let url = "https://sinca.mma.gob.cl/index.php/json/listadomapa2k19";

    fetch(url)
          .then(response => response.json())
          .then(data => {
          
            let comunas = data.filter(comuna => comuna.comuna === nombreComuna);

            console.log(comunas);

            let { nombre , region , key } = comunas[0];
            let { realtime } = comunas[0];
            let {tableRow} = realtime[0];

            let divRespuesta = document.querySelector(".divRespuesta");
            divRespuesta.style.display = "block";

            let h4Comuna = document.querySelector(".h4Comuna");
            let h4Region = document.querySelector(".h4Region");
            let h4Concentracion = document.querySelector(".h4Concentracion");
            let h4Calidad = document.querySelector(".h4Calidad");

            h4Comuna.innerHTML = `Comuna: ${nombre}`;
            h4Comuna.style.color = "white";
            h4Comuna.style.marginLeft = "2rem";

            h4Region.innerHTML = `Region: ${region}`;
            h4Region.style.color = "white";
            h4Region.style.marginLeft = "2rem";

            h4Concentracion.innerHTML = `Concentración del aire: ${key}`;
            h4Concentracion.style.color = "white";
            h4Concentracion.style.marginLeft = "2rem";

            h4Calidad.innerHTML = `Concentración del aire: ${tableRow.status}`;
            h4Calidad.style.color = "white";
            h4Calidad.style.marginLeft = "2rem";            
            
          })
          .catch(error => {
            alert("Ocurrio un error, revise la comuna ingresada",error);
          });

          setTimeout(()=> {
            let txtComuna = document.getElementById("txtComuna");
            txtComuna.value = "";
            txtComuna.setAttribute('placeholder', 'Ingrese Comuna');
            txtComuna.style.color = 'white';
          },5000);
    
});

// const capitalizarPrimeraLetra = (comuna) => {
//     var primeraLetra = comuna.charAt(0).toUpperCase();
//     var comunaCapitalice = comuna.slice(1).toLowerCase();
//     return primeraLetra + comunaCapitalice;
// }

const capitalizarPrimeraLetra = (comuna_param) => {
    let comuna = comuna_param.split(" ");
        
    let resultado = [];

    for (let i = 0; i < comuna.length; i++) {
        let comuna_completa = comuna[i];    

    if (comuna_completa.length > 0) {

        let firstLetter = comuna_completa.charAt(0).toUpperCase();
        let restoPalabra = comuna_completa.slice(1).toLowerCase();
        let comunaCapitalizada = firstLetter + restoPalabra;

        resultado.push(comunaCapitalizada);
    }
  }

  return resultado.join(" ");
}



// fetch('https://reqres.in/api/users/23')    
//     .then(res => res.json())
//     .then(data => console.log(data));

// fetch('https://reqres.in/api/users/23')    
//     .then(res => res.json())
//     .then(data => console.log(data));

// fetch('https://reqres.in/api/users/')
//     .then(res => {
//         if(res.ok){
//             console.log('Éxito');
//             return res.json();
//         } else{
//             console.log("Falló");
//         }
//     })
//     .then(data => console.log(data));
// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-type':'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Usuario 1'
//     })
// }).then(res => {
//     if(res.ok){
//         console.log('Éxito');
//         return res.json();
//     }else{
//         console.log('Falló');
//     }
// }).then(data => console.log(data));

// fetch('https://reqres.in/api/users/2', {
//     method: 'DELETE',
// }).then(res => {
//     if(res.ok){
//         console.log('Éxito');
//         console.log(res.status);
//     } else{
//         console.log('Falló');
//         console.log(res.status);
//     }
// })
// async function leerArchivo(){
//     let x = await fetch('lorem.txt');
//     let y = await x.text();
//     console.log(y);
// }

// leerArchivo();