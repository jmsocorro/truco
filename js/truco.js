// CALCULAR EL ENVIDO DADAS LAS CARTAS
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
// MAZO DE CARTAS PARA JUGAR
const mazo = [
	{ 
		palo: "oro",
		numero : 1,
		valor: 10
	},
	{ 
		palo: "oro",
		numero : 2,
		valor: 8
	},
	{ 
		palo: "oro",
		numero : 3,
		valor: 4
	},
	{ 
		palo: "oro",
		numero : 4,
		valor: 36
	},
	{ 
		palo: "oro",
		numero : 5,
		valor: 32
	},
	{ 
		palo: "oro",
		numero : 6,
		valor: 28
	},
	{ 
		palo: "oro",
		numero : 7,
		valor: 3
	},
	{ 
		palo: "oro",
		numero : 10,
		valor: 22
	},
	{ 
		palo: "oro",
		numero : 11,
		valor: 18
	},
	{ 
		palo: "oro",
		numero : 12,
		valor: 14
	},
	{ 
		palo: "copa",
		numero : 1,
		valor: 10
	},
	{ 
		palo: "copa",
		numero : 2,
		valor: 8
	},
	{ 
		palo: "copa",
		numero : 3,
		valor: 4
	},
	{ 
		palo: "copa",
		numero : 4,
		valor: 36
	},
	{ 
		palo: "copa",
		numero : 5,
		valor: 32
	},
	{ 
		palo: "copa",
		numero : 6,
		valor: 28
	},
	{ 
		palo: "copa",
		numero : 7,
		valor: 26
	},
	{ 
		palo: "copa",
		numero : 10,
		valor: 22
	},
	{ 
		palo: "copa",
		numero : 11,
		valor: 18
	},
	{ 
		palo: "copa",
		numero : 12,
		valor: 14
	},
	{ 
		palo: "espada",
		numero : 1,
		valor: 0
	},
	{ 
		palo: "espada",
		numero : 2,
		valor: 8
	},
	{ 
		palo: "espada",
		numero : 3,
		valor: 4
	},
	{ 
		palo: "espada",
		numero : 4,
		valor: 36
	},
	{ 
		palo: "espada",
		numero : 5,
		valor: 32
	},
	{ 
		palo: "espada",
		numero : 6,
		valor: 28
	},
	{ 
		palo: "espada",
		numero : 7,
		valor: 2
	},
	{ 
		palo: "espada",
		numero : 10,
		valor: 22
	},
	{ 
		palo: "espada",
		numero : 11,
		valor: 18
	},
	{ 
		palo: "espada",
		numero : 12,
		valor: 14
	},
	{ 
		palo: "basto",
		numero : 1,
		valor: 1
	},
	{ 
		palo: "basto",
		numero : 2,
		valor: 8
	},
	{ 
		palo: "basto",
		numero : 3,
		valor: 4
	},
	{ 
		palo: "basto",
		numero : 4,
		valor: 36
	},
	{ 
		palo: "basto",
		numero : 5,
		valor: 32
	},
	{ 
		palo: "basto",
		numero : 6,
		valor: 28
	},
	{ 
		palo: "basto",
		numero : 7,
		valor: 26
	},
	{ 
		palo: "basto",
		numero : 10,
		valor: 22
	},
	{ 
		palo: "basto",
		numero : 11,
		valor: 18
	},
	{ 
		palo: "basto",
		numero : 12,
		valor: 14
	}
]
// COSTRUCTOR DE JUGADORES
function Jugador (objeto) {
	this.jugadornombre = objeto.jugadornombre;
	this.jugadormail = objeto.jugadormail;
	this.estadisticas = {
		partidosjugados: 0,
		partidosganados: 0,
		puntostotalesganados: 0,
		puntostotalesrecibidos: 0,
		chicostotales: 0,
		chicosganados: 0
	};
	this.preferencias = {
		mesa: 0,
		cartas: 0
	};
	// METODOS
	this.actualizarestadisticas = () => {
	};
	this.ectualizarpreferencias = () => {
	}
}
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
	// METODOS
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
		return this.chicos[this.chicoencurso];
	};
	this.iniciarmano = () => {
		// BORRO TODOS LOS ELEMENTOS DE LA MANO ANTERIOR
		const imgcartas = document.querySelectorAll('.carta img');
		[...imgcartas].forEach((imgcarta) => {
			imgcarta.remove();
		});
		// VUELVO A MOSTRAR LAS CARTAS DE J"
		const cartasJ2 = document.querySelectorAll('.manojugador2 .carta.d-none');
		[...cartasJ2].forEach((cartaJ2) => {
			cartaJ2.classList.remove('d-none');
		});
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
		// ordeno las cartas del jugador2 por la propiedad valor descendente
		cartas.j2.sort((a,b) => (b.valor - a.valor));
		// asigno el Jugador mano. Si es la primera mano veo quien es mano en el chico, sino cambio el jugador mano de la mano anterior
		let jugadormano = this.chicos[this.chicoencurso].jugadormano;
		if (this.chicos[this.chicoencurso]?.mano.jugadormano !== undefined){
			jugadormano = this.chicos[this.chicoencurso].mano.jugadormano === 1 ? 2 : 1;
		}
		this.chicos[this.chicoencurso].mano = new Mano (
			{
				cartas: cartas,
				jugadormano : jugadormano
			}
		);
		const partidoencurso = this;
		const chicoencurso = partidoencurso.chicos.length-1;
		const manoencurso = partidoencurso.chicos[this.chicoencurso].mano;
		console.log(manoencurso);
		// repartimos las cartas
		let cont = 0;
		for (let carta of manoencurso.cartas.j1) {
			let imagencarta = document.createElement('img');
			imagencarta.setAttribute('src',`./jpg/cartas/${datosguardados.jugadores[datosguardados.jugadoractivo].preferencias.cartas}/${carta.palo}${carta.numero}.jpg`)
			imagencarta.setAttribute("alt", `${carta.numero} de ${carta.palo}`);
			imagencarta.setAttribute("index", cont);
			cartasmanoJ1[cont].appendChild(imagencarta);
			cont ++;
		}
		juego.classList.add("jugando");
		// verifico en que momento del partido nos encontramosy actualizo el dom
		partidoencurso.actualizarestado();
		// evento para jugar las cartas a la mesa
		cartasmanoJ1.forEach( (carta,i) =>{
			carta.onclick = (e) => {
				console.log(e.target);
				// muevo la imagen de la carta a la mesa
				cartasmesaJ1[manoencurso.vueltanum].appendChild(e.target);
				// copio el valor de la carta a las cartas jugadas de la mano
				manoencurso.vueltas[manoencurso.vueltanum].cartaj1 = manoencurso.cartas.j1[parseInt(e.target.getAttribute('index'))];
				// borro la carta del las cartas en la mano
				manoencurso.cartas.j1[parseInt(e.target.getAttribute('index'))] = {};
				// llamo a la funcion para actualizar el estado del juego
				partidoencurso.actualizarestado();
			}
		});
		//return this.chicos[this.chicoencurso].mano;
	}
	// EVALUAR SI CANTAR EL ENVIDO
	this.cantarenvido = () => {
		const mano = this.chicos[this.chicoencurso].mano;
		// calculo el envido y guado los datos
		const mienvido = calcularenvido(mano.cartas.j2);
		console.log(cantoenvido._element);
		if (mienvido.flor && this.flor) {
			document.querySelector('#cantoenvido .canto').innerHTML = '<h1>¡Flor!<h1>';
			document.querySelector('#cantoenvido').className = "modal flor"
			cantoenvido.show();
		} else if (mienvido.envido>33) {
			document.querySelector('#cantoenvido .canto').innerHTML = '<h3>Envido<h3>';
			document.querySelector('#cantoenvido').className = "modal envido";
			cantoenvido.show();
		} else {
			this.jugarcarta();
		};
	}
	// EVALUAR SI CANTAR EL TRUCO
	this.cantartruco = () => {
		this.jugarcarta();
	}
	// EVALUAR SI QUERER EL ENVIDO
	this.quererenvido = () => {
		
	}
	// EVALUAR SI QUERER EL TRUCO
	this.querertruco = () => {
		
	}
	// EVALUAR QUE CARTA JUGAR
	this.jugarcarta = () => {
		const mano = this.chicos[this.chicoencurso].mano;
		console.log(mano);
		// creo la variable jugarcarta con un valor fuera de rango
		let jugarcarta = -1;
		// verifico si hay una carta jugada en la vuelta
		//if(mano.vueltas[mano.vueltanum].cartaj1?.valor === undefined){
		if(Object.keys(mano.vueltas[mano.vueltanum].cartaj1).length === 0){
			// juego la carta mas alta que tengo en la mano
			jugarcarta = mano.cartas.j2.length-1;
		} else {
			// guardo el valor de la carta jugada
			let valorcartajugada = mano.vueltas[mano.vueltanum].cartaj1.valor;
			// busco en las cartas la carta mas baja que le gane a la que esta en la mesa.  Sino juego una que le empate y sino la carta mas baja de todas.
			mano.cartas.j2.map((carta, i)=>{
				console.log(valorcartajugada,carta.valor,mano.cartas.j2[jugarcarta]?.valor);
				if (valorcartajugada > carta.valor && (jugarcarta === -1 || carta.valor > mano.cartas.j2[jugarcarta]?.valor)){
					jugarcarta = i;
				} else if (valorcartajugada === carta.valor && jugarcarta === -1 ) {
					jugarcarta = i;
				}
			});
		};
		// si jugarcarta esta fuera de rango juego la carta mas baja
		jugarcarta = jugarcarta === -1 ? 0 : jugarcarta ;
		console.log(jugarcarta);
		let imagencarta = document.createElement('img');
		imagencarta.setAttribute('src',`./jpg/cartas/${datosguardados.jugadores[datosguardados.jugadoractivo].preferencias.cartas}/${mano.cartas.j2[jugarcarta].palo}${mano.cartas.j2[jugarcarta].numero}.jpg`)
		imagencarta.setAttribute("alt", `${mano.cartas.j2[jugarcarta].numero} de ${mano.cartas.j2[jugarcarta].palo}`);
		imagencarta.setAttribute("index", jugarcarta);
		cartasmesaJ2[mano.vueltanum].appendChild(imagencarta);
		document.querySelector('#ma-j2-c'+(mano.vueltanum+1)).classList.add('d-none');
		// copio el valor de la carta a las cartas jugadas de la mano
		mano.vueltas[mano.vueltanum].cartaj2 = mano.cartas.j2[jugarcarta];
		// borro la carta del las cartas en la mano
		mano.cartas.j2.splice(jugarcarta,1);
		// llamo a la funcion para actualizar el estado del juego
		this.actualizarestado();
	}
	this.actualizarestado = () => {
		const mano = this.chicos[this.chicoencurso].mano;
		// Veo que cartas se jugaron en la vuelta y asigno jugadorturno
		if (Object.keys(mano.vueltas[mano.vueltanum].cartaj1).length > 0 && Object.keys(mano.vueltas[mano.vueltanum].cartaj2).length === 0){
			mano.jugadorturno = 2;
		} else if (Object.keys(mano.vueltas[mano.vueltanum].cartaj1).length === 0 && Object.keys(mano.vueltas[mano.vueltanum].cartaj2).length > 0){
			mano.jugadorturno = 1;
		} else if (Object.keys(mano.vueltas[mano.vueltanum].cartaj1).length > 0 && Object.keys(mano.vueltas[mano.vueltanum].cartaj2).length > 0){
			// hay dos cartas jugadas en la mesa veo quien fue el ganador de la vuelta
			if (mano.vueltas[mano.vueltanum].cartaj1.valor > mano.vueltas[mano.vueltanum].cartaj2.valor){
				mano.vueltas[mano.vueltanum].ganador = 2;
				mano.jugadorturno = 2;
			} else if (mano.vueltas[mano.vueltanum].cartaj1.valor < mano.vueltas[mano.vueltanum].cartaj2.valor){
				mano.vueltas[mano.vueltanum].ganador = 1;
				mano.jugadorturno = 1;
			} else {
				mano.jugadorturno = mano.jugadorturno === 1 ? 2 : 1;
			}
			// Chequeo en que vuelta estamos o si algun jugador ya gano para cerrar la mano
			switch (mano.vueltanum) {
				case 0:
					// es la 1ra vuela pasamos a la vuelta siguiente
					mano.vueltanum ++;
					break;
				case 1:
					/*
					en la 2da vuelta hay un ganador: 
					- si el ganador de la 2da es igual al de la 1ra -> Gana el ganador de la 2da
					- o si en la 1ra hubo empate -> Gana el ganador de la 2da
					- o si en la segunda hubo empate -> Gana el ganador de la 1ra
					*/
					if (mano.vueltas[0].ganador === mano.vueltas[1].ganador){
						mano.truco.ganador = mano.vueltas[1].ganador;
					} else if (mano.vueltas[0].ganador === 0 && mano.vueltas[1].ganador !== 0){
						mano.truco.ganador = mano.vueltas[1].ganador;
					} else if (mano.vueltas[1].ganador === 0 && mano.vueltas[0].ganador !== 0){
						mano.truco.ganador = mano.vueltas[0].ganador;
					} else {
						mano.vueltanum ++;
					}
					break;
				case 2:
					/*
					el ganador de la 3ra vuelta es el ganador, en caso de empate en la 3ra gana el ganador de la 1ra
					*/
					if (mano.vueltas[2].ganador === 0){
						mano.truco.ganador = mano.vueltas[0].ganador;
					} else {
						mano.truco.ganador = mano.vueltas[2].ganador;
					}
				}
		}
		console.log(mano.truco);
		if (mano.truco.ganador===0){
			juego.setAttribute('vueltanum', mano.vueltanum);
			juego.setAttribute('jugadorturno', mano.jugadorturno);
			console.log(mano.vueltanum,mano.jugadorturno);
			// verifico es el turno de J2
			if(mano.jugadorturno === 2) {
				console.log("turno J2")
				// verifico si es la primer mano
				if  (mano.vueltanum === 0) {
					console.log("Primera Mano")
					// llamo a la funcion cantarenvido
					this.cantarenvido();
				} else {
					console.log("Otra mano")
					// llamo a la funcion cantartruco
					this.cantartruco();
				}
			}
		} else {
			this.cerrarmano();
		}
	}
	this.cerrarmano = () => {
		const chico = this.chicos[this.chicoencurso];
		const mano = chico.mano;
		console.log(mano);
		console.log("gano el truco "+ this.jugadores[mano.truco.ganador-1].jugadornombre);
		console.log("gano " + mano.truco.puntos + " puntos");
		chico["puntos"+mano.truco.ganador] += mano.truco.puntos;
		console.log("Puntos "+this.jugadores[0].jugadornombre+": "+ chico.puntos1);
		console.log("Puntos "+this.jugadores[1].jugadornombre+": "+ chico.puntos2);
		this.iniciarmano();
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
	this.jugadorturno = objeto.jugadormano;
	this.vueltanum = 0;
	this.vueltas = [
		{
			cartaj1: {},
			cartaj2: {},
			ganador: 0
		},
		{
			cartaj1: {},
			cartaj2: {},
			ganador: 0
		},
		{
			cartaj1: {},
			cartaj2: {},
			ganador: 0
		}
	];
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
const cargarnuevopartido = (datospartido) => { 
	const nuevopartido = new  Partido ({
		cantchicos : datospartido.chicos,
		puntostotal : datospartido.puntostotal,
		flor : datospartido.flor,
		jugadores: [
			{jugadornombre : datospartido.jugadornombre},
			{jugadornombre : 'JSAI'}
		],
		jugadormano: datospartido.jugadormano ? 2 : 1,
		chicos : [
			{
				jugadormano: datospartido.jugadormano ? 2 : 1,
				puntos1: 0,
				puntos2: 0,
				ganador: 0
			}
		]
	});
	return nuevopartido;
}

// asigno los elementos html a las variables
// espacios
const body = document.querySelector('body');
const inicio = document.querySelector('.inicio');
const juego = document.querySelector('.juego');
const mesa = document.querySelector('.mesa');
// elementos del inicio
const cambiarjugador = document.querySelector('#cambiarjugador');
const formdatospartido = document.querySelector('#datospartido');
const inputjugadornombre = document.querySelector('#jugadornombre');
const inputjugadormail = document.querySelector('#jugadormail');
const inputpuntostotal = document.querySelector('[name="puntostotal"]:checked');
const inputchicos = document.querySelector('[name="chicos"]:checked'); 
const inputflor = document.querySelector('#flor');
const inputjugadormano = document.querySelector('#jugadormano');
// elementos de la mesa
// cartas en la mesa
// jugador 1
const cartasmesaJ1 = [document.querySelector('#me-j1-c1'), document.querySelector('#me-j1-c2'), document.querySelector('#me-j1-c3')];
// jugador 2
const cartasmesaJ2 = [document.querySelector('#me-j2-c1'), document.querySelector('#me-j2-c2'), document.querySelector('#me-j2-c3')];
// cartas en la mano
// jugador 1
const cartasmanoJ1 = [document.querySelector('#ma-j1-c1'), document.querySelector('#ma-j1-c2'), document.querySelector('#ma-j1-c3')];
// jugador 2
const cartasmanoJ2 = [document.querySelector('#ma-j2-c1'), document.querySelector('#ma-j2-c2'), document.querySelector('#ma-j2-c3')];
// botones de accion
const botonenvido = document.querySelector('#envido');
const botonrealenvido = document.querySelector('#realenvido');
const botonfaltaenvido = document.querySelector('#faltaenvido');
const botontruco = document.querySelector('#truco');
const botonretruco = document.querySelector('#retruco');
const botonvale4 = document.querySelector('#vale4');
const botonrquiero = document.querySelector('#quiero');
const botonnoquiero = document.querySelector('#noquiero');
const botonguardar = document.querySelector('#guardar');
// modales de canto
const cantoenvido = new bootstrap.Modal('#cantoenvido');
const cantotruco = new bootstrap.Modal('#cantotruco');


// Busco los datos guardados en localStorage y los guardo. Si no hay datos genero el objeto
const datosguardados = localStorage.getItem('datos') === null ? { jugadores: [], jugadoractivo : false} : JSON.parse(localStorage.getItem('datos'));
if (datosguardados.jugadoractivo === false) {
	// Agrego una class al body para marcar que NO HAY datos
	body.className = "sindatos";
} else {
	// Agrego una class al body para marcar que HAY datos y los copleto
	body.className = "jugadoractivo";
	const htmlnombre = document.querySelectorAll('span.jugadornombre');
	[...htmlnombre].forEach((nombre) => {
		nombre.innerHTML = datosguardados.jugadores[datosguardados.jugadoractivo].jugadornombre;
	});
	inputjugadornombre.value = datosguardados.jugadores[datosguardados.jugadoractivo].jugadornombre;
	inputjugadormail.value = datosguardados.jugadores[datosguardados.jugadoractivo].jugadormail;
}
// Asigno el evento para cambiar de jugador
cambiarjugador.onclick = (e) => {
	// borro el formulario
	formdatospartido.reset();
	// borro el jugador activo
	datosguardados.jugadoractivo = false;
	// cambio el class del body a "sindatos"
	body.classList.add("sindatos");
	body.classList.remove("jugadoractivo");
}


// Capturo los datos del form e inicio el partido
formdatospartido.onsubmit = (e) => {
	e.preventDefault();
	const datospartido = {
		jugadornombre: inputjugadornombre.value,
		jugadormail: inputjugadormail.value,
		puntostotal: inputpuntostotal.value,
		chicos : inputchicos.value,
		flor: inputflor.checked,
		jugadormano: inputjugadormano.checked
	};
	// si es un jugador nuevo guardo los datos en localStorage
	if (datosguardados.jugadoractivo === false) {
		datosguardados.jugadores.push ( 
			new Jugador (
				{
					jugadornombre: inputjugadornombre.value,
					jugadormail: inputjugadormail.value
				}
			)
		);
		datosguardados.jugadoractivo = datosguardados.jugadores.length-1;
		localStorage.setItem ("datos", JSON.stringify(datosguardados));
		// cambio el class del body a "jugadoractivo"
		body.classList.remove("sindatos");
		body.classList.add("jugadoractivo");
	}
	console.log(datosguardados);
	// creamos un nuevo partido
	const partidoencurso = cargarnuevopartido(datospartido);
	// agrego el class "jugando" al body para mostrar la mesa
	body.classList.add("jugando");
	console.log(partidoencurso);
	// creamos un nuevo chico
	const chicoencurso = partidoencurso.iniciarnuevochico();
	// creamos una nueva mano
	const manoencurso = partidoencurso.iniciarmano();
	/*
	// repartimos las cartas
	let cont = 0;
	for (let carta of manoencurso.cartas.j1) {
		let imagencarta = document.createElement('img');
		imagencarta.setAttribute('src',`./jpg/cartas/${datosguardados.jugadores[datosguardados.jugadoractivo].preferencias.cartas}/${carta.palo}${carta.numero}.jpg`)
		imagencarta.setAttribute("alt", `${carta.numero} de ${carta.palo}`);
		imagencarta.setAttribute("index", cont);
		cartasmanoJ1[cont].appendChild(imagencarta);
		cont ++;
	}
	console.log(manoencurso);
	juego.classList.add("jugando");
	// verifico en que momento del partido nos encontramosy actualizo el dom
	partidoencurso.actualizarestado();
	// evento para jugar las cartas a la mesa
	cartasmanoJ1.forEach( (carta,i) =>{
		carta.onclick = (e) => {
			const mano = chicoencurso.mano;
			console.log(e.target);
			// muevo la imagen de la carta a la mesa
			cartasmesaJ1[manoencurso.vueltanum].appendChild(e.target);
			// copio el valor de la carta a las cartas jugadas de la mano
			mano.vueltas[mano.vueltanum].cartaj1 = mano.cartas.j1[parseInt(e.target.getAttribute('index'))];
			// borro la carta del las cartas en la mano
			mano.cartas.j1[parseInt(e.target.getAttribute('index'))] = {};
			// llamo a la funcion para actualizar el estado del juego
			partidoencurso.actualizarestado();
		}
	});
	*/
	/*
	const envidomanoj1 = calcularenvido(chicoencurso.mano.cartas.j1);
	const envidomanoj2 = calcularenvido(chicoencurso.mano.cartas.j2);
	let respuestasOK = ['e','r','f','t','1','2','3'];
	let accion;
	let vueltanum = 1;
	for (let vuelta of chicoencurso.mano.vueltas) {
		let mensaje =`Tus cartas son:
`;
		let mensaje2 = `Tus posibles acciones son:
`;
		let indice = 1;
		for (let carta of chicoencurso.mano.cartas.j1) {
			mensaje += `${carta.numero} de ${carta.palo}
`;
			mensaje2 += `${indice}: Jugar el ${carta.numero} de ${carta.palo}
`;
			indice +=1
		}
		mensaje += `
Tenés ${envidomanoj1.envido} para el envido.

`;
		if (vueltanum===1){
			mensaje2 += `E: Cantar envido / R: Cantar real envido /F: Cantar Falta envido
`
		}
		mensaje2 += `T: Cantar truco

Ingresá una opción`;
		do {
			accion=prompt(mensaje+mensaje2).toLowerCase();
		} while (!respuestasOK.includes(accion));
		console.log(`Mis cartas son:
		${chicoencurso.mano.cartas.j2[0].numero} de ${chicoencurso.mano.cartas.j2[0].palo}
		${chicoencurso.mano.cartas.j2[1].numero} de ${chicoencurso.mano.cartas.j2[1].palo}
		${chicoencurso.mano.cartas.j2[2].numero} de ${chicoencurso.mano.cartas.j2[2].palo}
		Tengo ${envidomanoj2.envido} para el envido.
		`);
		switch (accion){
			case "1":
			case "2":
			case "3":
				console.log(`Jugaste el ${chicoencurso.mano.cartas.j1[parseInt(accion)-1].numero} de ${chicoencurso.mano.cartas.j1[parseInt(accion)-1].palo}`);
				chicoencurso.mano.vueltas[0].cartaj1 = chicoencurso.mano.cartas.j1.splice([parseInt(accion)-1],1);
				partidoencurso.cantarenvido(chicoencurso);
				partidoencurso.jugarcarta(chicoencurso);
				break;
			case "e":
			case "r":
			case "f":
				partidoencurso.quererenvido(chicoencurso);
				partidoencurso.jugarcarta(chicoencurso);
			case "t":
				partidoencurso.cantarenvido(chicoencurso);
				partidoencurso.querertruco(chicoencurso);
				partidoencurso.jugarcarta(chicoencurso);
		}
		vueltanum += 1;
	}
	*/
	//} while (chicoencurso.puntos1>partidoencurso.puntostotal && chicoencurso.puntos2>partidoencurso.puntostotal && 1 === 10);
	//} while (partidoencurso.chicos.length < partidoencurso.cantchicos && 1 === 0);
	


};


/*
let partidos = [];
partidos.push(cargarnuevopartido());
let partidoencurso = partidos[partidos.length-1];
let chicoencurso;
let envidomanoj1;
let envidomanoj2;
do {
	partidoencurso.iniciarnuevochico();
   do{
		chicoencurso = partidoencurso.chicos[partidoencurso.chicoencurso];
		partidoencurso.iniciarmano();
		envidomanoj1 = calcularenvido(chicoencurso.mano.cartas.j1);
		envidomanoj2 = calcularenvido(chicoencurso.mano.cartas.j2);
		let respuestasOK = ['e','r','f','t','1','2','3'];
		let accion;
		let vueltanum = 1;
		for (let vuelta of chicoencurso.mano.vueltas) {
			let mensaje =`Tus cartas son:
`;
			let mensaje2 = `Tus posibles acciones son:
`;
			let indice = 1;
			for (let carta of chicoencurso.mano.cartas.j1) {
				mensaje += `${carta.numero} de ${carta.palo}
`;
				mensaje2 += `${indice}: Jugar el ${carta.numero} de ${carta.palo}
`;
				indice +=1
			}
			mensaje += `
Tenés ${envidomanoj1.envido} para el envido.

`;
			if (vueltanum===1){
				mensaje2 += `E: Cantar envido / R: Cantar real envido /F: Cantar Falta envido
`
			}
			mensaje2 += `T: Cantar truco

Ingresá una opción`;
			do {
				accion=prompt(mensaje+mensaje2).toLowerCase();
			} while (!respuestasOK.includes(accion));
			console.log(`Mis cartas son:
			${chicoencurso.mano.cartas.j2[0].numero} de ${chicoencurso.mano.cartas.j2[0].palo}
			${chicoencurso.mano.cartas.j2[1].numero} de ${chicoencurso.mano.cartas.j2[1].palo}
			${chicoencurso.mano.cartas.j2[2].numero} de ${chicoencurso.mano.cartas.j2[2].palo}
			Tengo ${envidomanoj2.envido} para el envido.
			`);
			switch (accion){
				case "1":
				case "2":
				case "3":
					console.log(`Jugaste el ${chicoencurso.mano.cartas.j1[parseInt(accion)-1].numero} de ${chicoencurso.mano.cartas.j1[parseInt(accion)-1].palo}`);
					chicoencurso.mano.vueltas[0].cartaj1 = chicoencurso.mano.cartas.j1.splice([parseInt(accion)-1],1);
					partidoencurso.cantarenvido(chicoencurso);
					partidoencurso.jugarcarta(chicoencurso);
					break;
				case "e":
				case "r":
				case "f":
					partidoencurso.quererenvido(chicoencurso);
					partidoencurso.jugarcarta(chicoencurso);
				case "t":
					partidoencurso.cantarenvido(chicoencurso);
					partidoencurso.querertruco(chicoencurso);
					partidoencurso.jugarcarta(chicoencurso);
			}
			vueltanum += 1;
		}
   } while (chicoencurso.puntos1>partidoencurso.puntostotal && chicoencurso.puntos2>partidoencurso.puntostotal && 1 === 10);
} while (partidoencurso.chicos.length < partidoencurso.cantchicos && 1 === 0);
console.log(partidos);
*/
