//Classificador de Nível do Herói
let nomeDoJogador= "Super pcsilva"
let xp= 5.700
let nivel= ""

if (xp <=1000)
    {nivel = "Ferro"}
else if(xp > 1000 && xp <=2000)
    {nivel = "Bronze"}
else if(xp > 2000 && xp <=6000)
    {nivel = "Prata"}
else if(xp > 6000 && xp <=7000)
    {nivel = "Ouro"}
else if(xp > 7000 && xp <=8000)
    {nivel = "Platina"}
else if(xp > 8000 && xp <=9000)
    {nivel = "Ascendente"}
else if(xp > 9000 && xp <=10.000)
    {nivel = "Imortal"}
else if(xp >= 10.001)
{nivel = "Radiante"}

console.log("O Herói" + nome + "está no nível" + nivel)

