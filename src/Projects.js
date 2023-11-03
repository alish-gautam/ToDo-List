
export function myProjects(title,description,dueDate,priority,){
    let container=document.querySelector('.container')
    let content=document.createElement('div')
    content.classList.add('content')
    //Creating elements for title, description and all
    let projectDiv=document.createElement('div')
    let titleElement=document.createElement('h3')
    titleElement.innerText=title
    // description
    let descriptElement=document.createElement('p')
    descriptElement.innerText=description
    //dueDate
    let date=new Date()
    console.log(date)
    console.log(typeof date)
    //Priority
    let priorityDivs=document.createElement('div')
    //low
    let low=document.createElement('button')
    low.innerText="Low"
    //medium
    let medium=document.createElement('button')
    medium.innerText="Medium"
    //high
    let high=document.createElement('button')
    high.innerText="High"
    priorityDivs.appendChild(low)
    priorityDivs.appendChild(medium)
    priorityDivs.appendChild(high)
    //appending everything to project div and then to content and container
    projectDiv.appendChild(titleElement)
    projectDiv.appendChild(descriptElement)
    // projectDiv.appendChild(date)
    projectDiv.appendChild(priorityDivs)

    content.appendChild(projectDiv)
    container.appendChild(content)

}