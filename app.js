
let sec = 0
let time = document.getElementById("time")
let pos1 = 0
let pos2 = 0
let pos3 = 0
let pos4 = 0
let pos5 = 0
let pos6 = 0
let pos7 = 0
let pos8 = 0

const timer = () => {
   sec =30
   let id = null
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
   let id = null
   const zombie = document.getElementById('zombie1')
    pos1 = 0
   clearInterval(id)
   const frame = () => {
      if (pos1 === 350) {
         clearInterval(id)
      }else {
         pos1++
         zombie.style.left = pos1 + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie2 = () => {
   let id = null
   const zombie = document.getElementById('zombie2')
   pos2 = 0
   clearInterval(id)
   const frame = () => {
      if (pos2 === 350) {
         clearInterval(id)
      }else {
         pos2++
         zombie.style.right = pos2 + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie3 = () => {
   let id = null
   const zombie = document.getElementById('zombie3')
   pos3 = 0
   clearInterval(id)
   const frame = () => {
      if (pos3 === 200) {
         clearInterval(id)
      }else {
         pos3++
         zombie.style.top = pos3 + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie4 = () => {
   let id = null
   const zombie = document.getElementById('zombie4')
   pos4 = 0
   clearInterval(id)
   const frame = () => {
      if (pos4 === 200) {
         clearInterval(id)
      }else {
         pos4++
         zombie.style.bottom = pos4 + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie5 = () => {
   let id = null
   const zombie = document.getElementById('zombie5')
   pos5 = 0
   clearInterval(id)
   const frame = () => {
      if (pos5 === 350) {
         clearInterval(id)
      }else {
         pos5++
         zombie.style.right = pos5 + "px"
         zombie.style.top = pos5 + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie6 = () => {
   let id = null
   const zombie = document.getElementById('zombie6')
   pos6 = 0
   clearInterval(id)
   const frame = () => {
      if (pos6 === 350) {
         clearInterval(id)
      }else {
         pos6++
         zombie.style.right = pos6 + "px"
         zombie.style.bottom = pos6 + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie7 = () => {
   let id = null
   const zombie = document.getElementById('zombie7')
   pos7 = 0
   clearInterval(id)
   const frame = () => {
      if (pos7 === 350) {
         clearInterval(id)
      }else {
         pos7++
         zombie.style.left = pos7 + "px"
         zombie.style.top = pos7 + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie8 = () => {
   let id = null
   const zombie = document.getElementById('zombie8')
   pos8 = 0
   clearInterval(id)
   const frame = () => {
      if (pos8 === 350) {
         clearInterval(id)
      }else {
         pos8++
         zombie.style.left = pos8 + "px"
         zombie.style.bottom = pos8 + "px"
      }
   }
   id = setInterval(frame, 5)
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
