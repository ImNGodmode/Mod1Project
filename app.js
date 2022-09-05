
let sec = 30
let time = document.getElementById("time")


const timer = setInterval(() => {
   time.innerText =  sec;
   sec--;
   console.log(sec);
   if (sec < 0){
clearInterval(timer)
}
}, 1000)

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