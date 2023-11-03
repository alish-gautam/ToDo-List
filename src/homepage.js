import { sidebar } from './sidebar'
import headingIcon from '/src/images/to-do-list.png'
export function homePage(){
    let container=document.querySelector('.container')
    container.classList.add('container')
    let headingdiv=document.createElement('div')
    headingdiv.classList.add('headingdiv')
    // title Heading
    let heading=document.createElement('h1')
    heading.classList.add('heading')
    heading.innerText='TODO'
    //title Image
    let titleImg=new Image()
    titleImg.classList.add('titleImg')
    titleImg.src=headingIcon
    //appending heading and image to container
    headingdiv.appendChild(titleImg)
    headingdiv.appendChild(heading)
    container.appendChild(headingdiv)
    // calling sidebar here
    sidebar()
    
}