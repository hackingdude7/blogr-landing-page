const links=document.querySelectorAll(".menu p")
const box1=document.querySelector(".box1")
const box2=document.querySelector(".box2")
const box3=document.querySelector(".box3")
const box=document.querySelector(".box")
links.forEach(link=>{
    link.addEventListener("click",()=>{
        if(link.innerHTML=="Product"){
            if(box1.classList.contains("active")){
                box1.classList.toggle("active")
                link.nextElementSibling.classList.toggle("reverse")
            }
            else{
                box1.classList.add("active")
                link.nextElementSibling.classList.add("reverse")
            }
        }
        if(link.innerHTML=="Company"){
            if(box2.classList.contains("active")){
                box2.classList.toggle("active")
                link.nextElementSibling.classList.toggle("reverse")

            }
            else{
                box2.classList.add("active")
                link.nextElementSibling.classList.add("reverse")
            }
        }
        if(link.innerHTML=="Connect"){
            if(box3.classList.contains("active")){
                box3.classList.toggle("active")
                link.nextElementSibling.classList.toggle("reverse")

            }
            else{
                box3.classList.add("active")
                link.nextElementSibling.classList.add("reverse")
            }
        }
        
    })
})