const footballTeams = [
{
    teamName: "Inter",
    points: 0,
    foulsRecived: 0,
},
{
    teamName: "Napoli",
    points: 0,
    foulsRecived: 0,
},
{
    teamName: "Milan",
    points: 0,
    foulsRecived: 0,
},
{
    teamName: "Juventus",
    points: 0,
    foulsRecived: 0,
},
{
    teamName: "Roma",
    points: 0,
    foulsRecived: 0,
},
{
    teamName: "Lazio",
    points: 0,
    foulsRecived: 0,
},
]

function randomNum() {
    let number = Math.floor((Math.random() * 100) + 1);
    return number    
}

foulsArray = []

footballTeams.forEach(team => {
    let {teamName, points, foulsRecived} = team
    points = randomNum()
    foulsRecived = randomNum()
    console.log(points, foulsRecived);
    foulsArray.push(teamName, foulsRecived)
});

console.log(foulsArray);