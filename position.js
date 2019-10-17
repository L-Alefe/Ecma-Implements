const pessoas = [
    {id: 0, nome: "Maçã", ativo: true},
    {id: 1, nome: "Jaca", ativo: false},
    {id: 2, nome: "Goiaba", ativo: false},
    {id: 3, nome: "Pêra", ativo: true}
]

const retornaPeloIndex = (id, array) => {
    array.map(item => {
        if (id === item.id) console.log(item)
    });
}

retornaPeloIndex(1, pessoas)