

let p = document.createElement('p');
let baseClassList='light-bg cadrant '
let classList: string = baseClassList + 'light-off'
let lightBg = document.createElement('div')



lightBg.setAttribute('class', classList)
lightBg.appendChild(p)


let roundShape = document.createElement('div')
roundShape.setAttribute('class', 'round-shape')

let toggleOnOff = document.createElement('div');
roundShape.appendChild(toggleOnOff);

toggleOnOff.setAttribute('class','toggle-button round-shape')

let updateHour = document.createElement('div'); 
roundShape.appendChild(updateHour)
updateHour.setAttribute('class','update-hour-button round-shape')



setInterval(()=> {
    let now = new Date()
let current = now.toLocaleDateString(undefined, {hour:'2-digit',minute:'2-digit',second:'2-digit', day:undefined}) 
p.innerText = `${current}`
}, 100)

document.body.appendChild(roundShape)
roundShape.appendChild(lightBg);

toggleOnOff.addEventListener('click', (e) =>{
    console.log(e)
    if(classList.includes('light-on')){
        classList = baseClassList + 'light-off'
       lightBg.setAttribute('class', classList)
    }
    else{
        classList = baseClassList + 'light-on'
       lightBg.setAttribute('class', classList)
    }

})

updateHour.addEventListener('click', e => {
    //blink using keyframes just set css class  

   
})

