function desenharGrade( c, coordenadas ) {

    // grade da malha geral
    for ( let x = 0; x <= coordenadas.tela.x; x += coordenadas.malha.intervalo.x ) {
        for ( let y = 0; y <= coordenadas.tela.y; y += coordenadas.malha.intervalo.y ) {
            c.beginPath()
            c.fillStyle = `gray`
            c.arc( x, y, 2, 0, Math.PI * 2 )
            c.fill()
            c.beginPath()
        }
    }

    // grade das octaves
    for ( let x = 0; x <= coordenadas.tela.x; x += coordenadas.octave.intervalo.x ) {
        for ( let y = 0; y <= coordenadas.tela.y; y += coordenadas.octave.intervalo.y ) {
            c.beginPath()
            c.fillStyle = `black`
            c.arc( x, y, 16, 0, Math.PI * 2 )
            c.fill()
            c.beginPath()
            c.strokeStyle = `black`
            c.lineWidth = 1
            c.arc( x, y, 10, 0, Math.PI * 2 )
            c.stroke()
        }
    }
}

export default desenharGrade