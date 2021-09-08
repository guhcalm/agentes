function criarMalha( w, h, p ) {
    let tela = { x: w, y: h, z: p }
    let octave = malhaProto.coletarMalha( 2, 2, 1, tela )
    let malha = malhaProto.coletarMalha( 10, 10, 1, octave.intervalo )
    malha.global = {
        x: octave.unidades.x * malha.unidades.x,
        y: octave.unidades.y * malha.unidades.y,
        z: octave.unidades.z * malha.unidades.z
    }
    return { tela, octave, malha }
}
let malhaProto = {
    coletarMalha: ( x, y, z, obj ) => {
        return {
            unidades: { x, y, z },
            intervalo: { x: obj.x / x, y: obj.y / y, z: obj.z / z }
        }
    }
}

export default criarMalha