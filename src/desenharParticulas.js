function desenharParticulas( particulas ) {
    particulas.forEach( element => {
        element.desenhar()
        element.move()
    });
}

export default desenharParticulas