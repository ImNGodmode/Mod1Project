
let sec = 0
let time = document.getElementById("time")
let lvl = 1
let lvlSpeed = 1
let highScore = 0
let canlvl = false

let pos1 = 0
let pos2 = 0
let pos3 = 0
let pos4 = 0
let pos5 = 0
let pos6 = 0
let pos7 = 0
let pos8 = 0

let id = null
let id1 = null
let id2 = null
let id3 = null
let id4 = null
let id5 = null
let id6 = null
let id7 = null
let id8 = null

let zombie1Health = 1
let zombie2Health = 1
let zombie3Health = 1
let zombie4Health = 1
let zombie5Health = 1
let zombie6Health = 1
let zombie7Health = 1
let zombie8Health = 1

const zombie1 = document.getElementById('zombie1')
const zombie2 = document.getElementById('zombie2')
const zombie3 = document.getElementById('zombie3')
const zombie4 = document.getElementById('zombie4')
const zombie5 = document.getElementById('zombie5')
const zombie6 = document.getElementById('zombie6')
const zombie7 = document.getElementById('zombie7')
const zombie8 = document.getElementById('zombie8')
const level = document.getElementById("lvl")
const player = document.getElementById("playerHome")
const score = document.getElementById("highScore")
const endScrene = document.getElementById("playContainer")
const death = document.getElementById("death")
const shot = document.getElementById("shot")
// const gameOver = document.querySelector("gameOver")

const player1 = () => {
   const newPlayer = document.createElement("img")
   newPlayer.src = "./assets/player1.png"
   newPlayer.className = "playerImg"
   player.append(newPlayer)
}
const player2 = () => {
      const newPlayer = document.createElement("img")
      newPlayer.src = "./assets/player2.png"
      newPlayer.className = "playerImg"
      player.append(newPlayer)
   }

const timer = () => {
   sec =10
   level.innerText = `Level ${lvl}`
   id = setInterval(() => {
      time.innerText =  sec;
      sec--;
         if (sec < 0){
         clearInterval(id)
         canlvl = true
         }else {
         spawnZombies()
         canlvl = false
         }
   }, 1000)
}

const moveZombie1 = () => {
   
   pos1 = 0
   clearInterval(id1)
   const frame = () => {
      if (pos1 === 45) {
         clearInterval(id1)
         endGame()
      }else {
         pos1++
         zombie1.style.left = pos1 + "%"
      }
   }
   id1 = setInterval(frame, (150 - lvlSpeed))
}
const moveZombie2 = () => {
   pos2 = 0
   clearInterval(id2)
   const frame = () => {
      if (pos2 === 45) {
         clearInterval(id2)
         endGame()
      }else {
         pos2++
         zombie2.style.right = pos2 + "%"
      }
   }
   id2 = setInterval(frame, (150 - lvlSpeed))
}
const moveZombie3 = () => {
   pos3 = 0
   clearInterval(id3)
   const frame = () => {
      if (pos3 === 45) {
         clearInterval(id3)
         endGame()
      }else {
         pos3++
         zombie3.style.top = pos3 + "%"
      }
   }
   id3 = setInterval(frame, (150 - lvlSpeed))
}
const moveZombie4 = () => {
   pos4 = 0
   clearInterval(id4)
   const frame = () => {
      if (pos4 === 45) {
         clearInterval(id4)
         endGame()
      }else {
         pos4++
         zombie4.style.bottom = pos4 + "%"
      }
   }
   id4 = setInterval(frame, (150 - lvlSpeed))
}
const moveZombie5 = () => {
   pos5 = 0
   clearInterval(id5)
   const frame = () => {
      if (pos5 === 45) {
         clearInterval(id5)
         endGame()
      }else {
         pos5++
         zombie5.style.right = pos5 + "%"
         zombie5.style.top = pos5 + "%"
      }
   }
   id5 = setInterval(frame, (150 - lvlSpeed))
}
const moveZombie6 = () => {
   pos6 = 0
   clearInterval(id6)
   const frame = () => {
      if (pos6 === 45) {
         clearInterval(id6)
         endGame()
      }else {
         pos6++
         zombie6.style.right = pos6 + "%"
         zombie6.style.bottom = pos6 + "%"
      }
   }
   id6 = setInterval(frame, (150 - lvlSpeed))
}
const moveZombie7 = () => {
   pos7 = 0
   clearInterval(id7)
   const frame = () => {
      if (pos7 === 45) {
         clearInterval(id7)
         endGame()
      }else {
         pos7++
         zombie7.style.left = pos7 + "%"
         zombie7.style.top = pos7 + "%"
      }
   }
   id7 = setInterval(frame, (150 - lvlSpeed))
}
const moveZombie8 = () => {
   pos8 = 0
   clearInterval(id8)
   const frame = () => {
      if (pos8 === 45) {
         clearInterval(id8)
         endGame()
      }else {
         pos8++
         zombie8.style.left = pos8 + "%"
         zombie8.style.bottom = pos8 + "%"
      }
   }
   id8 = setInterval(frame, (150 - lvlSpeed))
}
const spawnZombies = () => {
      let position = Math.floor(Math.random()*8)+1
      let zombiePosition =document.getElementById("zombie"+position)
      if (zombiePosition.hasChildNodes() === false){
         const zombie = document.createElement("img")
         zombie.src = "./assets/zombie.gif"
         zombie.className = "zombie"
         zombiePosition.append(zombie)
         zombieAtk()
         }
   }
