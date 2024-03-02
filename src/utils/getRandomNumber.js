function getRandomNumber() {
   
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber)
    return randomNumber;
}


export default getRandomNumber