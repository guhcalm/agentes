function Particula( c, malha, campo, tela, x, y ) {
    let pos = { x, y }
    let vector = {}
    let vel = {}
    let raio = 20
    return{
        move: () => {
            vector = { 
                x: Math.round( pos.x / malha.intervalo.x ), 
                y: Math.round( pos.y / malha.intervalo.y ) 
            }

            vel = { 
                x: .2 * campo[vector.x][vector.y][0].dx, 
                y: .2 * campo[vector.x][vector.y][0].dy 
            }

            pos.x += vel.x
            pos.y += vel.y

            if ( pos.x <= 0 || pos.x >= tela.x ) {
                pos.x = Math.random() * tela.x
            }
            if ( pos.y <= 0 || pos.y >= tela.y ) {
                pos.y = Math.random() * tela.y
            }
            
            c.beginPath()
            c.strokeStyle = `rgba( 255, 255, 255, 1)`
            c.moveTo(pos.x, pos.y)
            c.lineTo(
                pos.x + campo[vector.x][vector.y][0].dx , 
                pos.y + campo[vector.x][vector.y][0].dy 
            )
            c.lineWidth = 3
            c.stroke()
            c.beginPath()
            c.fillStyle = `white`
            c.arc( pos.x, pos.y, 3, 0, Math.PI * 2 )
            c.fill()          
        },
        desenhar: () => {
            c.beginPath()
            c.strokeStyle = `black`
            c.fillStyle =  `rgba( 255, 0, 100, 1)`
            c.arc( pos.x, pos.y, raio, 0, Math.PI * 2, false )
            c.lineWidth = 5
            c.fill()
        }
    }
}

function criarParticulas( c, malha, campo, tela, quantidade ) {
    let particulas = []
    for ( let i = 0; i < quantidade; i++ ) {
        particulas[i] = Particula( c, malha, campo, tela, Math.random() * tela.x, Math.random() * tela.y )
    }
    return particulas
}

export default criarParticulas