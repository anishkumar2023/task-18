// var anish = document.getElementById("anish")
// var imgs = document.createElement("img")
// imgs.setAttribute("src","man.avif")
// anish.style="text-align:center;border:2px solid black;overflow:hidden;display:inline-block; background-color:pink;color:green;border-radius:20px;"
// var value = document.createElement("h1")
// value.innerHTML = "Maamannan"
// <!-- value.text-align:center;" -->
// anish.append(imgs)
// anish.append(value)








var values=[{img:"img-1.jpg",Tittle:"WALTER WHITE",chef:"Master cheif"},{img:"img-2.jpg",Tittle:"old cheif",chef:"Master cheif",avg:"price-20rupess"},{img:"img-3.jpg",Tittle:"Women cheif",chef:"Master cheif",avg:"price-20rupess"}]

var section=document.getElementById("section")
var container=document.createElement("div")

let head=document.createElement("h1")
container.append(head)
head.innerHTML="Oue Profficonal"

let he=document.createElement("span")
head.append(he)
he.innerHTML=" cheif"

let head1=document.createElement("p")
container.append(head1)
head1.innerHTML="Ut possimus quit temporibus culpa veleit eveniet modi omnnis esyt expediate at voluptas atque autem."

var row=document.createElement("div")
section.appendChild(container)
container.appendChild(row)
container.setAttribute("class","container")
row.setAttribute("class","row")




let name=values.map((e)=>{	
let child1=document.createElement("div")
let child2=document.createElement("div")

child1.setAttribute("class","col-12 col-lg-4 col-md-6")
child2.setAttribute("class","text-center bg-light")
let img1=document.createElement("img")
img1.setAttribute("src",e.img)
child1.appendChild(img1)
let title=document.createElement("h4")
title.innerHTML=e.Tittle
child2.appendChild(title)
let title2=document.createElement("h6")
title2.innerHTML=e.chef
child2.appendChild(title2)
row.appendChild(child1)
child1.appendChild(img1)
child1.appendChild(child2)

let start1=document.createElement("i")
let start2=document.createElement("i")
let start3=document.createElement("i")
let start4=document.createElement("i")
let start5=document.createElement("i")
start1.setAttribute("class","bi bi-facebook")
start2.setAttribute("class","bi bi-instagram")
start3.setAttribute("class","bi bi-twitter")
start4.setAttribute("class","bi bi-linkedin")
child2.appendChild(start1)
child2.appendChild(start2)
child2.appendChild(start3)
child2.appendChild(start4)
child2.appendChild(start5)
})
