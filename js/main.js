let missionBox = document.querySelector("[type='text'");
let addMission = document.querySelector("[type='submit'");
let missionsBox = document.querySelector(".list")

addMission.addEventListener("click", function () {
    if (missionBox.value === "" || missionBox.value === null) {
        missionBox.style.borderColor = "red"
    } else {
        let newEle = document.createElement("div")
        newEle.innerText = missionBox.value
        newEle.classList.add("mission")
        
        let newI = document.createElement("i")
        newI.classList.add("fa-solid")
        newI.classList.add("fa-xmark")
        newI.classList.add("remove")
        
        newI.addEventListener("click", function () {
            this.parentElement.remove()
        })
        
        window.localStorage.setItem("missions", String(newEle))
        newEle.appendChild(newI)
        missionsBox.appendChild(newEle)
        missionBox.value = ""
        missionBox.style.borderColor = "#CCC"
    }
})