const zombieAtk = () => {
   if (document.getElementById("zombie1").hasChildNodes() === true && pos1 === 0) {
      moveZombie1()
      if (lvl <= 10){
         zombie1Health = 1
      }else if ( 10 < lvl <= 20){
         zombie1Health = 2
      }else if ( 20 < lvl <= 30){
         zombie1Health = 3
      }else if ( 30 < lvl <= 40){
         zombie1Health = 4
      }else if ( 40 < lvl <= 50){
         zombie1Health = 5
      }else if ( 50 < lvl <= 60){
         zombie1Health = 6
      }else if ( 60 < lvl <= 70){
         zombie1Health = 7
      }else if ( 70 < lvl <= 80){
         zombie1Health = 8
      }else if ( 80 < lvl <= 90){
         zombie1Health = 9
      }else if ( 90 < lvl <= 100){
         zombie1Health = 10
      }else {zombie1Health = 11}
      // console.log(zombie1Health)
   }
   if (document.getElementById("zombie2").hasChildNodes() === true && pos2 === 0) {
      moveZombie2()
      if (lvl <= 10){
         zombie2Health = 1
      }else if ( 10 < lvl <= 20){
         zombie2Health = 2
      }else if ( 20 < lvl <= 30){
         zombie2Health = 3
      }else if ( 30 < lvl <= 40){
         zombie2Health = 4
      }else if ( 40 < lvl <= 50){
         zombie2Health = 5
      }else if ( 50 < lvl <= 60){
         zombie2Health = 6
      }else if ( 60 < lvl <= 70){
         zombie2Health = 7
      }else if ( 70 < lvl <= 80){
         zombie2Health = 8
      }else if ( 80 < lvl <= 90){
         zombie2Health = 9
      }else if ( 90 < lvl <= 100){
         zombie2Health = 10
      }else {zombie2Health = 11}
      // console.log(zombie2Health)
   }
   if (document.getElementById("zombie3").hasChildNodes() === true && pos3 === 0) {
      moveZombie3()
      if (lvl <= 10){
         zombie3Health = 1
      }else if ( 10 < lvl <= 20){
         zombie3Health = 2
      }else if ( 20 < lvl <= 30){
         zombie3Health = 3
      }else if ( 30 < lvl <= 40){
         zombie3Health = 4
      }else if ( 40 < lvl <= 50){
         zombie3Health = 5
      }else if ( 50 < lvl <= 60){
         zombie3Health = 6
      }else if ( 60 < lvl <= 70){
         zombie3Health = 7
      }else if ( 70 < lvl <= 80){
         zombie3Health = 8
      }else if ( 80 < lvl <= 90){
         zombie3Health = 9
      }else if ( 90 < lvl <= 100){
         zombie3Health = 10
      }else {zombie3Health = 11}
      // console.log(zombie3Health)
   }
   if (document.getElementById("zombie4").hasChildNodes() === true && pos4 === 0) {
      moveZombie4()
      if (lvl <= 10){
         zombie4Health = 1
      }else if ( 10 < lvl <= 20){
         zombie4Health = 2
      }else if ( 20 < lvl <= 30){
         zombie4Health = 3
      }else if ( 30 < lvl <= 40){
         zombie4Health = 4
      }else if ( 40 < lvl <= 50){
         zombie4Health = 5
      }else if ( 50 < lvl <= 60){
         zombie4Health = 6
      }else if ( 60 < lvl <= 70){
         zombie4Health = 7
      }else if ( 70 < lvl <= 80){
         zombie4Health = 8
      }else if ( 80 < lvl <= 90){
         zombie4Health = 9
      }else if ( 90 < lvl <= 100){
         zombie4Health = 10
      }else {zombie4Health = 11}
      // console.log(zombie4Health)
   }
   if (document.getElementById("zombie5").hasChildNodes() === true && pos5 === 0) {
      moveZombie5()
      if (lvl <= 10){
         zombie5Health = 1
      }else if ( 10 < lvl <= 20){
         zombie5Health = 2
      }else if ( 20 < lvl <= 30){
         zombie5Health = 3
      }else if ( 30 < lvl <= 40){
         zombie5Health = 4
      }else if ( 40 < lvl <= 50){
         zombie5Health = 5
      }else if ( 50 < lvl <= 60){
         zombie5Health = 6
      }else if ( 60 < lvl <= 70){
         zombie5Health = 7
      }else if ( 70 < lvl <= 80){
         zombie5Health = 8
      }else if ( 80 < lvl <= 90){
         zombie5Health = 9
      }else if ( 90 < lvl <= 100){
         zombie5Health = 10
      }else {zombie5Health = 11}
      // console.log(zombie5Health)
   }
   if (document.getElementById("zombie6").hasChildNodes() === true && pos6 === 0) {
      moveZombie6()
      if (lvl <= 10){
         zombie6Health = 1
      }else if ( 10 < lvl <= 20){
         zombie6Health = 2
      }else if ( 20 < lvl <= 30){
         zombie6Health = 3
      }else if ( 30 < lvl <= 40){
         zombie6Health = 4
      }else if ( 40 < lvl <= 50){
         zombie6Health = 5
      }else if ( 50 < lvl <= 60){
         zombie6Health = 6
      }else if ( 60 < lvl <= 70){
         zombie6Health = 7
      }else if ( 70 < lvl <= 80){
         zombie6Health = 8
      }else if ( 80 < lvl <= 90){
         zombie6Health = 9
      }else if ( 90 < lvl <= 100){
         zombie6Health = 10
      }else {zombie6Health = 11}
      // console.log(zombie6Health)
   }
   if (document.getElementById("zombie7").hasChildNodes() === true && pos7 === 0) {
      moveZombie7()
      if (lvl <= 10){
         zombie7Health = 1
      }else if ( 10 < lvl <= 20){
         zombie7Health = 2
      }else if ( 20 < lvl <= 30){
         zombie7Health = 3
      }else if ( 30 < lvl <= 40){
         zombie7Health = 4
      }else if ( 40 < lvl <= 50){
         zombie7Health = 5
      }else if ( 50 < lvl <= 60){
         zombie7Health = 6
      }else if ( 60 < lvl <= 70){
         zombie7Health = 7
      }else if ( 70 < lvl <= 80){
         zombie7Health = 8
      }else if ( 80 < lvl <= 90){
         zombie7Health = 9
      }else if ( 90 < lvl <= 100){
         zombie7Health = 10
      }else {zombie7Health = 11}
      // console.log(zombie7Health)
   }
   if (document.getElementById("zombie8").hasChildNodes() === true && pos8 === 0) {
      moveZombie8()
      if (lvl <= 10){
         zombie8Health = 1
      }else if ( 10 < lvl <= 20){
         zombie8Health = 2
      }else if ( 20 < lvl <= 30){
         zombie8Health = 3
      }else if ( 30 < lvl <= 40){
         zombie8Health = 4
      }else if ( 40 < lvl <= 50){
         zombie8Health = 5
      }else if ( 50 < lvl <= 60){
         zombie8Health = 6
      }else if ( 60 < lvl <= 70){
         zombie8Health = 7
      }else if ( 70 < lvl <= 80){
         zombie8Health = 8
      }else if ( 80 < lvl <= 90){
         zombie8Health = 9
      }else if ( 90 < lvl <= 100){
         zombie8Health = 10
      }else {zombie8Health = 11}
      // console.log(zombie8Health)
   }
}
const killZombie1 = () => {
  if (zombie1.hasChildNodes() === true ) {
      zombie1.removeChild(zombie1.firstChild)
      clearInterval(id1)
      pos1 = 0
      zombie1.style.left = pos1 + "px"

   }
}
const killZombie2 = () => {
   if (zombie2.hasChildNodes() === true ) {
      zombie2.removeChild(zombie2.firstChild)
      clearInterval(id2)
      pos2 = 0
      zombie2.style.right = pos2 + "px"
   }
}
const killZombie3 = () => {
   if (zombie3.hasChildNodes() === true ) {
   zombie3.removeChild(zombie3.firstChild)
   clearInterval(id3)
   pos3 = 0
   zombie3.style.top = pos3 + "px"
   }
}
const killZombie4 = () => {
   if (zombie4.hasChildNodes() === true ) {
   zombie4.removeChild(zombie4.firstChild)
   clearInterval(id4)
   pos4 = 0
   zombie4.style.bottom = pos4 + "px"
}
}
const killZombie5 = () => {
   if (zombie5.hasChildNodes() === true ) {
   zombie5.removeChild(zombie5.firstChild)
   clearInterval(id5)
   pos5 = 0
   zombie5.style.right = pos5 + "px"
   zombie5.style.top = pos5 + "px"
}
}
const killZombie6 = () => {
   if (zombie6.hasChildNodes() === true ) {
   zombie6.removeChild(zombie6.firstChild)
   clearInterval(id6)
   pos6 = 0
   zombie6.style.right = pos6 + "px"
   zombie6.style.bottom = pos6 + "px"
}
}
const killZombie7 = () => {
   if (zombie7.hasChildNodes() === true ) {
   zombie7.removeChild(zombie7.firstChild)
   clearInterval(id7)
   pos7 = 0
   zombie7.style.left = pos7 + "px"
   zombie7.style.top = pos7 + "px"
}
}
const killZombie8 = () => {
   if (zombie8.hasChildNodes() === true ) {
   zombie8.removeChild(zombie8.firstChild)
   clearInterval(id8)
   pos8 = 0
   zombie8.style.left = pos8 + "px"
   zombie8.style.bottom = pos8 + "px"
}
}
const nextLevel = () => {
   if (canlvl === true){
      lvl++
      if (lvlSpeed < 90){
         lvlSpeed += 10
      }else {
         lvlSpeed =1
      }
      timer()
   }
}
const reset = () => {
   checkHighScore()
   player.removeChild(player.firstChild)
   lvl = 1
   lvlSpeed = 1
   sec = 0
   time.innerText =  sec;
   clearInterval(id)
   killZombie1()
   killZombie2()
   killZombie3()
   killZombie4()
   killZombie5()
   killZombie6()
   killZombie7()
   killZombie8()
  
}
const checkHighScore = () => {
   if (lvl > highScore) {
      highScore = lvl
      score.innerHTML = `High Score ${highScore}`
   }
} 
const endGame = () => {
  let end = document.createElement("div")
  end.innerHTML = "Game Over"
  end.className = "gameOver"
  end.addEventListener("click", newGame)
  endScrene.append(end)
  death.play()
  checkHighScore()
  player.removeChild(player.firstChild)
  lvl = 1
  lvlSpeed = 1
  sec = 0
  time.innerText =  sec; 
  killZombie1()
  killZombie2()
  killZombie3()
  killZombie4()
  killZombie5()
  killZombie6()
  killZombie7()
  killZombie8()
  clearInterval(id)
}
const newGame = () =>  {
      endScrene.removeChild(endScrene.lastChild)
      reset()
   }
