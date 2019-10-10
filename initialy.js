const alfabeto = [
    {index: 0, letra: "A"},
    {index: 1, letra: "B"},
    {index: 2, letra: "C"},
    {index: 3, letra: "D"}
]
const retornarLetra = (x) => console.log(x.letra)
const returnProp = (funct, e) => funct(e)
const resultado = (index) => returnProp(retornarLetra, alfabeto[index])
alfabeto.map((item) => {
    resultado(item.index)
})