var isstatus = document.querySelector("h5")

var addFriend = document.querySelector("#add")
var removeFriend = document.querySelector("#Remove")


addFriend.addEventListener("click",function(){
    isstatus.innerHTML = "Friends"
    isstatus.style.color = "green"
})


removeFriend.addEventListener("click",function(){
    isstatus.innerHTML = "Stranger"
    isstatus.style.color = "red"
})