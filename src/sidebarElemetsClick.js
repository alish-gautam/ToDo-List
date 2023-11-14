import Add from '/src/images/add-button.png'
import { createTodo, onProjectItemClick } from './CreateProject'
export function onSidebarElementsClick(){
    let container=document.querySelector('.container')
    let home=document.querySelector(".homeDiv")
    let today=document.querySelector('.todayDiv')
    let weekly=document.querySelector('.weekDiv')
    let alltime=document.querySelector('.alltimeDiv')
    let content=document.querySelector('.content')

    let topElements=document.querySelector('.topElements')
 
    topElements.childNodes.forEach(element => {
 
        element.addEventListener('click',()=>{
            content.innerHTML=""
            onProjectItemClick()
    });
})
}