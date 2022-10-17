/*
const calcularenvido = function (c1n, c1p, c2n, c2p, c3n, c3) {
    return c1n
*/
const calcularenvido = (c1n, c1p, c2n, c2p, c3n, c3p) => {
    let envido = 0; 
    // SI LAS CARTAS SON FIGURAS LES ASIGNO EL VALOR DE 0
    switch (c1n){
        case 10:
        case 11:
        case 12:
            c1n = 0;
            break;
    }
    switch (c2n){
        case 10:
        case 11:
        case 12:
            c2n = 0;
            break;
    }
    switch (c3n){
        case 10:
        case 11:
        case 12:
            c3n = 0;
            break;
    }
    // VERIFICO SI HAY 3 CARTAS DEL MISMO PALO
    // EN ESE CASO SUMO LAS 2 MAS ALTAS Y LE SUMO 20
    if (c1p === c2p && c2p === c3p){
        if (c1n <= c2n && c1n <= c3n){
            envido = c3n + c2n + 20;
        }
        else if (c2n <= c1n && c2n <= c3n){
            envido = c3n + c1n + 20;
        }
        else if (c3n <= c2n && c3n <= c1n){
           envido = c1n + c2n + 20;
       }
    }
    // VERIFICO SI HAY 2 CARTAS DEL MISMO PALO
    // EN ESE CASO SUMO LAS 2 Y LE SUMO 20
    else if (c1p === c2p){
        envido = c1n + c2n + 20;
    }
    else if (c1p === c3p){
        envido = c1n + c3n + 20;
    }
    else if (c3p === c2p){
        envido = c3n + c2n + 20;
    }
    // SI TODAS LAS CARTAS SON DE PALOS DISTINTOS BUSCO LA CARTA MAS ALTA
    else if (c1n >= c2n && c1n >= c3n){
        envido=c1n;
    }
    else if (c2n >= c1n && c2n >= c3n){
        envido=c2n;
    }
    else if (c3n >= c2n && c3n >= c1n){
        envido=c3n;
    }
        return envido;
};
// VERIFICO SI EL NUMERO INGRESADO ES VALIDO
const verificarnumero = (num) => {
    return (num>0 && num<13 && num!==8 && num!==9);
};
// VERIFICO SI EL PALO INGRESADO ES VALIDO
const verificarpalo = (palo) => {
    return (palo !== 'O' && palo !== 'C' && palo !== 'E' && palo !== 'B');
}
// MAZO DE CARTAS PARA JUGAR
const mazo = [
    { 
        palo: "Oro",
        número : "1",
        valor: "10"
    },
    { 
        palo: "Oro",
        número : "2",
        valor: "8"
    },
    { 
        palo: "Oro",
        número : "3",
        valor: "4"
    },
    { 
        palo: "Oro",
        número : "4",
        valor: "36"
    },
    { 
        palo: "Oro",
        número : "5",
        valor: "32"
    },
    { 
        palo: "Oro",
        número : "6",
        valor: "28"
    },
    { 
        palo: "Oro",
        número : "7",
        valor: "3"
    },
    { 
        palo: "Oro",
        número : "10",
        valor: "22"
    },
    { 
        palo: "Oro",
        número : "11",
        valor: "18"
    },
    { 
        palo: "Oro",
        número : "12",
        valor: "14"
    },
    { 
        palo: "Copa",
        número : "1",
        valor: "10"
    },
    { 
        palo: "Copa",
        número : "2",
        valor: "8"
    },
    { 
        palo: "Copa",
        número : "3",
        valor: "4"
    },
    { 
        palo: "Copa",
        número : "4",
        valor: "36"
    },
    { 
        palo: "Copa",
        número : "5",
        valor: "32"
    },
    { 
        palo: "Copa",
        número : "6",
        valor: "28"
    },
    { 
        palo: "Copa",
        número : "7",
        valor: "26"
    },
    { 
        palo: "Copa",
        número : "10",
        valor: "22"
    },
    { 
        palo: "Copa",
        número : "11",
        valor: "18"
    },
    { 
        palo: "Copa",
        número : "12",
        valor: "14"
    },
    { 
        palo: "Espada",
        número : "1",
        valor: "0"
    },
    { 
        palo: "Espada",
        número : "2",
        valor: "8"
    },
    { 
        palo: "Espada",
        número : "3",
        valor: "4"
    },
    { 
        palo: "Espada",
        número : "4",
        valor: "36"
    },
    { 
        palo: "Espada",
        número : "5",
        valor: "32"
    },
    { 
        palo: "Espada",
        número : "6",
        valor: "28"
    },
    { 
        palo: "Espada",
        número : "7",
        valor: "2"
    },
    { 
        palo: "Espada",
        número : "10",
        valor: "22"
    },
    { 
        palo: "Espada",
        número : "11",
        valor: "18"
    },
    { 
        palo: "Espada",
        número : "12",
        valor: "14"
    },
    { 
        palo: "Basto",
        número : "1",
        valor: "1"
    },
    { 
        palo: "Basto",
        número : "2",
        valor: "8"
    },
    { 
        palo: "Basto",
        número : "3",
        valor: "4"
    },
    { 
        palo: "Basto",
        número : "4",
        valor: "36"
    },
    { 
        palo: "Basto",
        número : "5",
        valor: "32"
    },
    { 
        palo: "Basto",
        número : "6",
        valor: "28"
    },
    { 
        palo: "Basto",
        número : "7",
        valor: "26"
    },
    { 
        palo: "Basto",
        número : "10",
        valor: "22"
    },
    { 
        palo: "Basto",
        número : "11",
        valor: "18"
    },
    { 
        palo: "Basto",
        número : "12",
        valor: "14"
    }
]
// COSTRUCTOR DE PARTIDO NUEVO
function Partido (objeto) {
    this.cantchicos = objeto.cantchicos;
    this.puntostotal = objeto.puntostotal;
    this.jugadormano = objeto.jugadormano;
    this.flor = objeto.flor;
    this.jugadores = objeto.jugadores;
    this.chicos = [];
    this.iniciarnuevochico = () => {
        if (this.chicos.length < this.cantchicos){
            this.chicos.push(
                new Chico(
                    {
                        jugadormano: this.jugadormano,
                        puntos1 : 0,
                        puntos2 : 0
                    }
                )
            );
            if (this.jugadormano === 1) {
                this.jugadormano === 2;
            } else {
                this. jugadormano === 1;
            }
        } else {
            console.log('fin del partido');
        }
    }
}
// COSTRUCTOR DE CHICO NUEVO
function Chico (objeto) {
    this.jugadormano = objeto.jugadormano;
    this.puntos1 = objeto.puntos1;
    this.puntos2 = objeto.puntos2;
    this.ganador = 0;
}
// CONSTRUCTOR DE MANO
function Mano (objeto) {
    cartas1 = objeto.cartas1;
    cartas2 = objeto.cartas2;
    jugadormano = objeto.jugadormano;
    vueltas = [];
    envido = {
        canto: [],
        cantojugador: 0,
        puntos: 0,
        ganador: 0
    };
    truco = {
        canto: [],
        cantojugador: 0,
        puntos: 1,
        ganador: 0
    }
}

