let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensiones = ['.com', '.net', '.cl'];
let inicio = [ 'www'];
pagina1 = '';
pagina2 = '';
pagina3 = '';
pagina4 = '';
pagina5 = '';

 for(let i = 0; i < pronoun.length; i++) {
    pagina1 = pronoun[i]
    for (let i = 0; i < adj.length; i++) {
        pagina2 = adj[i];
        for (let i = 0; i < noun.length; i++) {
            pagina3 = noun[i];
            for (let i = 0; i < extensiones.length; i++) {
                pagina4 = extensiones[i];
                for (let i = 0; i < inicio.length; i++) {
                    pagina5 = inicio[i];
                console.log(pagina5 + pagina1 + pagina2 + pagina3 + pagina4);
                }
            }
        }
    }
}

    