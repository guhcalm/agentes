function desenharVetores( c, malha, campo ) {
    for ( let x = 0; x <= malha.global.x; x ++ ) {
        for ( let y = 0; y <= malha.global.y; y ++ ) {
            for ( let z = 0; z <= malha.global.z; z++ ) {
                c.beginPath()
                c.moveTo(
                    x * malha.intervalo.x,
                    y * malha.intervalo.y
                )
                c.lineTo(
                    x * malha.intervalo.x + campo[x][y][0].dx, 
                    y * malha.intervalo.y + campo[x][y][0].dy
                )
                c.lineWidth = 1
                c.strokeStyle = `gray`
                c.stroke()
                }
        }
    }
}

export default desenharVetores