let inputTask = document.querySelector("[type='text'");
let addTask = document.querySelector("[type='submit'");
let TasksBox = document.querySelector(".list")
let arrayOfTasks = []

















































// // Save Your Tasks
// if (localStorage.getItem("tasks")) {
//     arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
// }

// // Get Tasks From Local Storage
// getDataFromLocal()

// addTask.addEventListener("click",  () => {
//     if(inputTask.value !== "") {
//         inputTask.style.borderColor = "#CCC";
//         addTaskToArray(inputTask.value)
//         inputTask.value = ""
//     } else {
//         inputTask.style.borderColor = "red";
//     }
// })

// TasksBox.addEventListener("click", (e) => {
//     if(e.target.classList.contains("remove")) {
//         removeListFromLocal(e.target.parentElement.parentElement.getAttribute("data-id"));
//         e.target.parentElement.parentElement.remove()
//     }
// })

// function addTaskToArray(taskText) {
//     // Create Task
//     const task = {
//         id : Date.now(),
//         title: taskText,
//         completed: false
//     };
//     // Push Tasks To The Array
//     arrayOfTasks.push(task)
//     // Add Tasks To Task Box
//     addTasksToTasksBox(arrayOfTasks)
//     // Add Array Of Tasks To Local Storage
//     addTasksToLocal(arrayOfTasks)
// }

// function addTasksToTasksBox(array) {
//     // Make Tasks Box Empty
//     TasksBox.innerHTML = "" 

//     array.forEach(task => {
//         // Create New Elemnt
//         let newEle = document.createElement("div")
//         newEle.classList.add("task")
//         newEle.setAttribute("data-id", task.id)
//         newEle.appendChild(document.createTextNode(task.title))
//         newEle.classList.add("mission")

//         // Add Done Class
//         task.completed ? newEle.classList.add("Done") : ""

//         // Create X Mark
//         let newS = document.createElement("span");
//         let newI = document.createElement("i")
//         newI.classList.add("fa-solid")
//         newI.classList.add("fa-xmark")
//         newI.classList.add("remove")

        
//         newS.appendChild(newI)
//         // Add X Mark To The New Element
//         newEle.appendChild(newS)

//         // Add The New Element To Tasks Box
//         TasksBox.appendChild(newEle)
//         inputTask.value = ""
//     });
// }

// function addTasksToLocal(array) {
//     window.localStorage.setItem("tasks", JSON.stringify(array))
// }

// function getDataFromLocal() {
//     let data = window.localStorage.getItem("tasks")

//     if (data) {
//         let tasks = JSON.parse(data)
//         addTasksToTasksBox(tasks)
//     }
// }

// function removeListFromLocal(taskId) {
//         arrayOfTasks = arrayOfTasks.filter((task) =>  task.id != taskId)
//         addTasksToLocal(arrayOfTasks)

    
// }