const hitZombie1 = () => {
   zombie1Health--
   console.log(zombie1Health)
   shot.play()
   if (zombie1Health <= 0) {
      killZombie1()
   } 
}
const hitZombie2 = () => {
   zombie2Health--
   shot.play()
   console.log(zombie2Health)
   if (zombie2Health <= 0) {
      killZombie2()
   } 
}
const hitZombie3 = () => {
   zombie3Health--
   shot.play()
   console.log(zombie3Health)
   if (zombie3Health <= 0) {
      killZombie3()
   } 
}
const hitZombie4 = () => {
   zombie4Health--
   shot.play()
   console.log(zombie4Health)
   if (zombie4Health <= 0) {
      killZombie4()
   } 
}
const hitZombie5 = () => {
   zombie5Health--
   shot.play()
   console.log(zombie5Health)
   if (zombie5Health <= 0) {
      killZombie5()
   } 
}
const hitZombie6 = () => {
   zombie6Health--
   shot.play()
   console.log(zombie6Health)
   if (zombie6Health <= 0) {
      killZombie6()
   } 
}
const hitZombie7 = () => {
   zombie7Health--
   shot.play()
   console.log(zombie7Health)
   if (zombie7Health <= 0) {
      killZombie7()
   } 
}
const hitZombie8 = () => {
   zombie8Health--
   shot.play()
   console.log(zombie8Health)
   if (zombie8Health <= 0) {
      killZombie8()
   } 
}