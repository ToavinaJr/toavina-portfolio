function addClassLists(div, classList) {
    for (item of classList) {
        div.classList.add(item)
    }
}

// const txt_2 = new Typed('.txt_2',{
//     strings: ["un DEV Front-end,","un autodidacte,","Malagasy."],
//     typedSpeed: 200,
//     backSpeed: 200,
//     backDelay: 200,
//     loop: true
// })

let toavina = {
    header : {
        logo: {
            classList : ["logo", "neo-light", "container"],
            texts: ["Toavina", "Jr"]
        },
        img : {
            source: "./assets/images/menu-icon.png",
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
        // texts :  ["Bienvenu sur mon portfolio", 'Mon nom est <s cl', 'Je suis <span class="txt_2 txt-primary"></span>']
        container : {
            classList : ["text-container", "bg-light", "neo-light", "container"]
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

for ( item of toavina.header.logo.classList){
    logo.classList.add(item)
}

for ( text of toavina.header.logo.texts)
    logo.innerHTML += '<span>' + text + '</span>'

/* ****************************************** */

let menu = document.createElement('img')

addClassLists(menu, toavina.header.img.classList)
menu.src = toavina.header.img.source
menu.id = toavina.header.img.id
menu.alt = toavina.header.img.alt

/* ****************************************** */

let nav = document.createElement('nav')
addClassLists(nav, toavina.header.nav.classList)

let navList = document.createElement('ul')
addClassLists(navList, toavina.header.nav.navList.classList)

let texts = toavina.header.nav.navList.navItem.texts;
for (let i=0; i < texts.length; ++i) {
    let navItem = document.createElement('li')
    addClassLists(navItem, toavina.header.nav.navList.navItem.classList)

    let navLink = document.createElement('a')
    addClassLists(navLink, toavina.header.nav.navList.navItem.navLink.classList)

    navLink.textContent = texts[i]
    navLink.href = "#" + texts[i]

    navItem.append(navLink)
    navList.append(navItem)
}

nav.append(navList)

/* ****************************************** */

header.append(logo)
header.append(menu)
header.append(nav)

/* ****************************************** */

let spanList= document.querySelectorAll('.logo span')
for (item of spanList) {
    addClassLists(item, ["txt-primary"])
}

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


/* *******************************************
*************       M A I N      *************
******************************************* */

let main = document.querySelector('main')

let accueil = document.getElementById('accueil')
addClassLists(accueil, toavina.accueil.classList)
let accueilContainer = document.createElement('div')
addClassLists(accueilContainer, toavina.accueil.container.classList )

accueil.append(accueilContainer)
main.append(accueil)

let menu_toggle = document.getElementById('menu-toggle')
menu_toggle.addEventListener('click', () =>{
    let nav = document.querySelector('nav')
    nav.classList.toggle('active')
    console.log('click')
})