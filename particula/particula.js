function Particula( x, y, c ) {
    let pos = { x, y }
    let vector = {}
    let vel = {}
    let raio = 2
    return{
        move: () => {
            vector = { x: Math.round( pos.x / malhaIntervalo.x ), y: Math.round( pos.y / malhaIntervalo.y ) }
            vel = { x: campo[vector.x][vector.y].dx, y: campo[vector.x][vector.y].dy }
            pos.x += vel.x
            pos.y += vel.y
            if ( pos.x <= 0 || pos.x >= tela.largura ) {
                pos.x = Math.random() * tela.largura
            }
            if ( pos.y <= 0 || pos.y >= tela.altura ) {
                pos.y = Math.random() * tela.altura
            }
        },
        desenhar: () => {
            c.beginPath()
            c.fillStyle = 'red'
            c.arc( pos.x, pos.y, raio, 0, Math.PI * 2, false )
            c.fill()
        }
    }
}

export default Particula