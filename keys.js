const pessoas = [
    {index: 0, nome: "Lemuel", ativo: true},
    {index: 1, nome: "João", ativo: false},
    {index: 2, nome: "Guilherme", ativo: false},
    {index: 3, nome: "Samuel", ativo: true}
]
const retornaPessoas = (obj) => {
    return obj.map((item) => {
        return obj[item.index]
    })
}
let a = retornaPessoas(pessoas)

const retornaAtivos = (e) => {
    e.forEach(element => {
        if(element.ativo === true){
            console.table(element)
        }
    });
}

retornaAtivos(a)