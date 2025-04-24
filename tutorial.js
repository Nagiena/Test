const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello",name, "Welcome to our game!")


const shouldWePlay = prompt("Do you want to play? ")


if (shouldWePlay.toLowerCase() === "yes"){
  //Game Logic
  const leftOrRight = prompt("You are in a Maze game, you have to find a way to escape, think before making a decision wrong path will kill you and Game Over... Do you want to go right or left? ")
  if (leftOrRight === "left"){
    console.log("It's a Bridge!")
    const  cross = prompt("Do you want to cross the bridge? ")
    if (cross === "yes"){
      console.log("The bridge was weak and you fell in the stream and Game Over!....BYE..BYE")
    }else{
      console.log("Good Choice...Every Other Path except Bridge is Safe... You Win...!")
    }
  }else{
    console.log("You chose to go right and fell off a cliff.... Game Over!....BYE...BYE")
  }

  
}else if(shouldWePlay.toLowerCase() === "no"){
  console.log("Okay, See you tomorrow!")
}
else{
  console.log("Invalid Argument")
}