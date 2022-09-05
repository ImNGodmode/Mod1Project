
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

