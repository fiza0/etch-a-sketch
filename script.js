let gridDimension
let backgroundColor
let gridDivs=document.querySelectorAll('.grid-div')
selections=document.querySelector('.selections')

//create buttons
        //button that prompts user for dimensions
let dimensionButton=document.createElement('button')
dimensionButton.textContent='how many squares per a side?'
selections.appendChild(dimensionButton)
        //button that changes color to black
let blackButton=document.createElement('button')
blackButton.textContent='BLACK'
selections.appendChild(blackButton)
        //button that randomizes color
let rainbowButton=document.createElement('button')
rainbowButton.textContent='RAINBOW'
selections.appendChild(rainbowButton)
        //button that changes color back to white
let eraserButton=document.createElement('button')
eraserButton.textContent='ERASER'
selections.appendChild(eraserButton)
        //button that clears the canvas
let clearButton=document.createElement('button')
clearButton.textContent='CLEAR'
selections.appendChild(clearButton)

//add event listeners to buttons

dimensionButton.addEventListener('click',()=>{
    let gridDiv
    let gridDivDimensions
    //clears canvas before creating specified number of divs
    gridDivs.forEach(gridDiv=>{
        gridDiv.remove()
    })
    //validation:ensures input is a number and is between 0 and 100
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
    /*creates as many divs as the user specified(user_input^2) and assigns them their class.
    the divs are then given dimensions to ensure that there is a uniform number of divs per
    a row . the divs are then appended to the sketch zone. the divs are later made to wrap 
    into rows using flex box*/
    for(i=0;i<gridDimension**2;i++){
        gridDiv=document.createElement('div')
        gridDiv.classList.add('grid-div')
        gridDivDimensions=(100/gridDimension)
        gridDiv.style.height=`${gridDivDimensions}%`
        gridDiv.style.width=gridDiv.style.height
        sketchZone=document.querySelector('.sketch-zone')
        sketchZone.appendChild(gridDiv)
    }
    /*loops over each div in the sketch zone and adds an event listener that changes its color
    to black(or specified color) when it is hovered on */
    gridDivs=document.querySelectorAll('.grid-div')
    gridDivs.forEach(gridDiv=>{
        gridDiv.addEventListener('mouseover',()=>{
            gridDiv.style.backgroundColor=`${backgroundColor}`    
        })
    })

})
//disables rainbow button and changes color to black
blackButton.addEventListener('click',()=>{
    removeOtherButtonsHighlight()
    blackButton.classList.toggle('selected')
    window.removeEventListener('mousemove',getRandomColor)
    backgroundColor='black'
})
//everytime the mouse moves on the window,a random color is generated and used
rainbowButton.addEventListener('click',()=>{
    removeOtherButtonsHighlight()
    rainbowButton.classList.toggle('selected')
    let randomRedValue,randomGreenValue,randomBlueValue
    window.addEventListener('mousemove',getRandomColor)
})
//disables rainbow button and changes color to white
eraserButton.addEventListener('click',()=>{
    removeOtherButtonsHighlight()
    eraserButton.classList.toggle('selected')
    window.removeEventListener('mousemove',getRandomColor)
    backgroundColor='white'
})
//clears the canvas
clearButton.addEventListener('click',()=>{
    removeOtherButtonsHighlight()
    gridDivs.forEach(gridDiv=>{
        backgroundColor='white'
            gridDiv.style.backgroundColor=`${backgroundColor}`
    })
})
/*generates random color by randomizing red,green and blue values .This runs everytime
the cursor moves on the window*/
function getRandomColor(){
    randomRedValue=Math.floor(Math.random()*256)
    randomGreenValue=Math.floor(Math.random()*256)
    randomBlueValue=Math.floor(Math.random()*256)
    backgroundColor=`rgb(${randomRedValue},${randomGreenValue},${randomBlueValue})`
}
//unhighlights other buttons when a button is selected
function removeOtherButtonsHighlight(){
    buttons=document.querySelectorAll('button')
    buttons.forEach(button=>{
        button.classList.remove('selected')
    })
}

