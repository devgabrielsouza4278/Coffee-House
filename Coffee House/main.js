
// ACCORDION LIST

function initiAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion-img')

    if (accordionList.length) {

        function activeAccordion() {
            if (this.nextElementSibling.style.display == 'none') {
                this.nextElementSibling.style.display = 'block';
            } else {
                this.nextElementSibling.style.display = 'none'
            }
        }


        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

initiAccordion();




// SCROLL SUAVE

function initScrollSuave() {

    const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        document.body.style.overflow = "scroll";
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        const menuSection = document.querySelector('.menu');



        if (menuSection.classList.contains('on')) {
            menuSection.classList.remove('on')
        }


        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    }

    linkInterno.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

initScrollSuave();





// INTERAÇÃO- MENU MOBILE
function initiMenu() {
    let show = true;
    const menuSection = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle')

    menuToggle.addEventListener('click', () => {
        document.body.style.overflow = show ? "hidden" : "scroll";
        menuSection.classList.toggle("on", show)
        show = !show;
    })

}

initiMenu();



// INTERAÇÃO SIDEBAR CONTATO

function initShowSideBar() {
    const seta = document.querySelector('.show-hidden')
    const side = document.querySelectorAll('.side')

    console.log(seta, side)

    function showSideBar() {

        side.forEach((sideHidden) => {

            sideHidden.classList.toggle('SideOn')

        })
    }

    seta.addEventListener('click', showSideBar)
}

initShowSideBar ();