import {
    data
    } from './db/data.js'
    // console.log(data);

let main = document.querySelector('main')
for(let i of data) {
    let macdiv = document.createElement('div')
    let macimg = document.createElement('img')
    let macTitle = document.createElement('h3')
    let macPrice = document.createElement('span')
    let colors = document.createElement('div')
    let firstColor = document.createElement('div')
    let secondColor = document.createElement('div')
    let threeColor = document.createElement('div')
    let btnBuy = document.createElement('button')
    let btnBuyA = document.createElement('a')
    let hr = document.createElement('hr')
    
    let displaySize = document.createElement('p')
    let display = document.createElement('p')
    
    let chipImg = document.createElement('img')
    let chip = document.createElement('p')
    
    let ramImg = document.createElement('img')
    let ram = document.createElement('p')
    let ramSpan = document.createElement('span')
    
    let memory = document.createElement('p')
    let memorySpan = document.createElement('span')
    
    let batteryImg = document.createElement('img')
    let battery = document.createElement('p')
    
    let cameraImg = document.createElement('img')
    let camera = document.createElement('p')
    let cameraSpan = document.createElement('span')
    
    let weight = document.createElement('p')
    let weightSpan = document.createElement('span')
    let tocuhdiv = document.createElement('div')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')
    let img3 = document.createElement('img')
    let lastHr = document.createElement('hr')
    let a = document.createElement('a')
    a.href = '#'
    macdiv.classList.add('macdiv')
    macimg.classList.add('macimg')
    macTitle.classList.add('macTitle')
    macPrice.classList.add('macPrice')
    colors.classList.add('colors')
    firstColor.classList.add('firstColor')
    secondColor.classList.add('secondColor')
    threeColor.classList.add('threeColor')
    btnBuy.classList.add('btnBuy')
    hr.classList.add('hr')
    displaySize.classList.add('displaySize')
    display.classList.add('display')
    chipImg.classList.add('chipImg')
    chip.classList.add('chip')
    ramImg.classList.add('ramImg')
    ram.classList.add('ram')
    ramSpan.classList.add('ramSpan')
    memory.classList.add('memory')
    memorySpan.classList.add('memorySpan')
    weight.classList.add('weight')
    weightSpan.classList.add('weightSpan')
    tocuhdiv.classList.add('tocuhdiv')
    img1.classList.add('img1')
    img2.classList.add('img2')
    img3.classList.add('img3')
    
    batteryImg.classList.add('batteryImg')
    battery.classList.add('battery')
    
    cameraImg.classList.add('cameraImg')
    camera.classList.add('camera')
    cameraSpan.classList.add('cameraSpan')

    img1.src = `./assets/img/${i.specs.other.touch}`
    img2.src = `./assets/img/${i.specs.other.light}`
    img3.src = `./assets/img/${i.specs.other.volume}`

    macimg.src = `./assets/img/${i.img}` 
    chipImg.src = `./assets/img/${i.specs.chip.img}` 
    ramImg.src = `./assets/img/${i.specs.ram.img}` 
    batteryImg.src = `./assets/img/${i.specs.battery.img}` 
    cameraImg.src = `./assets/img/${i.specs.camera.img}` 
    weight.innerHTML = i.specs.weight
    weightSpan.innerHTML = 'Weight'
    
    btnBuyA.href = i.url
    macTitle.innerHTML = i.title
    macPrice.innerHTML = i.price
    btnBuyA.innerHTML = 'Buy'
    
    displaySize.innerHTML = i.specs.display.size
    display.innerHTML = i.specs.display.title
    
    chip.innerHTML = i.specs.chip.title
    
    ram.innerHTML = i.specs.ram.title
    ramSpan.innerHTML = i.specs.ram.description
    
    memory.innerHTML = i.specs.memory.size + i.specs.memory.type.toUpperCase()
    a.innerHTML = 'learn more >'
    battery.innerHTML = i.specs.battery.size
    
    camera.innerHTML = i.specs.camera.title
    cameraSpan.innerHTML = i.specs.camera.description
    firstColor.style.backgroundColor = i.colors[0]
    secondColor.style.backgroundColor = i.colors[1]
    threeColor.style.backgroundColor = i.colors[2]
    console.log(firstColor);
    btnBuy.append(btnBuyA)
    colors.append(
        firstColor,
        secondColor,
        threeColor,)
        tocuhdiv.append(img1, img2, img3)
        
    macdiv.append(
        macimg,
        macTitle,
        macPrice,
        colors,
        btnBuy,
        hr,
        displaySize,
        display,
        chipImg,
        chip,
        ramImg,
        ram,
        ramSpan,
        memory,
        memorySpan,
        batteryImg,
        battery,
        cameraImg,
        camera,
        cameraSpan,
        weight,
        weightSpan,
        tocuhdiv,
        lastHr,
        a
        )
        main.append(macdiv)
    }
    let macdivs = document.querySelectorAll('.macdiv')
    setTimeout(() => {
        macdivs[0].style.marginTop = '0%'
    }, 200)
    setTimeout(() => {
        macdivs[1].style.marginTop = '0%'
    }, 1000)
    setTimeout(() => {
        macdivs[2].style.marginTop = '0%'
    }, 1200)
    let tocuhdivs = document.querySelectorAll('.tocuhdiv')
    let  toouchdd = tocuhdivs[0]
    console.log(document.querySelectorAll('.tocuhdiv img')[1].remove());
    console.log(document.querySelectorAll('.tocuhdiv img')[1].remove());
