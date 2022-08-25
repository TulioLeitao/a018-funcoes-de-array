const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (obj) => {

    return {
        nome: obj.toUperCase,
        profissao: obj.toUperCase,
        username: obj.toUperCase ,
        senha: obj.toUperCase
    }

}

const textoCorrido = objeto.map(caixaAlta);
console.log (textoCorrido);

//de novo, não consegui fazer...