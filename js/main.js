let inputTask = document.querySelector("[type='text'");
let addTask = document.querySelector("[type='submit'");
let TasksBox = document.querySelector(".list")
let arrayOfTasks = []
let claerBtn = document.querySelector('.clear')


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
}

// Remove Task From Tasks Box And LocalStorage
TasksBox.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove")) {
        removeTaskFromLocalStorage(e.target.parentElement.parentElement.getAttribute("data-id"))
        e.target.parentElement.parentElement.remove()
    }
    if (e.target.classList.contains("task")) {
        changestatus(e.target.getAttribute("data-id"))
        e.target.classList.toggle("done")
    }
})
// Remove Task From  LocalStorage
function removeTaskFromLocalStorage(taskId) {
    console.log("ok")
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
})