import Add from '/src/images/add-button.png'
import { createTodo } from './CreateProject'
export function onSidebarElementsClick(){
    let container=document.querySelector('.container')
    let home=document.querySelector(".homeDiv")
    let today=document.querySelector('.todayDiv')
    let weekly=document.querySelector('.weekDiv')
    let alltime=document.querySelector('.alltimeDiv')
    let content=document.querySelector('.content')

    // home.addEventListener("click",()=>{
    //     content.innerHTML=""

       
    // })
    let topElements=document.querySelector('.topElements')
    
    topElements.childNodes.forEach(element => {
        element.addEventListener('click',()=>{
            content.innerHTML=""
            let addHolder=document.createElement('div')
            addHolder.setAttribute('id','addholder')
            let addIcon=new Image()
            addIcon.setAttribute("id",'addIcon')
            addIcon.src=Add
            let para=document.createElement('p')
            para.innerText="Add Item"
            addHolder.appendChild(addIcon)
            addHolder.appendChild(para)
            content.appendChild(addHolder)

            addIcon.addEventListener('click',()=>{
                createTodo()
            })
        })
    });
      
}