import  AllTime from '/src/images/AllTime.png'
import Today from '/src/images/Today.png'
import Week from '/src/images/week.png'
import Home from '/src/images/home.png'
import Add from '/src/images/add.png'
import { createProject } from './CreateProject'
import { onSidebarElementsClick } from './sidebarElemetsClick'
export function sidebar(){
    let container=document.querySelector('.container')
    let content=document.querySelector('.content')
    let userInput=document.querySelector('.userInput')
    let projectdiv=document.querySelector('.projectDiv')
    //Making a sidebar
    let sidebar=document.createElement('div')
    sidebar.classList.add('sidebar')
    let topElements=document.createElement('div')
    topElements.classList.add('topElements')
    //adding home, today, this week and of all time projects here
    let homediv=document.createElement('div')
    homediv.classList.add('sidebar_divs',"homeDiv")
    let homeicon=new Image()
    homeicon.classList.add('sidebarIcons')
    homeicon.src=Home
    let home=document.createElement('p')
    home.innerText='Home'
    homediv.appendChild(homeicon)
    homediv.appendChild(home)
    //today
    let todaydiv=document.createElement('div')
    todaydiv.classList.add('sidebar_divs',"todayDiv")
    let todayicon=new Image()
    todayicon.src=Today
    todayicon.classList.add('sidebarIcons')
    let today=document.createElement('p')
    today.innerText='Today'
    todaydiv.appendChild(todayicon)
    todaydiv.appendChild(today)
    //this week
    let weekdiv=document.createElement('div')
    weekdiv.classList.add('sidebar_divs',"weekDiv")
    let weekicon=new Image()
    weekicon.src=Week
    weekicon.classList.add('sidebarIcons')
    let week=document.createElement('p')
    week.innerText='This Week'
    weekdiv.appendChild(weekicon)
    weekdiv.appendChild(week)
    //All time
    let alltimediv=document.createElement('div')
    alltimediv.classList.add('sidebar_divs',"alltimeDiv")
    let alltimeIcon=new Image()
    alltimeIcon.src=AllTime
    alltimeIcon.classList.add('sidebarIcons')
    let allTime=document.createElement('p')
    allTime.innerText="All Time"
    alltimediv.appendChild(alltimeIcon)
    alltimediv.appendChild(allTime)
   

    // Projects here
    let projects=document.createElement('div')
    projects.classList.add('projects')
    // Project title
    let project_title=document.createElement('h1')
    project_title.innerText="Projects"
    project_title.classList.add('project_title')
    //project items
    let project_items=document.createElement('div')
    project_items.classList.add("project_Items")
    //Create new Projects
    let createProject_div=document.createElement('div')
    let add_icon= new Image()
    add_icon.src=Add
    add_icon.classList.add('addIcon')
    createProject_div.appendChild(add_icon)
     //appending to sidebar then to the container
    topElements.appendChild(homediv)
    topElements.appendChild(todaydiv)
    topElements.appendChild(weekdiv)
    topElements.appendChild(alltimediv)
    sidebar.appendChild(topElements)
    projects.appendChild(project_title)
    projects.appendChild(project_items)
    sidebar.appendChild(projects)
    sidebar.appendChild(createProject_div)
    container.appendChild(sidebar)

    let sidebar_child=topElements.childNodes
    let prevElement=null
    sidebar_child.forEach((element)=>{
        element.addEventListener("click",()=>{
            if(prevElement){
                prevElement.style.fontWeight=""
            }
            element.style.fontWeight="bold"
            prevElement=element
        })
    })

    // 
    
   
    add_icon.addEventListener('click',()=>{
        createProject()   
        }
    )
    let topNodes=topElements.childNodes
    topNodes.forEach(element => {
        element.addEventListener('click',()=>{
            onSidebarElementsClick()
        })
        window.addEventListener('load',()=>{
            home.click()
        })
    });
    
}

