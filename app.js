
let sec = 30
let time = document.getElementById("time")
let timer;


timer = setInterval(() => {
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