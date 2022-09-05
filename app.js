
let sec = 0
let time = document.getElementById("time")


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
   let pos = 0
   clearInterval(id)
   const frame = () => {
      if (pos === 350) {
         clearInterval(id)
      }else {
         pos++
         zombie.style.left = pos + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie2 = () => {
   let id = null
   const zombie = document.getElementById('zombie2')
   let pos = 0
   clearInterval(id)
   const frame = () => {
      if (pos === 350) {
         clearInterval(id)
      }else {
         pos++
         zombie.style.right = pos + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie3 = () => {
   let id = null
   const zombie = document.getElementById('zombie3')
   let pos = 0
   clearInterval(id)
   const frame = () => {
      if (pos === 200) {
         clearInterval(id)
      }else {
         pos++
         zombie.style.top = pos + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie4 = () => {
   let id = null
   const zombie = document.getElementById('zombie4')
   let pos = 0
   clearInterval(id)
   const frame = () => {
      if (pos === 200) {
         clearInterval(id)
      }else {
         pos++
         zombie.style.bottom = pos + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie5 = () => {
   let id = null
   const zombie = document.getElementById('zombie5')
   let pos = 0
   clearInterval(id)
   const frame = () => {
      if (pos === 350) {
         clearInterval(id)
      }else {
         pos++
         zombie.style.right = pos + "px"
         zombie.style.top = pos + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie6 = () => {
   let id = null
   const zombie = document.getElementById('zombie6')
   let pos = 0
   clearInterval(id)
   const frame = () => {
      if (pos === 350) {
         clearInterval(id)
      }else {
         pos++
         zombie.style.right = pos + "px"
         zombie.style.bottom = pos + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie7 = () => {
   let id = null
   const zombie = document.getElementById('zombie7')
   let pos = 0
   clearInterval(id)
   const frame = () => {
      if (pos === 350) {
         clearInterval(id)
      }else {
         pos++
         zombie.style.left = pos + "px"
         zombie.style.top = pos + "px"
      }
   }
   id = setInterval(frame, 5)
}
const moveZombie8 = () => {
   let id = null
   const zombie = document.getElementById('zombie8')
   let pos = 0
   clearInterval(id)
   const frame = () => {
      if (pos === 350) {
         clearInterval(id)
      }else {
         pos++
         zombie.style.left = pos + "px"
         zombie.style.bottom = pos + "px"
      }
   }
   id = setInterval(frame, 5)
}
const spawnZombies = () => {
      let position = Math.floor(Math.random()*8)+1
      const zombie = document.createElement("img")
      zombie.src = "./assets/zombie.gif"
      zombie.className = "zombie"
      document.getElementById("zombie"+position).append(zombie)
      console.log(position)
      }