// CARGAR LOS DATOS DEL PARTIDO NUEVO
const cargarnuevopartido = () => {
    let chicos;
    let puntostotal;
    let flor;
    let jugadornombre;
    let jugadormano;
    let mensaje = "Hola soy JSAI y te defafío a jugar al truco\n¿Cuál es tu nombre?";
    do {
        jugadornombre = prompt(mensaje);
        mensaje = "Tu nombre debe tener por lo menos 2 caracteres"
    } while (jugadornombre.length<2);
    mensaje = "¿A cuántos chicos querés jugar? (1,2,3)"
    do {
        chicos = parseInt(prompt(mensaje));
        mensaje = "Tenes que ingresar una de las opciones (1,2,3)"
    } while (chicos !== 1 && chicos !==2 && chicos !== 3);
    mensaje = "¿A cuántos puntos querés jugar? (15 ó 30)"
    do {
        puntostotal = parseInt(prompt(mensaje));
        mensaje = "Tenes que ingresar una de las opciones (15 ó 30)"
    } while (puntostotal !== 15 && puntostotal !== 30);
    mensaje = "¿Jugamos con Flor? (SI / NO)";
    do {
        flor = prompt(mensaje);
        if (flor.toLowerCase() === "si" || flor.toLowerCase() === "s"){
            flor = true;
        } else if (flor.toLowerCase() === "no" || flor.toLowerCase() === "n"){
            flor = false;
        }
        mensaje = "Tenes que ingresar una de las opciones (SI /  NO)";
    } while (flor !== true && flor !== false);
    mensaje = "¿Reparto yo? (SI / NO)";
    do {
        jugadormano = prompt(mensaje);
        if (jugadormano.toLowerCase() === "si" || jugadormano.toLowerCase() === "s"){
            jugadormano = 2;
        } else if (jugadormano.toLowerCase() === "no" || jugadormano.toLowerCase() === "n"){
            jugadormano = 1;
        } else {
        jugadormano = 0; 
        }
        mensaje = "Tenes que ingresar una de las opciones (SI /  NO)";
    } while (jugadormano !== 1 && jugadormano !== 2);
    let nuevopartido = new  Partido ({
        cantchicos : chicos,
        puntostotal : puntostotal,
        flor : flor,
        jugadores: [
            {jugadornombre : jugadornombre},
            {jugadornombre : 'JSAI'}
        ],
        jugadormano: jugadormano,
        chicos : [
            {
                jugadormano: jugadormano,
                puntos1: 0,
                puntos2: 0,
                ganador: 0
            }
        ]
    });
    return nuevopartido;
}

