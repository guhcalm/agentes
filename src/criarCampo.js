import noise from './noise/noise.js'

function criarCampo( malha ) {
    let campo = new Array( malha.global.x )
    for ( let x = 0; x <= malha.global.x; x++ ) {
        campo[x] = new Array( malha.global.y )
        for ( let y = 0; y <= malha.global.y; y++ ) {
            campo[x][y] = new Array( malha.global.z )
            for ( let z = 0; z <= malha.global.z; z++ ) {

                // ajustar coordenadas -> 1 : malha.interval
                let ajuste = campoProto.ajustarCoordenadas( x, y, z, malha )

                // coletar dados do velor
                let angulo = campoProto.angulo ( ajuste )
                let comprimento = campoProto.comprimento ( ajuste , malha )
                let dx = campoProto.dx ( comprimento, angulo )
                let dy = campoProto.dy ( comprimento, angulo )
                let dz = campoProto.dz ( comprimento, angulo )
                
                // injetar os dados no campo
                campo[x][y][z] = { 
                    angulo, 
                    comprimento, 
                    dx, 
                    dy, 
                    dz
                }
            
            }
        }
    }
    return campo
}


let campoProto = {
    ajustarCoordenadas: ( x, y, z, malha ) => {
        return {
            x: x / malha.unidades.x, 
            y: y / malha.unidades.y, 
            z: z / malha.unidades.z
        }
    },
    angulo: ( coordenadas ) => {
        return Math.PI * 2 *  noise( coordenadas.x, coordenadas.y, coordenadas.z)
    },
    comprimento: ( coordenadas, malha ) => {
        return ( (malha.intervalo.y) / 2 * noise( coordenadas.x, coordenadas.y, coordenadas.z ) )
    },
    dx: ( comprimento, angulo ) => { return ( comprimento * Math.cos( angulo ) ) },
    dy: ( comprimento, angulo ) => { return ( comprimento * Math.sin( angulo ) ) },
    dz: ( comprimento, angulo ) => { return ( comprimento * Math.sin( angulo ) ) }
}

export default criarCampo
