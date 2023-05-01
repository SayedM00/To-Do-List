let inputTask = document.querySelector("[type='text'");
let addTask = document.querySelector("[type='submit'");
let TasksBox = document.querySelector(".list")
let arrayOfTasks = []
let claerBtn = document.querySelector('.clear button')
let ourCheckBox = document.querySelector(".checkbox");
let ourBody = document.documentElement.querySelector("body");
let ourCircle = document.querySelector(".checkbox + div span");
let countOfTasks = document.querySelector(".clear > span")


// Get Tasks From Local Storage
getTasksFromLocalStorage()


addTask.addEventListener("click", () => {
    if(inputTask.value != "") {
        inputTask.style.borderColor = "#CCC";
        addTaskToArrya(inputTask.value)
        inputTask.value = ""

    } else {
        inputTask.style.borderColor = "red";
    }
    tasksCount()
})

// Add Task To Array
function addTaskToArrya(taskTxst) {
    const task = {
        id : Date.now(),
        title : taskTxst,
        complated : false
    }
    arrayOfTasks.push(task)
    addTaskToTasksBox(arrayOfTasks)
    addTasksToLocalStorage(arrayOfTasks)
    // removeTasksFromTasksBox_localStorage(arrayOfTasks)
}

// Add Tasks To Tasks Box
function addTaskToTasksBox(array) {
    TasksBox.innerHTML = "";
    array.forEach((task) => {
        let newEle = document.createElement("div");
        let newS = document.createElement("span");
        let newI = document.createElement("i");
        newI.classList.add("fa-solid")
        newI.classList.add("fa-xmark")
        newI.classList.add("remove")
        newS.appendChild(newI)
        newEle.classList.add("mission")
        newEle.classList.add("task")
        newEle.setAttribute("data-id", task.id)
        newEle.appendChild(document.createTextNode(task.title))
        newEle.appendChild(newS)
        TasksBox.appendChild(newEle)
        if (task.complated) {
            newEle.classList.add("done")
        }
    })
}

// Add Tasks To Local Storage
function addTasksToLocalStorage(array) {
        window.localStorage.setItem("Tasks", JSON.stringify(array))
}

// Get Tasks From Local Storage
function getTasksFromLocalStorage() {
    if (localStorage.getItem("Tasks")) {
            addTaskToTasksBox(JSON.parse(localStorage.getItem("Tasks")))
            arrayOfTasks = JSON.parse(localStorage.getItem("Tasks"))
    }
    if (localStorage.getItem("btn") != null) {
        if (localStorage.getItem("btn") === "night") {
            ourCheckBox.checked = true
            ourCircle.classList.add("night")
            ourBody.style.background = localStorage.getItem("bg")
        } else {
            ourCircle.classList.remove("night")
            ourBody.style.background = localStorage.getItem("bg")
        }
    }
    tasksCount()
}

// Remove Task From Tasks Box And LocalStorage
TasksBox.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove")) {
        removeTaskFromLocalStorage(e.target.parentElement.parentElement.getAttribute("data-id"))
        e.target.parentElement.parentElement.remove()
        tasksCount()
    }
    if (e.target.classList.contains("task")) {
        changestatus(e.target.getAttribute("data-id"))
        e.target.classList.toggle("done")
    }
})
// Remove Task From  LocalStorage
function removeTaskFromLocalStorage(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId)
    addTasksToLocalStorage(arrayOfTasks)
}

function changestatus(task) {
    for(let i = 0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == task) {
            arrayOfTasks[i].complated == false ? arrayOfTasks[i].complated = true : arrayOfTasks[i].complated = false
        }
        addTasksToLocalStorage(arrayOfTasks)
    }
}

claerBtn.addEventListener("click", function() {
    TasksBox.innerHTML = ""
    localStorage.clear()
    tasksCount()
})

ourCheckBox.addEventListener("click", function () {
    if(ourCheckBox.checked === true) {
        ourBody.style.background = "black"
        ourCircle.classList.add("night")
        localStorage.setItem("btn", "night")
        localStorage.setItem("bg", ourBody.style.background)
    } else {
        ourBody.style.background = "white"
        ourCircle.classList.remove("night")
        localStorage.setItem("btn", "false")
        localStorage.setItem("bg", ourBody.style.background)
    }
}) 

function tasksCount() {
    countOfTasks.innerHTML = `${arrayOfTasks.length < 10 ? "0"+arrayOfTasks.length : arrayOfTasks.length} Task${arrayOfTasks.length < 2 ? "" : "s"}` 
}

console.log(new Set(arrayOfTasks))