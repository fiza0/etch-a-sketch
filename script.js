let gridDimension
let backgroundColor

while(true){
    gridDimension=prompt('enter your prefered dimension')
    if(gridDimension>100){
        alert('too large!')
        continue
    }else if(gridDimension<=0){
        alert('invalid')
    }else break
}
for(i=0;i<gridDimension**2;i++){
    gridDiv=document.createElement('div')
    gridDiv.classList.add('grid-div')
    gridDivDimensions=(100/gridDimension)
    gridDiv.style.height=`${gridDivDimensions}%`
    gridDiv.style.width=gridDiv.style.height
    sketchZone=document.querySelector('.sketch-zone')
    sketchZone.appendChild(gridDiv)
}
gridDivs=document.querySelectorAll('.grid-div')
gridDivs.forEach(gridDiv=>{
    gridDiv.addEventListener('mouseover',()=>{
        backgroundColor='black'
        gridDiv.style.backgroundColor=`${backgroundColor}`
            
        
    })
})