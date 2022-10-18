const calcularenvido = (cartas) => {
    let envido = 0;
    let tenesflor = false;
    let c1n = cartas[0].numero;
    let c1p = cartas[0].palo
    let c2n = cartas[1].numero;
    let c2p = cartas[1].palo
    let c3n = cartas[2].numero;
    let c3p = cartas[2].palo
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
        tenesflor = true;
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
        return {envido: envido , flor: tenesflor};
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
        numero : "1",
        valor: "10"
    },
    { 
        palo: "Oro",
        numero : "2",
        valor: "8"
    },
    { 
        palo: "Oro",
        numero : "3",
        valor: "4"
    },
    { 
        palo: "Oro",
        numero : "4",
        valor: "36"
    },
    { 
        palo: "Oro",
        numero : "5",
        valor: "32"
    },
    { 
        palo: "Oro",
        numero : "6",
        valor: "28"
    },
    { 
        palo: "Oro",
        numero : "7",
        valor: "3"
    },
    { 
        palo: "Oro",
        numero : "10",
        valor: "22"
    },
    { 
        palo: "Oro",
        numero : "11",
        valor: "18"
    },
    { 
        palo: "Oro",
        numero : "12",
        valor: "14"
    },
    { 
        palo: "Copa",
        numero : "1",
        valor: "10"
    },
    { 
        palo: "Copa",
        numero : "2",
        valor: "8"
    },
    { 
        palo: "Copa",
        numero : "3",
        valor: "4"
    },
    { 
        palo: "Copa",
        numero : "4",
        valor: "36"
    },
    { 
        palo: "Copa",
        numero : "5",
        valor: "32"
    },
    { 
        palo: "Copa",
        numero : "6",
        valor: "28"
    },
    { 
        palo: "Copa",
        numero : "7",
        valor: "26"
    },
    { 
        palo: "Copa",
        numero : "10",
        valor: "22"
    },
    { 
        palo: "Copa",
        numero : "11",
        valor: "18"
    },
    { 
        palo: "Copa",
        numero : "12",
        valor: "14"
    },
    { 
        palo: "Espada",
        numero : "1",
        valor: "0"
    },
    { 
        palo: "Espada",
        numero : "2",
        valor: "8"
    },
    { 
        palo: "Espada",
        numero : "3",
        valor: "4"
    },
    { 
        palo: "Espada",
        numero : "4",
        valor: "36"
    },
    { 
        palo: "Espada",
        numero : "5",
        valor: "32"
    },
    { 
        palo: "Espada",
        numero : "6",
        valor: "28"
    },
    { 
        palo: "Espada",
        numero : "7",
        valor: "2"
    },
    { 
        palo: "Espada",
        numero : "10",
        valor: "22"
    },
    { 
        palo: "Espada",
        numero : "11",
        valor: "18"
    },
    { 
        palo: "Espada",
        numero : "12",
        valor: "14"
    },
    { 
        palo: "Basto",
        numero : "1",
        valor: "1"
    },
    { 
        palo: "Basto",
        numero : "2",
        valor: "8"
    },
    { 
        palo: "Basto",
        numero : "3",
        valor: "4"
    },
    { 
        palo: "Basto",
        numero : "4",
        valor: "36"
    },
    { 
        palo: "Basto",
        numero : "5",
        valor: "32"
    },
    { 
        palo: "Basto",
        numero : "6",
        valor: "28"
    },
    { 
        palo: "Basto",
        numero : "7",
        valor: "26"
    },
    { 
        palo: "Basto",
        numero : "10",
        valor: "22"
    },
    { 
        palo: "Basto",
        numero : "11",
        valor: "18"
    },
    { 
        palo: "Basto",
        numero : "12",
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
    this.chicoencurso = 0;
    this.mazo = mazo;
    this.cartas1 = [];
    this.cartas2 = [];
    this.iniciarnuevochico = () => {
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
            this.jugadormano = 2;
        } else {
            this. jugadormano = 1;
        }
        this.chicoencurso = this.chicos.length-1;
    };
    this.iniciarmano = () => {
        // REPARTO LAS CARTAS AL AZAR
        let cartas = {
            j1 : [],
            j2 : []
        };
        this.mazo = mazo;
        for (let c = 0; c < 3; c++) {
            if (this.chicos[this.chicoencurso].jugadormano===1){
                cartas.j1.push(this.mazo.splice(Math.floor(Math.random() * this.mazo.length),1)[0]);
                cartas.j2.push(this.mazo.splice(Math.floor(Math.random() * this.mazo.length),1)[0]);
            } else {
                cartas.j2.push(this.mazo.splice(Math.floor(Math.random() * this.mazo.length),1)[0]);
                cartas.j1.push(this.mazo.splice(Math.floor(Math.random() * this.mazo.length),1)[0]);
            }
        }
        this.chicos[this.chicoencurso].mano = new Mano (
            {
                cartas: cartas,
                jugadormano : this.chicos[this.chicoencurso].jugadormano
            }
        )
    }
}
// COSTRUCTOR DE CHICO NUEVO
function Chico (objeto) {
    this.jugadormano = objeto.jugadormano;
    this.puntos1 = objeto.puntos1;
    this.puntos2 = objeto.puntos2;
    this.ganador = 0;
    this.mano = [];
}
// CONSTRUCTOR DE MANO
function Mano (objeto) {
    this.cartas = objeto.cartas;
    this.jugadormano = objeto.jugadormano;
    this.vueltas = [];
    this.envido = {
        canto: [],
        cantojugador: 0,
        puntos: 0,
        ganador: 0
    };
    this.truco = {
        canto: [],
        cantojugador: 0,
        puntos: 1,
        ganador: 0
    }
}

