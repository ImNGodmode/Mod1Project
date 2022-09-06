
let sec = 0
let time = document.getElementById("time")
let lvl = 1
let lvlSpeed = 1
let highScore = 0

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
      spawnZombies()
         if (sec < 0){
         clearInterval(id)
         }
   }, 1000)
}

const moveZombie1 = () => {
   
   pos1 = 0
   clearInterval(id1)
   const frame = () => {
      if (pos1 === 350) {
         clearInterval(id1)
      }else {
         pos1++
         zombie1.style.left = pos1 + "px"
      }
   }
   id1 = setInterval(frame, (15-lvlSpeed))
}
const moveZombie2 = () => {
   pos2 = 0
   clearInterval(id2)
   const frame = () => {
      if (pos2 === 350) {
         clearInterval(id2)
      }else {
         pos2++
         zombie2.style.right = pos2 + "px"
      }
   }
   id2 = setInterval(frame, (15 - lvlSpeed))
}
const moveZombie3 = () => {
   pos3 = 0
   clearInterval(id3)
   const frame = () => {
      if (pos3 === 200) {
         clearInterval(id3)
      }else {
         pos3++
         zombie3.style.top = pos3 + "px"
      }
   }
   id3 = setInterval(frame, (15 - lvlSpeed))
}
const moveZombie4 = () => {
   pos4 = 0
   clearInterval(id4)
   const frame = () => {
      if (pos4 === 200) {
         clearInterval(id4)
      }else {
         pos4++
         zombie4.style.bottom = pos4 + "px"
      }
   }
   id4 = setInterval(frame, (15 - lvlSpeed))
}
const moveZombie5 = () => {
   pos5 = 0
   clearInterval(id5)
   const frame = () => {
      if (pos5 === 350) {
         clearInterval(id5)
      }else {
         pos5++
         zombie5.style.right = pos5 + "px"
         zombie5.style.top = pos5 + "px"
      }
   }
   id5 = setInterval(frame, (15 - lvlSpeed))
}
const moveZombie6 = () => {
   pos6 = 0
   clearInterval(id6)
   const frame = () => {
      if (pos6 === 350) {
         clearInterval(id6)
      }else {
         pos6++
         zombie6.style.right = pos6 + "px"
         zombie6.style.bottom = pos6 + "px"
      }
   }
   id6 = setInterval(frame, (15 - lvlSpeed))
}
const moveZombie7 = () => {
   pos7 = 0
   clearInterval(id7)
   const frame = () => {
      if (pos7 === 350) {
         clearInterval(id7)
      }else {
         pos7++
         zombie7.style.left = pos7 + "px"
         zombie7.style.top = pos7 + "px"
      }
   }
   id7 = setInterval(frame, (15 - lvlSpeed))
}
const moveZombie8 = () => {
   pos8 = 0
   clearInterval(id8)
   const frame = () => {
      if (pos8 === 350) {
         clearInterval(id8)
      }else {
         pos8++
         zombie8.style.left = pos8 + "px"
         zombie8.style.bottom = pos8 + "px"
      }
   }
   id8 = setInterval(frame, (15 - lvlSpeed))
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
   }
   if (document.getElementById("zombie2").hasChildNodes() === true && pos2 === 0) {
      moveZombie2()
   }
   if (document.getElementById("zombie3").hasChildNodes() === true && pos3 === 0) {
      moveZombie3()
   }
   if (document.getElementById("zombie4").hasChildNodes() === true && pos4 === 0) {
      moveZombie4()
   }
   if (document.getElementById("zombie5").hasChildNodes() === true && pos5 === 0) {
      moveZombie5()
   }
   if (document.getElementById("zombie6").hasChildNodes() === true && pos6 === 0) {
      moveZombie6()
   }
   if (document.getElementById("zombie7").hasChildNodes() === true && pos7 === 0) {
      moveZombie7()
   }
   if (document.getElementById("zombie8").hasChildNodes() === true && pos8 === 0) {
      moveZombie8()
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
   lvl++
   lvlSpeed++
   timer()
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
   clearInterval(id)
}
const checkHighScore = () => {
   if (lvl > highScore) {
      highScore = lvl
      score.innerHTML = `High Score ${highScore}`
   }
} 