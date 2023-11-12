
import Close from '/src/images/close.png'
import List from '/src/images/list.png'
import Add from '/src/images/add-button.png'
import Del from '/src/images/bin.png'
export function createProject(){
    //container
    let container=document.querySelector('.container')
    let content=document.querySelector('.content')
    content.innerHTML=''
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

export function createTodo(){
   
    let container=document.querySelector(".container")
    let content=document.querySelector('.content')
    content.innerHTML=""
    let userInput=document.createElement('div')
    userInput.classList.add('userInput')
    let projectDiv=document.querySelector('.projectDiv')
   
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
    
    let setDate=document.createElement('input')
    setDate.classList.add('date')
    setDate.type="date"
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
    userInput.appendChild(setDate)
    todo_confirm_div.appendChild(todo_confirm)
    content.appendChild(userInput)
    content.appendChild(buttonDiv)
    content.appendChild(todo_confirm_div)
    container.appendChild(content)
    // setting the priority value
    let value;
    low.addEventListener('click',()=>{
         value="Low"
         low.style.backgroundColor="green"
    })
    medium.addEventListener('click',()=>{
         value="Medium"
         medium.style.backgroundColor="yellow"
    })
    high.addEventListener('click',()=>{
        value="High"
        high.style.backgroundColor="red"
    })
    //when confirm todo is clicked
    todo_confirm.addEventListener('click',()=>{
        // content.innerHTML=""
        let myArr=[]
        buttonDiv.innerHTML=""
        userInput.innerHTML=''
        todo_confirm_div.innerHTML=""
        let title_value=todotitle.value
        let descript_value=descript.value

        //creating my div
        let myTodoDiv=document.createElement('div')
        myTodoDiv.classList.add('myTodoDiv')
        let titleValue=document.createElement('h3')
        titleValue.innerText=title_value
        let descriptValue=document.createElement('p')
        descriptValue.innerText=descript_value
        let priority=document.createElement('button')
        priority.innerText=value
        let delIcon=new Image()
        delIcon.src=Del
        let date=document.createElement('p')
        if(!setDate.value){
            date.innerText="No Date"
        }
        else{
            date.innerText=setDate.value
        }
        
        if(value=="Low"){
            priority.style.backgroundColor="green"
        }
        else if(value=="Medium"){
            priority.style.backgroundColor="yellow"
        }
        else if(value=="High"){
            priority.style.backgroundColor="red"
        }
      
        myTodoDiv.appendChild(titleValue)
        myTodoDiv.appendChild(descriptValue)
        myTodoDiv.appendChild(priority)
        myTodoDiv.appendChild(date)
        myTodoDiv.appendChild(delIcon)
        myArr.push(myTodoDiv)

        console.log(myArr)
        content.appendChild(myTodoDiv)
        onProjectItemClick()

        delIcon.addEventListener('click',()=>{
            content.removeChild(myTodoDiv)
        })
    })
    
}

export function onProjectComfirmClick(){
    let project_title=document.querySelector('.mytitle')
    let container=document.querySelector('.container')
    let userInput=document.querySelector('.userInput')
    let confirmDiv=document.querySelector('.confirmdiv')
    let content=document.querySelector('.content')
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
    let project_items=document.querySelector('.project_Items')
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
    IconAndProject.appendChild(listIcon)
    IconAndProject.appendChild(myProject)
    projectDiv.appendChild(IconAndProject)
    projectDiv.appendChild(crossIcon)
    // console.log(project_items)
    project_items.appendChild(projectDiv)
    userInput.innerHTML=""
    confirmDiv.innerHTML=""
    crossIcon.addEventListener('click',()=>{
        project_items.removeChild(projectDiv)
    })
    runOnProjectItemClick()
   
}

function runOnProjectItemClick(){
    let project_items=document.querySelector('.project_Items')
    let prevElement=null
    project_items.childNodes.forEach((element)=>{
        element.addEventListener('click',()=>{
            if(prevElement){
                prevElement.style.fontWeight=""
            }
                
                element.style.fontWeight="bold"
                let content=document.querySelector('.content')
                content.innerHTML=""
                onProjectItemClick()
                prevElement=element
        })
    })
}

function onProjectItemClick(){
    let content=document.querySelector('.content')
    let addTodoDiv=document.createElement('div')
    let text=document.createElement('p')
    text.innerText="Add Item"
    addTodoDiv.classList.add('addTodoDiv')
    let addTodo=new Image()
    addTodo.classList.add('addTodo')
    addTodo.src=Add
    addTodoDiv.appendChild(addTodo)
    addTodoDiv.appendChild(text)
    content.appendChild(addTodoDiv)
    addTodo.addEventListener('click',()=>{
        createTodo()
    })
}