// CARGAR LOS DATOS DEL PARTIDO NUEVO
const cargarnuevopartido = () => {
/*    
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
    mensaje = "¿A cuántos chicos querés jugar? (1,3,5)"
    do {
        chicos = parseInt(prompt(mensaje));
        mensaje = "Tenes que ingresar una de las opciones (1,3,5)"
    } while (chicos !== 1 && chicos !==3 && chicos !== 5);
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
*/
let nuevopartido = new  Partido ({
    cantchicos : 5,
    puntostotal : 30,
    flor : false,
    jugadores: [
        {jugadornombre : 'Juan'},
        {jugadornombre : 'JSAI'}
    ],
    jugadormano: 1,
    chicos : [
        {
            jugadormano: 1,
            puntos1: 0,
            puntos2: 0,
            ganador: 0
        }
    ]
});
return nuevopartido;
}

let partidos = [];
partidos.push(cargarnuevopartido());
let partidoencurso = partidos[partidos.length-1];
let chicoencurso;
let envidomanoj1;
let envidomanoj2;
//do {
    partidoencurso.iniciarnuevochico();
   // do{
        chicoencurso = partidoencurso.chicos[partidoencurso.chicoencurso];
        partidoencurso.iniciarmano();
        envidomanoj1 = calcularenvido(chicoencurso.mano.cartas.j1);
        envidomanoj2 = calcularenvido(chicoencurso.mano.cartas.j2);
        alert(`Tus cartas son:
        ${chicoencurso.mano.cartas.j1[0]['numero']} de ${chicoencurso.mano.cartas.j1[0].palo}
        ${chicoencurso.mano.cartas.j1[1].numero} de ${chicoencurso.mano.cartas.j1[1].palo}
        ${chicoencurso.mano.cartas.j1[2].numero} de ${chicoencurso.mano.cartas.j1[2].palo}
        Tenés ${envidomanoj1.envido} para el envido.
        `)
        console.log(`Mis cartas son:
        ${chicoencurso.mano.cartas.j2[0]['numero']} de ${chicoencurso.mano.cartas.j2[0].palo}
        ${chicoencurso.mano.cartas.j2[1].numero} de ${chicoencurso.mano.cartas.j2[1].palo}
        ${chicoencurso.mano.cartas.j2[2].numero} de ${chicoencurso.mano.cartas.j2[2].palo}
        Tengo ${envidomanoj2.envido} para el envido.
        `)
   // } while (chicoencurso.puntos1>partidoencurso.puntostotal && chicoencurso.puntos2>partidoencurso.puntostotal);
//} while (partidoencurso.chicos.length < partidoencurso.cantchicos);
console.log(partidos);
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
