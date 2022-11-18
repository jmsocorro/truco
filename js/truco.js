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
// CONSTRUCTOR DE MAZO DE CARTAS PARA JUGAR
function Mazo (){
	this.cartas = [
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
	];
} 
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
	this.mazo = new Mazo();
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
		console.log('iniciarmano');
		// BORRO TODOS LOS ELEMENTOS DE LA MANO ANTERIOR
		const imgcartas = document.querySelectorAll('.carta img');
		[...imgcartas].forEach((imgcarta) => {
			imgcarta.remove();
		});
		// VUELVO A MOSTRAR LAS CARTAS DE J2
		const cartasJ2 = document.querySelectorAll('.manojugador2 .carta.d-none');
		[...cartasJ2].forEach((cartaJ2) => {
			cartaJ2.classList.remove('d-none');
		});
		// REPARTO LAS CARTAS AL AZAR
		let cartas = {
			j1 : [],
			j2 : []
		};
		this.mazo = new Mazo();
	//--console.log(this.mazo.cartas);
		for (let c = 0; c < 3; c++) {
			if (this.chicos[this.chicoencurso].jugadormano===1){
				cartas.j1.push(this.mazo.cartas.splice(Math.floor(Math.random() * this.mazo.cartas.length),1)[0]);
				cartas.j2.push(this.mazo.cartas.splice(Math.floor(Math.random() * this.mazo.cartas.length),1)[0]);
			} else {
				cartas.j2.push(this.mazo.cartas.splice(Math.floor(Math.random() * this.mazo.cartas.length),1)[0]);
				cartas.j1.push(this.mazo.cartas.splice(Math.floor(Math.random() * this.mazo.cartas.length),1)[0]);
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
	//--console.log(manoencurso);
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
				console.log(e.target.children.length);
				// verifico si pincho sobre la imagen con el atrubuto index
				let imagencarta = false;
				if(e.target.getAttribute('index') !== null){
					imagencarta = e.target;
				} else if(e.target.children.length === 1) {
					imagencarta = e.target.children[0];
				}
				// si no es el turno o encontramos la imagen no efectuamos la accion
				if (juego.getAttribute("jugadorturno")==="1" && imagencarta !== false){
					// muevo la imagen de la carta a la mesa
					cartasmesaJ1[manoencurso.vueltanum].appendChild(imagencarta);
					// copio el valor de la carta a las cartas jugadas de la mano
					manoencurso.vueltas[manoencurso.vueltanum].cartaj1 = manoencurso.cartas.j1[parseInt(imagencarta.getAttribute('index'))];
					// borro la carta del las cartas en la mano
					manoencurso.cartas.j1[parseInt(imagencarta.getAttribute('index'))] = {};
					// llamo a la funcion para actualizar el estado del juego
					partidoencurso.actualizarestado();
				}
			}
		});
		//return this.chicos[this.chicoencurso].mano;
	}
	// METODOS PARA QUE JUEGUE J2
	// EVALUAR SI CANTAR EL ENVIDO
	this.cantarenvido = () => {
		console.log('cantarenvido');
		const mano = this.chicos[this.chicoencurso].mano;
		// calculo el envido y guado los datos
		const mienvido = mano.envido.envidoJ2;
		if (mienvido.flor && this.flor) {
			document.querySelector('#cantoenvido .canto').innerHTML = '<h1>¡Flor!<h1>';
			document.querySelector('#cantoenvido').className = "modal flor"
			cantoenvido.show();
		} else if (mienvido.envido>22) {
			// canto envido
			// sumo 2 puntos al canto
			mano.envido.canto.push(2);
			// sumo un punto a los puntos en juego
			mano.envido.puntos=1;
			// doy el canto al otro jugador
			mano.envido.cantojugador = 1;
			juego.setAttribute('envidocanto', mano.envido.canto.reduce((total,num) => total+num ,0));
			juego.setAttribute('envidocantojugador', mano.envido.cantojugador);
			document.querySelector('#cantoenvido .canto').innerHTML = '<h3>Envido<h3>';
			document.querySelector('#cantoenvido').className = "modal envido";
			document.querySelector('#cantoenvido .puntos').innerHTML = mano.envido.canto.reduce((total,num) => total+num ,0);
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
		console.log('quererenvido');
		const mano = this.chicos[this.chicoencurso].mano;
		// obtengo el envido y guado los datos
		const mienvido = mano.envido.envidoJ2;
		// guardo los puntos en juego antes de querer o revirar
		const envidopuntos = mano.envido.canto.reduce((total,num) => total+num ,0);
		//const ultimocanto = envido.canto[envido.canto.length-1];
		/*
		*/
		// veo si jugamos con flor, si tengo flor y si no soy mano
		if (mienvido.flor && this.flor && mano.vueltanum === 0 && mano.jugadormano === 1) {
			document.querySelector('#cantoenvido .canto').innerHTML = '<h1>¡Flor!<h1>';
			document.querySelector('#cantoenvido').className = "modal flor"
			cantoenvido.show();
		} else if (mienvido.envido>22 && mienvido.envido<27) { // si mi envido es mayor a 22 quiero
		//--console.log("quiero el envido");
			mano.envido.querido = 1;
			mano.envido.puntos = envidopuntos;
			document.querySelector('#envidoJ1').setAttribute('value',mano.envido.envidoJ1.envido);
			juego.setAttribute("envidoquerido","1");
			document.querySelector('#cantoenvido .canto').innerHTML =`<h3>Quiero</h3>`;
			if(mano.jugadormano === 2){
				document.querySelector('#cantoenvido .envidoJ2').innerHTML =`<h3>Tengo ${mano.envido.envidoJ2.envido}</h3>`;
			}
			cantoenvido.show();
		} else if (mienvido.envido>26 && mienvido.envido<30) {
		//--console.log("reviro el envido");
			// reviro el envido
			// guardo los puntos en juego hasta el momento
			mano.envido.puntos = envidopuntos;
			// sumo 2 puntos al canto
			mano.envido.canto.push(2);
			// doy el canto al otro jugador
			mano.envido.cantojugador = 1;
			juego.setAttribute('envidocanto', mano.envido.puntos);
			juego.setAttribute('envidocantojugador', mano.envido.cantojugador);
			document.querySelector('#cantoenvido .canto').innerHTML = '<h3>Envido<h3>';
			document.querySelector('#cantoenvido .puntos').innerHTML = mano.envido.canto.reduce((total,num) => total+num ,0);
			cantoenvido.show();
		} else if (mienvido.envido>29) {
		//--console.log("reviro real envido");
			// reviro real envido
			// guardo los puntos en juego hasta el momento
			mano.envido.puntos = envidopuntos;
			// sumo 3 puntos al canto
			mano.envido.canto.push(3);
			// doy el canto al otro jugador
			mano.envido.cantojugador = 1;
			juego.setAttribute('envidocanto', mano.envido.puntos);
			juego.setAttribute('envidocantojugador', mano.envido.cantojugador);
			document.querySelector('#cantoenvido .canto').innerHTML = '<h3>Real Envido<h3>';
			document.querySelector('#cantoenvido .puntos').innerHTML = mano.envido.canto.reduce((total,num) => total+num ,0);
			cantoenvido.show();
		} else {
		//--console.log("No quiero");
			document.querySelector('#cantoenvido .canto').innerHTML =`<h3>No quiero</h3>`;
			document.querySelector('#cantoenvido .envidoJ2').innerHTML = "";
			this.cerrarenvido('noquiero',false);
			cantoenvido.show();
		};
	}
	// EVALUAR SI QUERER EL TRUCO
	this.querertruco = () => {
		
	}
	// EVALUAR QUE CARTA JUGAR
	this.jugarcarta = () => {
		console.log('jugarcarta');
		const mano = this.chicos[this.chicoencurso].mano;
		console.table(mano.cartas.j2);
		// creo la variable jugarcarta con un valor fuera de rango
		let jugarcarta = -1;
		// verifico si hay una carta jugada en la vuelta
		if(mano.vueltas[mano.vueltanum].cartaj1?.valor === undefined){
		//if(Object.keys(mano.vueltas[mano.vueltanum].cartaj1).length === 0){
			// juego la carta mas alta que tengo en la mano
			jugarcarta = mano.cartas.j2.length-1;
		} else {
			// guardo el valor de la carta jugada
			let valorcartajugada = mano.vueltas[mano.vueltanum].cartaj1.valor;
			// busco en las cartas la carta mas baja que le gane a la que esta en la mesa.  Sino juego una que le empate y sino la carta mas baja de todas.
			mano.cartas.j2.map((carta, i)=>{
			//--console.log(valorcartajugada,carta.valor,mano.cartas.j2[jugarcarta]?.valor);
				// veo si no hay ninguna carta que le gane a la carta jugada
				if (jugarcarta === -1){
					// no hay carta para ganar o empatar
					jugarcarta = valorcartajugada >=  mano.cartas.j2[i].valor ? i : jugarcarta;
				} else if (valorcartajugada === mano.cartas.j2[jugarcarta].valor &&  mano.cartas.j2[i].valor < mano.cartas.j2[jugarcarta].valor){
					// hay carta que empata y la que reviso gana
					jugarcarta = i;
				} else if (mano.cartas.j2[i].valor > mano.cartas.j2[jugarcarta].valor){
					// hay una carta que gana pero la que reviso tambien gana y es mas baja
					jugarcarta = i;
				}
			});
		};
		// si jugarcarta esta fuera de rango juego la carta mas baja
		jugarcarta = jugarcarta === -1 ? 0 : jugarcarta ;
	//--console.log(jugarcarta);
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
	// METODOS PARA QUE JUEGUE J1
	this.cantarenvidoJ1 = (accion) => {
		const mano = this.chicos[this.chicoencurso].mano;
		// tiempo para "pensar"
		let pausa = Math.floor(Math.random() * 1500) + 500;
		switch (accion) {
			case "quiero":
				mano.envido.querido = 1;
				mano.envido.puntos = mano.envido.canto.reduce((total,num) => total+num ,0);
				document.querySelector('#envidoJ1').setAttribute('value',mano.envido.envidoJ1.envido);
				juego.setAttribute("envidoquerido","1");
			//--console.log(mano);
				document.querySelector('#cantoenvido .puntos').innerHTML = mano.envido.canto.reduce((total,num) => total+num ,0);
				if(mano.jugadormano===2){
					document.querySelector('#cantoenvido .envidoJ2').innerHTML =`<h3>Tengo ${mano.envido.envidoJ2.envido}</h3>`;
				}
				break;
			case "noquiero":
			case "sonbuenas":
					this.cerrarenvido(accion,false);
				break;
			case "envido":
				// verifico si no se canto envido
				if (mano.envido.cantojugador===0){
					// sumo 2 puntos al canto
					mano.envido.canto.push(2);
					// sumo un punto a los puntos en juego
					mano.envido.puntos=1;
					// doy el canto al otro jugador
					mano.envido.cantojugador = 2;
				} else {
					// sumo los puntos arrastrados a los puntos en juego
					mano.envido.puntos=mano.envido.canto.reduce((total,num) => total+num ,0);
					// sumo 2 puntos al canto
					mano.envido.canto.push(2);
					// doy el canto al otro jugador
					mano.envido.cantojugador = 2;
				}
				juego.setAttribute('envidocanto', mano.envido.canto.reduce((total,num) => total+num ,0));
				juego.setAttribute('envidocantojugador', mano.envido.cantojugador);
				document.querySelector('#cantoenvido .puntos').innerHTML = mano.envido.canto.reduce((total,num) => total+num ,0);
				setTimeout(() => this.quererenvido(), pausa);
				break;
			case "realenvido":
				// verifico si no se canto envido
				if (mano.envido.cantojugador===0){
					// sumo 3 puntos al canto
					mano.envido.canto.push(3);
					// sumo un punto a los puntos en juego
					mano.envido.puntos=1;
					// doy el canto al otro jugador
					mano.envido.cantojugador = 2;
				} else {
					// arrastro los puntos sumados a los puntos en juego
					mano.envido.puntos=mano.envido.canto.reduce((total,num) => total+num ,0);
					// sumo 3 puntos al canto
					mano.envido.canto.push(3);
					// doy el canto al otro jugador
					mano.envido.cantojugador = 2;
				}
				juego.setAttribute('envidocanto', mano.envido.canto.reduce((total,num) => total+num ,0));
				juego.setAttribute('envidocantojugador', mano.envido.cantojugador);
				document.querySelector('#cantoenvido .puntos').innerHTML = mano.envido.canto.reduce((total,num) => total+num ,0);
				setTimeout(() => this.quererenvido(), pausa);
				break;
			case "faltaenvido":
				// verifico si no se canto envido
				// veo cuantos puntos le faltan al que va ganando para llegar a 30
				let faltapuntos = this.chicos[this.chicoencurso].puntos1 > this.chicos[this.chicoencurso].puntos2 ? this.puntostotal-this.chicos[this.chicoencurso].puntos1 :this.puntostotal-this.chicos[this.chicoencurso].puntos2;
				console.log(faltapuntos);
				if (mano.envido.cantojugador===0){
					// sumo los puntos que le falta al que va ganando para llegar a 30 al canto
					mano.envido.canto = [faltapuntos];
					// sumo un punto a los puntos en juego
					mano.envido.puntos=1;
					// doy el canto al otro jugador
					mano.envido.cantojugador = 2;
				} else {
					// arrastro los puntos sumados a los puntos en juego
					mano.envido.puntos=mano.envido.canto.reduce((total,num) => total+num ,0);
					// sumo los puntos que le falta al que va ganando para llegar a 30 al canto
					mano.envido.canto = [faltapuntos];
					// doy el canto al otro jugador
					mano.envido.cantojugador = 2;
				}
				juego.setAttribute('envidocanto', mano.envido.canto.reduce((total,num) => total+num ,0));
				juego.setAttribute('envidocantojugador', mano.envido.cantojugador);
				//
				document.querySelector('#cantoenvido .puntos').innerHTML = mano.envido.canto.reduce((total,num) => total+num ,0);
				setTimeout(() => this.quererenvido(), pausa);
				break;
				break;
			case "cantar":
				const envidoJ1 = parseInt(document.querySelector('#envidoJ1').value);
				// Valido la entrada de envidoJ1
				if((envidoJ1 >= 0 && envidoJ1 <= 7) || (envidoJ1 >= 20 && envidoJ1 <= 33)) {
				//--console.log('OK')
					document.querySelector('#cantoenvido .envidoJ1').classList.remove('error');
				} else {
				//--console.log('ERROR')
					document.querySelector('#cantoenvido .envidoJ1').classList.add('error');
				}
				if(mano.jugadormano===1){
					document.querySelector('#cantoenvido .envidoJ2').innerHTML = envidoJ1 >= mano.envido.envidoJ2.envido ? "<h3>Son buenas</h3>" : `<h3>${mano.envido.envidoJ2.envido} son mejores</h3>`;
				}
				this.cerrarenvido(accion,envidoJ1)
				break;
			case "cerrar":
				cantoenvido.hide();
				this.actualizarestado();
				break;
			}
	}
	// EVALUAR SI CANTAR EL TRUCO
	// METODOS PARA QUE JUEGUE J1 TRUCO
	this.cantartrucoJ1 = (accion) => {
		const mano = this.chicos[this.chicoencurso].mano;
		// tiempo para "pensar"
		let pausa = Math.floor(Math.random() * 1500) + 500;
		switch (accion) {
			case "quiero":
				break;
			case "noquiero":
			case "mevoyalmazo":
				break;
			case "truco":
				// sumo 2 puntos al canto
				mano.truco.canto.push(2);
				// doy el canto al otro jugador
				mano.truco.cantojugador = 2;
				juego.setAttribute('trucocanto', mano.truco.canto.reduce((total,num) => total+num ,0));
				juego.setAttribute('trucocantojugador', mano.truco.cantojugador);
				setTimeout(() => this.querertruco(), pausa);
				break;
			case "retruco":
			case "valecuatro":
					// arrastro los puntos sumados a los puntos en juego
				mano.truco.puntos=mano.truco.canto.reduce((total,num) => total+num ,0);
				// sumo 1 punto al canto
				mano.truco.canto.push(1);
				// doy el canto al otro jugador
				mano.truco.cantojugador = 2;
				juego.setAttribute('trucocanto', mano.truco.canto.reduce((total,num) => total+num ,0));
				juego.setAttribute('trucocantojugador', mano.truco.cantojugador);
				setTimeout(() => this.querertruco(), pausa);
				break;
		}
	}
	// ACTUALIZAR EL ESTADO DEL JUEGO
	this.actualizarestado = () => {
		console.log('actualizarestado');
		const mano = this.chicos[this.chicoencurso].mano;
	//--console.log(mano, this.chicoencurso);
		// Veo que cartas se jugaron en la vuelta y asigno jugadorturno
		console.log(mano.vueltas[mano.vueltanum].cartaj1?.valor , mano.vueltas[mano.vueltanum].cartaj2?.valor);
		if (mano.vueltas[mano.vueltanum].cartaj1?.valor !== undefined && mano.vueltas[mano.vueltanum].cartaj2?.valor === undefined){
			mano.jugadorturno = 2;
		} else if (mano.vueltas[mano.vueltanum].cartaj1?.valor === undefined && mano.vueltas[mano.vueltanum].cartaj2?.valor !== undefined){
			mano.jugadorturno = 1;
		} else if (mano.vueltas[mano.vueltanum].cartaj1?.valor !== undefined && mano.vueltas[mano.vueltanum].cartaj2?.valor !== undefined){
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
					- o si empataron en la 1ra y la 2da gana la 3ra vuelta
					*/
					if (mano.vueltas[0].ganador === mano.vueltas[1].ganador && mano.vueltas[0].ganador !== 0){
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
					el ganador de la 3ra vuelta es el ganador, en caso de empate en la 3ra gana el ganador de la 1ra, si empataron las 3 manos gana el jugador mano
					*/
					if (mano.vueltas[2].ganador === 0 && mano.vueltas[0].ganador !== 0){
						mano.truco.ganador = mano.vueltas[0].ganador;
					} else if (mano.vueltas[2].ganador === 0 && mano.vueltas[0].ganador === 0){
						mano.truco.ganador = mano.jugadormano;
					} else {
						mano.truco.ganador = mano.vueltas[2].ganador;
					}
				}
		}
	//--console.log(mano.truco);
		if (mano.truco.ganador===0){
			juego.setAttribute('vueltanum', mano.vueltanum);
			juego.setAttribute('jugadormano', mano.jugadormano);
			juego.setAttribute('jugadorturno', mano.jugadorturno);
			juego.setAttribute('trucocanto', mano.truco.canto.length);
			juego.setAttribute('trucocantojugador', mano.truco.cantojugador);
			juego.setAttribute('trucoquerido', mano.truco.querido);
			juego.setAttribute('trucoganador', mano.truco.ganador);
			juego.setAttribute('envidocanto', mano.envido.canto.length);
			juego.setAttribute('envidocantojugador', mano.envido.cantojugador);
			juego.setAttribute('envidoquerido', mano.envido.querido);
			juego.setAttribute('envidoganador', mano.envido.ganador);
		//--console.log(mano.vueltanum,mano.jugadorturno);
			// verifico es el turno de J2
			if(mano.jugadorturno === 2) {
			//--console.log("turno J2")
				// verifico si es la primer mano y no se canto el envido
				if  (mano.vueltanum === 0 && mano.envido.cantojugador === 0) {
				//--console.log("Primera Mano")
					// llamo a la funcion cantarenvido
					// Agrego un pausa para simular que J2 piensa (entre .5 y 2 seg)
					let pausa = Math.floor(Math.random() * 1500) + 500;
					setTimeout(() => this.cantarenvido(), pausa);
					//this.cantarenvido();
				} else {
				//--console.log("Otra mano")
					// llamo a la funcion cantartruco
					// Agrego un pausa para simular que J2 piensa (entre .5 y 2 seg)
					let pausa = Math.floor(Math.random() * 1500) + 500;
					setTimeout(() => this.cantartruco(), pausa);
					//this.cantartruco();
				}
			}
		} else {
			this.cerrarmano();
		}
		console.log(mano);
	}
	// CERRAR EL ENVIDO
	this.cerrarenvido = (accion,cantoJ1) => {
	console.log('cerrarenvido');
	const mano = this.chicos[this.chicoencurso].mano;
	//--console.log(mano)
		if(accion === "noquiero" || accion === "sonbuenas"){
			mano.envido.ganador = mano.envido.cantojugador === 1 ? 2 : 1;
			cantoenvido.hide();
			this.actualizarestado();
		} else {
			// guando el envido cantado para verificar al cerrar la mano que canto bien
			mano.envido.cantojugador = cantoJ1; 
			// asigno el ganador de acuerdo al que tenga mas envido o en caso de empate el que sea mano
			mano.envido.ganador = (mano.envido.envidoJ2.envido>cantoJ1 || (mano.envido.envidoJ2.enviso === cantoJ1 && mano.jugadormano === 2)) ? 2 : 1;
			juego.setAttribute('envidoganador', mano.envido.ganador);
			if (mano.jugadormano === 2) {
				cantoenvido.hide();
				this.actualizarestado();
			}
		}
	}
	// CERRAR LA MANO
	this.cerrarmano = () => {
		console.log('cerrarmano');
		const chico = this.chicos[this.chicoencurso];
		const mano = chico.mano;
		chico["puntos"+mano.envido.ganador] += mano.envido.puntos;
		chico["puntos"+mano.truco.ganador] += mano.truco.puntos;
		document.querySelector('#cierromano .mensaje').innerHTML = mano.envido.ganador === 0 ? "" : `<p>${this.jugadores[mano.envido.ganador-1].jugadornombre} ganó ${mano.envido.puntos} del envido.</p>`
		document.querySelector('#cierromano .mensaje').innerHTML += `<p>${this.jugadores[mano.truco.ganador-1].jugadornombre} ganó ${mano.truco.puntos} del truco.</p>
<p>Puntos</p>
<p>${this.jugadores[0].jugadornombre}: ${chico.puntos1}</p>
<p>${this.jugadores[1].jugadornombre}: ${chico.puntos2}</p>`;
		document.querySelector('.tanteador .puntos.pj1').innerHTML = chico.puntos1;
		document.querySelector('.tanteador .puntos.pj2').innerHTML = chico.puntos2;
		// borro los textos del modal
		document.querySelector('#cantoenvido .canto').innerHTML = '';
		document.querySelector('#cantoenvido .puntos').innerHTML = '';
		document.querySelector('#cantoenvido .envidoJ2').innerHTML = '';
		// Veo si algun jugador ya gano el chico
		if (chico.puntos1 >= this.puntostotal || chico.puntos2 >= this.puntostotal){
			const ganadorchico = chico.puntos1 >= this.puntostotal ? 1 : 2;
			document.querySelector('#cierromano .mensaje').innerHTML += `<h2>${this.jugadores[ganadorchico-1].jugadornombre} ganó el chico.</h2>`;			
			// asigno el ganador al chico
			chico.ganador = ganadorchico;
			// agrego chico al tanteador del ganador
			document.querySelector('.tanteador .chicos.pj'+ganadorchico).innerHTML += '<div class="puntochico"></div>';
			console.log(document.querySelector('.tanteador .chicos.pj'+ganadorchico));
			// veo cuantos chicos ganados tiene cada jugador
			let chicosganadosJ1 = 0;
			let chicosganadosJ2 = 0;
			this.chicos.map((chico, i)=>{
				if (chico.ganador === 1){
					chicosganadosJ1++
				} else if (chico.ganador === 2){
					chicosganadosJ2++
				}
			});
			// reviso si algun jugador gano mas de la nitad de los chicos y sino iniciamos un nuevo chico
			if(chicosganadosJ1>(this.cantchicos/2)){ // gano el partido el JUGADOR 1
				document.querySelector('#cierromano').className = `modal ganador g${ganadorchico}`;
				document.querySelector('#cierromano .mensaje').innerHTML += `<h2>${this.jugadores[ganadorchico-1].jugadornombre} ganó el partido.</h2>`;			
			} else if (chicosganadosJ2>(this.cantchicos/2)){ // gano el partido el JUGADOR 2
				document.querySelector('#cierromano').className = `modal ganador g${ganadorchico}`;
				document.querySelector('#cierromano .mensaje').innerHTML += `<h2>${this.jugadores[ganadorchico-1].jugadornombre} ganó el partido.</h2>`;			
			} else { // no se jugaron todos
				// creamos un nuevo chico
				this.iniciarnuevochico();
				// creamos una nueva mano
				this.iniciarmano();
				// reseteo el tanteador
				document.querySelector('.tanteador .puntos.pj1').innerHTML = "";
				document.querySelector('.tanteador .puntos.pj2').innerHTML = "";
			} 
		}
		cierromano.show();
		//this.iniciarmano();
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
		querido: 0,
		puntos: 0,
		ganador: 0,
		envidoJ1: calcularenvido(objeto.cartas.j1),
		envidoJ2: calcularenvido(objeto.cartas.j2)
	};
	this.truco = {
		canto: [],
		cantojugador: 0,
		querido: 0,
		puntos: 1,
		ganador: 0
	}
}

// CARGAR LOS DATOS DEL PARTIDO NUEVO
const cargarnuevopartido = (datospartido) => { 
	console.table(datospartido);
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
let cambiarjugador = document.querySelector('#cambiarjugador');
let formdatospartido = document.querySelector('#datospartido');
let inputjugadornombre = document.querySelector('#jugadornombre');
let inputjugadormail = document.querySelector('#jugadormail');
let inputpuntostotal = document.querySelector('[name="puntostotal"]:checked');
let inputchicos = document.querySelector('[name="chicos"]:checked'); 
let inputflor = document.querySelector('#flor');
let inputjugadormano = document.querySelector('#jugadormano');
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
const botoncerrarpartido = document.querySelector('#cerrarpartido');
const botonesrepartir = document.querySelectorAll('button.repartir')
// modales
const cantoenvido = new bootstrap.Modal('#cantoenvido');
const cantotruco = new bootstrap.Modal('#cantotruco');
const cierromano = new bootstrap.Modal('#cierromano');
const botonesenvidoaccion = document.querySelectorAll('#cantoenvido button.botonaccion, .accionesjugador1 .envido button.botonaccion');
const botonestrucoaccion = document.querySelectorAll('#cantotruco button.botonaccion, .accionesjugador1 .truco button.botonaccion');
/*
const modalquieroenvido = document.querySelector("#modalquieroenvido"):
const modalnoquieroenvido = document.querySelector("#modalnoquieroenvido"):
const modalenvido = document.querySelector("#modalenvido"):
const modalrealenvido = document.querySelector("#modalrealenvido"):
const modalfaltaenvido = document.querySelector("#modalfaltaenvido"):
*/

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
// cerramos el partido
botoncerrarpartido.onclick = (e) => {
	body.classList.remove("jugando");
	document.querySelector('#cierromano').className = `modal`;
}


// Capturo los datos del form e inicio el partido
formdatospartido.onsubmit = (e) => {
	e.preventDefault();
	cambiarjugador = document.querySelector('#cambiarjugador');
	formdatospartido = document.querySelector('#datospartido');
	inputjugadornombre = document.querySelector('#jugadornombre');
	inputjugadormail = document.querySelector('#jugadormail');
	inputpuntostotal = document.querySelector('[name="puntostotal"]:checked');
	inputchicos = document.querySelector('[name="chicos"]:checked'); 
	inputflor = document.querySelector('#flor');
	inputjugadormano = document.querySelector('#jugadormano');
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
	//--console.log(datosguardados);
	// creamos un nuevo partido
	const partidoencurso = cargarnuevopartido(datospartido);
	// agrego el class "jugando" al body para mostrar la mesa
	body.classList.add("jugando");
	console.log(partidoencurso);
	// creamos un nuevo chico
	const chicoencurso = partidoencurso.iniciarnuevochico();
	// creamos una nueva mano
	const manoencurso = partidoencurso.iniciarmano();
	// asigno accion de iniciar mano a los botones repartir
	[...botonesrepartir].forEach((botonrepartir) => {
		botonrepartir.onclick = (e) => partidoencurso.iniciarmano();
	});
	// asigno accion de llamar a cantarenvidoJ1 a los botones de acciones del envido
	[...botonesenvidoaccion].forEach((botonenvidoaccion) => {
		botonenvidoaccion.onclick = (e) => partidoencurso.cantarenvidoJ1(botonenvidoaccion.innerText.toLowerCase().replace(/\s+/g, ''));
	});
	// asigno accion de llamar a cantartrucoJ1 a los botones de acciones del truco
	[...botonestrucoaccion].forEach((botontrucooaccion) => {
		botontrucooaccion.onclick = (e) => partidoencurso.cantartrucoJ1(botontrucooaccion.innerText.toLowerCase().replace(/\s+/g, ''));
	});
	// coloco el nombre del jugador en el tanteador
	document.querySelector('.tanteador .puntos.pj1').setAttribute('data-text', `PUNTOS ${partidoencurso.jugadores[0].jugadornombre}`);
	document.querySelector('.tanteador .chicos.pj1').setAttribute('data-text', `CHICOS ${partidoencurso.jugadores[0].jugadornombre}`);
};
