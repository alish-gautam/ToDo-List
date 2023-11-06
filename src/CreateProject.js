
import { myProjects } from './Projects'
import { sidebar } from './sidebar'
import Close from '/src/images/close.png'
import List from '/src/images/list.png'
export function createProject(){
    //container
    let container=document.querySelector('.container')
    let content=document.createElement('div')
    content.classList.add('content')
    //userInput is the parent of project title and description and buttons
    let userInput=document.createElement('div')
    userInput.classList.add('userInput')
    //project title
    let title=document.createElement("input")
    title.setAttribute('required','true')
    title.classList.add('mytitle')
    title.placeholder='Title eg: Weekend, New Year'
    title.classList.add('inputTitle')
    let title_value=title.value
    let titleholder=document.createElement("h1")
    titleholder.innerText=title_value
    //confirm button
    let confirmDiv=document.createElement('div')
    confirmDiv.classList.add('confirmdiv')
    let confirm=document.createElement('button')
    confirm.innerText="Confirm"
    confirmDiv.appendChild(confirm)

    
   //appending to the container
    userInput.appendChild(title)
    // userInput.appendChild(descript)
    content.appendChild(userInput)
    content.appendChild(confirmDiv)
    // content.appendChild(buttonDiv)
    container.appendChild(content)

    confirm.addEventListener('click',()=>{
       onProjectComfirmClick()
        }
    )
}

function onProjectItemClick(){
   
    let container=document.querySelector(".container")
    let content=document.querySelector('.content')
    let userInput=document.querySelector('.userInput')
    let confirmdiv=document.querySelector('.confirmdiv')
    
   
    //todo title
    let todotitle=document.createElement('input')
    todotitle.placeholder="eg:drink water, pay bills"
    todotitle.classList.add('todoTitle')
    
    // todo description
    let descript=document.createElement('input')
    descript.placeholder="Description eg: Party, Nightclub"
    descript.classList.add('descript')
    let descript_value=descript.value
    let descript_holder=document.createElement('p')
    descript_holder.innerText=descript_value
    //button div and buttons
    let buttonDiv=document.createElement('div')
    buttonDiv.classList.add('buttondiv')
    let low=document.createElement('button')
    low.innerText="Low"
    //medium
    let medium=document.createElement('button')
    medium.innerText="Medium"
    //high
    let high=document.createElement('button')
    high.innerText="High"
    //creating the todo confirm button
    let todo_confirm_div=document.createElement('div')
    let todo_confirm=document.createElement('button')
    todo_confirm_div.classList.add('todo_confirm_div')
    todo_confirm.innerText="Confirm"
    //appending to button div
    buttonDiv.appendChild(low)
    buttonDiv.appendChild(medium)
    buttonDiv.appendChild(high)
    userInput.appendChild(todotitle)
    userInput.appendChild(descript)
    todo_confirm_div.appendChild(todo_confirm)
    content.appendChild(userInput)
    content.appendChild(buttonDiv)
    content.appendChild(todo_confirm_div)
    container.appendChild(content)
    //when confirm todo is clicked
    todo_confirm.addEventListener('click',()=>{
        let title_value=todotitle.value
        let descript_value=descript.value
        low.addEventListener('click',()=>{
            low.value="Low"
            medium.value=null
            high.value=null
        })
        medium.addEventListener('click',()=>{
            medium.value="Medium"
            low.value=null
            high.value=null
        })
        high.addEventListener('click',()=>{
           high.value="High"
           low.value=null
           medium.value=null
        })
        
    })
    
}

function onProjectComfirmClick(){
    let project_title=document.querySelector('.mytitle')
    let container=document.querySelector('.container')
    let confirmDiv=document.querySelector('.confirmdiv')
    let content=document.querySelector('.content')
    let userInput=document.querySelector('.userInput')
    if(!project_title.value){
        let errordiv=document.createElement('div')
        let error=document.createElement('p')
        error.innerText="Please choose a title, it cannot be empty"
        errordiv.classList.add('titleError')
        errordiv.appendChild(error)
        content.appendChild(errordiv)
        container.appendChild(content)
        return
    }
    let errordiv=document.querySelector('.titleError')
    if(errordiv){
        content.removeChild(errordiv)
    }
    //project title value
    let project_title_value=project_title.value
    //getting projects
    let projects=document.querySelector('.projects')
    let projectDiv=document.createElement('div')
    projectDiv.classList.add("projectDiv")
    let myProject=document.createElement('p')
    myProject.innerText=project_title_value
    let listIcon=new Image()
    listIcon.src=List
    let crossIcon=new Image()
    crossIcon.src=Close
    let IconAndProject=document.createElement('div')
    IconAndProject.classList.add('iconAndProject')
    let notclicked=true
    projectDiv.addEventListener('click',()=>{
        projectDiv.style.fontWeight="bold"
        projectDiv.style.backgroundColor="rgba(0, 0, 0, 0.214)"
        if(notclicked){
            onProjectItemClick()
            notclicked=false
        }
    })
    IconAndProject.appendChild(listIcon)
    IconAndProject.appendChild(myProject)
    projectDiv.appendChild(IconAndProject)
    projectDiv.appendChild(crossIcon)
    projects.appendChild(projectDiv)
    userInput.innerHTML=""
    confirmDiv.innerHTML=""
    crossIcon.addEventListener('click',()=>{
        container.removeChild(content)
        projects.removeChild(projectDiv)
    })
}