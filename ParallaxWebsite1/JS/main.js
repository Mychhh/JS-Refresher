let background = document.getElementById('background')
let moon = document.getElementById('moon')
let mountain = document.getElementById('mountain')
let road = document.getElementById('road')
let text = document.getElementById('text')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    console.log(value)
    console.log(value * 0.5)

    // background.style.top = value * 0.5 + 'px'
    // moon.style.left = value * 0.5 + 'px'
    // mountain.style.top = -value * 0.15 + 'px'
    // road.style.top = value * 0.15 + 'px'
    // text.style.top = value / 1.2 + 'px'

    background.style.transform = `translateY(${value * 0.5}px)`
    moon.style.transform = `translateX(${value * 0.5}px)`
    mountain.style.transform = `translateY(${-value * 0.15}px)`
    road.style.transform = `translateY(${value * 0.15}px)`
    text.style.transform = `translateY(${value / 1.2}px)`

})
