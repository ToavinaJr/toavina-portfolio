function addClassLists(div, classList) {
    for (item of classList) {
        div.classList.add(item)
    }
}

/************************************** */

let toavina = {
    header : {
        logo: {
            classList : ["logo", "neo-light", "container"],
            texts: ["Toavina", "Jr"],
            id: "logo"
        },
        img : {
            src: "./assets/images/menu-icon.png",
            alt: "image non trouvé",
            id: "menu-toggle",
            classList : ["bg-light", "neo-light", "container"]
        },
        nav : {
            classList : [
                "nav-menu", "bg-light", "container", "neo-light"
            ],
            navList: {
                navItem : {
                    texts : ["accueil", "apropos", "contact"],
                    classList : ["nav-item", "neo-light", "container"],
                    navLink : {
                        classList : ["nav-link", "txt-primary"]
                    }
                },
                classList : ["nav-list"],
            }
        }
    },
    accueil : {
        classList : ["txt-size-3", "txt-apropos", "bg-light", "neo-light", "container"],
        texts :  [
                    '<div class="txt-size-3">Bienvenu sur mon portfolio</div>',
                    '<div class="txt-size-3">Mon nom est<span class="txt-primary">Toavina Sylvianno</span></div>',
                    '<div class="txt-size-3">Je suis <span class="txt_2 txt-primary"></span></div>'
                ],
        container : {
            classList : ["text-container", "bg-light", "neo-light", "container"]
        }
    },

    apropos : {
        texts : ['<div class="txt-size-3 txt-apropos bg-light neo-light container"> Salut! Mon nom c\{est <span class="txt-primary">Toavina Sylvianno</span><br>Je suis en première année de master en <span class="txt-primary">Mathématiques et Informatique</span> à l\'université d\'Antananarivo <br>Actuellement, j\'apprends le <span class="txt-primary">Développement Web</span> chez <span class="txt-primary">Digital Training Center</span></div>']
    },

    contact : {
        formContainer : {
            classList : ["form-container", "bg-light", "txt-size-3", "neo-light", "container"],
        }
    }
}

let modeSombre = true
let toggle = document.getElementById('toggle')

/* ******************************************
*************       Header      *************
****************************************** */

let header = document.getElementById('header')

/* ***************************************** */

let logo = document.createElement('div')
logo.id = toavina.header.logo.id

for ( item of toavina.header.logo.classList){
    logo.classList.add(item)
}

for ( text of toavina.header.logo.texts)
    logo.innerHTML += '<span>' + text + '</span>'

/* ****************************************** */

let menuBtn = document.createElement('img')

addClassLists(menuBtn, toavina.header.img.classList)
menuBtn.src = toavina.header.img.src
menuBtn.id = toavina.header.img.id
menuBtn.alt = toavina.header.img.alt

/* ****************************************** */

let nav = document.createElement('nav')
addClassLists(nav, toavina.header.nav.classList)

let navList = document.createElement('ul')
addClassLists(navList, toavina.header.nav.navList.classList)

for (let i=0; i < toavina.header.nav.navList.navItem.texts.length; ++i) {
    let navItem = document.createElement('li')
    addClassLists(navItem, toavina.header.nav.navList.navItem.classList)

    let navLink = document.createElement('a')
    addClassLists(navLink, toavina.header.nav.navList.navItem.navLink.classList)

    navLink.textContent = toavina.header.nav.navList.navItem.texts[i]
    navLink.href = "#" + toavina.header.nav.navList.navItem.texts[i]

    navItem.append(navLink)
    navList.append(navItem)
}

nav.append(navList)

/* ****************************************** */

header.append(logo)
header.append(menuBtn)
header.append(nav)

/* ****************************************** */

let spanList= document.querySelectorAll('.logo span')

addClassLists(spanList[0], ["txt-primary"])
addClassLists(spanList[1], ["txt-dark"])

/* *******************************************
*************       M A I N      *************
******************************************* */

let main = document.querySelector('main')

let accueil = document.createElement('section')

accueil.id = "accueil"
addClassLists(accueil, toavina.accueil.classList)

let accueilContainer = document.createElement('div')
addClassLists(accueilContainer, toavina.accueil.container.classList )

for (item of toavina.accueil.texts){
    accueilContainer.innerHTML += item
}

accueil.append(accueilContainer)

/******************************************* */

let apropos = document.createElement('section')
apropos.id = 'apropos'

apropos.innerHTML += toavina.apropos.texts

/******************************************* */

let contact = document.createElement('section')
contact.id = 'contact'
let formContainer = document.createElement('div')
addClassLists(formContainer, toavina.contact.formContainer.classList)

formContainer.innerHTML += '<h2 class="txt-primary">Me contactez</h2>'
let form = document.createElement('form')
let inputContainer_1 = document.createElement('div')
inputContainer_1.classList.add('input-container')

inputContainer_1.innerHTML = '<input type="text" placeholder="Votre nom" required>'
inputContainer_1.innerHTML += '<input type="email" placeholder="Votre email" required>'

let inputContainer_2 = document.createElement('div')
inputContainer_2.classList.add('input-container')
inputContainer_2.innerHTML = '<input type="number" placeholder="Votre telephone">'
inputContainer_2.innerHTML += '<input type="text" placeholder="Objet de votre mail" required>'

form.append(inputContainer_1)
form.append(inputContainer_2)

form.innerHTML += '<textarea name="" id="" placeholder="Votre message" required></textarea>'
form.innerHTML += '<input class="txt-size-2 txt-light" type="submit" value="Envoyer">'
formContainer.append(form)
contact.append(formContainer)

main.append(accueil)
main.append(apropos)
main.append(contact)
let menu_toggle = document.getElementById('menu-toggle')
menu_toggle.addEventListener('click', () =>{
    let nav = document.querySelector('nav')
    nav.classList.toggle('active')
})

const txt_2 = new Typed('.txt_2',{
    strings: ["un DEV Front-end,","un autodidacte,","Malagasy."],
    typedSpeed: 200,
    backSpeed: 200,
    backDelay: 200,
    loop: true
})

toggle.addEventListener('click', function(){
    let containers = document.querySelectorAll('.container')
    if (modeSombre){
        containers.forEach(element => {
            element.classList.remove('neo-dark')
            element.classList.add('neo-light')
            element.style.color = '#212529'
        });
        modeSombre = false
    }
    else{
        containers.forEach(element => {
            element.classList.remove('neo-light')
            element.classList.add('neo-dark')
            element.style.color = '#f8f9fa'
        });
        modeSombre = true
    }
})