/* INICIAR NUEVO CHICO
const iniciarnuevochico = () => {
    let partido = partidos [partidos.length-1];
    if (partido.chicos.length > partido.cantchicos){
        partido.chicos.push(
            {
                jugadormano: partido.jugadormano,
                puntos1: 0,
                puntos2: 0,
                ganador: 0
            }
        )
    } else {
        console.log('fin del partido');
    }
}
*/
let partidos = [];
partidos.push(cargarnuevopartido());
let partidoencurso = partidos[partidos.length-1];
partidoencurso.iniciarnuevochico();
partidoencurso.iniciarnuevochico();
partidoencurso.iniciarnuevochico();
console.table(partidos);
/*
let c1n;
let c1p;
let c2n;
let c2p;
let c3n;
let c3p;
let envido;
let continuar;
let mensaje = "Hola soy tu calculador de envido.\nPara ingresar las cartas primero\ntenés que escribir el valor en números\ny después la inicial del palo en mayúsculas.\nO - Oro | C - Copa | E - Espada | B - Basto\n_____________________________________\nIngresá el valor de tu primera carta";

// CARGO LAS TRES CARTAS DE LA MANO HASTA QUE ME RESPONDAN QUE "NO"
do {
    // CARGO LA PRIMERA CARTA  
    do {
        c1n = parseInt(prompt(mensaje));
        mensaje = "El número ingresado es incorrecto\nEl valor de las cartas debe ser 1, 2, 3, 4, 5, 6, 7, 10, 11 o 12\nProbá de nuevo.";
    } while (!verificarnumero(c1n));
    mensaje = "Ingresá el palo de tu primera carta";
    do {
        c1p = prompt(mensaje);
        mensaje = "El palo ingresado es incorrecto\nEl palo de las cartas debe ser O (oro), C (copa), E (espada) o B (basto)\nProbá de nuevo.";
    } while (verificarpalo(c1p));
    // CARGO LA SEGUNDA CARTA HASTA QUE SEA DISTINTA DE LA PRIMERA
    do {
        mensaje = "Ingresá el valor de tu segunda carta";
        do {
            c2n = parseInt(prompt(mensaje));
            mensaje = "El número ingresado es incorrecto\nEl valor de las cartas debe ser 1, 2, 3, 4, 5, 6, 7, 10, 11 o 12\nProbá de nuevo.";
        } while (!verificarnumero(c2n));
        mensaje = "Ingresá el palo de tu segunda carta";
        do {
            c2p = prompt(mensaje);
            mensaje = "El palo ingresado es incorrecto\nEl palo de las cartas debe ser O (oro), C (copa), E (espada) o B (basto)\nProbá de nuevo.";
        } while (verificarpalo(c2p));
        // ALERTO SI LA CARTA YA FUE CARGADA
        if (c1n + c1p === c2n + c2p) {
            alert ('Ya ingresaste esa carta. Ingresá una carta distinta.');
        }
    } while (c1n + c1p === c2n + c2p); 
    // CARGO LA TERCERA CARTA HASTA QUE SEA DISTINTA DE LA PRIMERA Y DE LA SEGUNDA
    do {
        mensaje = "Ingresá el valor de tu tercera carta";
        do {
            c3n = parseInt(prompt(mensaje));
            mensaje = "El número ingresado es incorrecto\nEl valor de las cartas debe ser 1, 2, 3, 4, 5, 6, 7, 10, 11 o 12\nProbá de nuevo.";
        } while (!verificarnumero(c3n));
        mensaje = "Ingresá el palo de tu tercera carta";
        do {
            c3p = prompt(mensaje);
            mensaje = "El palo ingresado es incorrecto\nEl palo de las cartas debe ser O (oro), C (copa), E (espada) o B (basto)\nProbá de nuevo.";
        } while (verificarpalo(c3p));
        // ALERTO SI LA CARTA YA FUE CARGADA
        if (c1n + c1p === c3n + c3p || c3n + c3p === c2n + c2p) {
            alert ('Ya ingresaste esa carta. Ingresá una carta distinta.');
        }  
    } while (c1n + c1p === c3n + c3p || c3n + c3p === c2n + c2p);
    envido = calcularenvido(c1n, c1p, c2n, c2p, c3n, c3p);
    continuar = prompt('Tenés ' + envido + ' para el envido.\n¿Querés que te asista otra mano? (S/N)');
    mensaje = "Ingresá el valor de tu primera carta";  
} while (continuar !== 'NO' && continuar !== 'no' && continuar !== 'N' && continuar !== 'n' && continuar !== 'No' && continuar !== 'nO');
*/
