let gridDimension
let backgroundColor

dimensionButton=document.createElement('button')
dimensionButton.textContent='how many squares per a side?'
selections=document.querySelector('.selections')
selections.appendChild(dimensionButton)

dimensionButton.addEventListener('click',()=>{
    while(true){
        gridDimension=prompt('how many squares per a side?')
        if(gridDimension>100){
            alert('too large!')
            continue
        }else if(gridDimension<0||isNaN(gridDimension)){
            alert('invalid')
            continue
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

})

