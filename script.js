let gridDimension
let backgroundColor

dimensionButton=document.createElement('button')
dimensionButton.textContent='how many squares per a side?'
selections=document.querySelector('.selections')
selections.appendChild(dimensionButton)

dimensionButton.addEventListener('click',()=>{
    gridDimension=prompt('how many squares per a side?')
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

