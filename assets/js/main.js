const txt_2 = new Typed('.txt_2',{
    strings: ["un DEV Front-end,","un autodidacte,","Malagasy."],
    typedSpeed: 200,
    backSpeed: 200,
    backDelay: 200,
    loop: true
})

let modeSombre = true
let toggle = document.getElementById('toggle')
let menu_toggle = document.querySelector('#menu-toggle')

toggle.addEventListener('click', function(){
    let containers = document.querySelectorAll('.container')
    if (modeSombre){
        containers.forEach(element => {
            element.classList.remove('neo-dark')
            element.classList.add('neo-light')
        });
        modeSombre = false

    }
    else{
        containers.forEach(element => {
            element.classList.remove('neo-light')
            element.classList.add('neo-dark')
        });
        modeSombre = true
    }
})

menu_toggle.addEventListener('click', () =>{
    let nav = document.querySelector('nav')
    nav.classList.toggle('active')
    console.log('click')
})