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
    body.classList.remove('bg-light')
    body.classList.add('bg-dark')
})