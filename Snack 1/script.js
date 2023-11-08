const bikeArray = [
{
    nome: "bici 1",
    peso: 10
},
{
    nome: "bici 2",
    peso: 4
},
{
    nome: "bici 3",
    peso: 7
},
{
    nome: "bici 4",
    peso: 2
},
{
    nome: "bici 5",
    peso: 8
},
{
    nome: "bici 6",
    peso: 12
},
]

arrayPeso = []
bikeArray.forEach(bike => {
    console.log(bike);
    const {nome, peso} = bike
    
    arrayPeso.push(peso)

    if (peso === Math.min(...arrayPeso)) {
    console.log(nome); 
    }
});   

