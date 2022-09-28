const nav       = document.querySelector('.navbar');
const navToggle = document.querySelector('.navbar__toggle');

navToggle.onclick = () => {
    let active = nav.classList.contains('active');

    if (active) nav.classList.remove('active');
    else        nav.classList.add('active');
}