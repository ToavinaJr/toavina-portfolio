// const txt_2 = new Typed('.txt_2',{
//     strings: ["un DEV Front-end,","un autodidacte,","Malagasy."],
//     typedSpeed: 200,
//     backSpeed: 200,
//     backDelay: 200,
//     loop: true
// })

let modeSombre = true
let toggle = document.getElementById('toggle')


toggle.addEventListener('click', function(){
    let body = document.querySelector('body')
    let navItem = document.querySelectorAll('li')
    if (modeSombre){
        body.classList.remove('bg-dark')
        body.classList.add('bg-light')
        navItem.forEach(element => {
            element.classList.remove('neo-dark')
            element.classList.add('neo-light')
        });
        modeSombre = false

    }
    else{
        body.classList.remove('bg-light')
        body.classList.add('bg-dark')
        navItem.forEach(element => {
            element.classList.remove('neo-light')
            element.classList.add('neo-dark')
        });
        modeSombre = true
    }
})