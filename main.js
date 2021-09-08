import criarMalha from './src/criarMalha.js'
import criarCampo from './src/criarCampo.js'
import desenharGrade from './src/desenharGrade.js'
import desenharVetores from './src/desenharVetores.js'
import criarParticulas from './src/criarParticulas.js'
import desenharParticulas from './src/desenharParticulas.js'

let canvas = document.querySelector( 'canvas' )
let c = canvas.getContext( '2d' )
let w = ( canvas.width = window.innerWidth )
let h = ( canvas.height = window.innerHeight )
let p = 1

/* Calcular */
// invocar a construção da malha
let coordenadas = criarMalha( w, h, p )  // retorna o objeto { tela, octave, malha }
// invocar a construção do campo vetorial
let campo = criarCampo( coordenadas.malha ) // retorna os dados do vetor { angulo, comprimento, dx, dy, dz }


// criar partícula
let particulas = criarParticulas( c, coordenadas.malha, campo, coordenadas.tela, 1 ) // retorna o objeto particulas[i...]
console.log(particulas)
function desenharFundo() {
    c.fillStyle = 'rgba( 0, 0, 0, .1)'
    c.fillRect(0, 0, w, h)
}

function desenhar() {
    requestAnimationFrame( desenhar )
   

   
    desenharFundo() 
   
    // desenhar partículas
    desenharParticulas( particulas ) // representa a movimentação das partículas

    // desenhar Vetores
    let vetores = desenharVetores( c, coordenadas.malha, campo ) // representa as direções dos vetores do campo
    // desenhar Grade
    let grade = desenharGrade( c, coordenadas ) // representa as coordenadas com uma grade, pontos maiores são octaves


}

desenhar()