const faveBtn = document.querySelector('.save-restaurant');
const starRating = document.querySelector('#star-rating');
const sliderRating = document.querySelector('#slider-rating');
const stars = starRating.querySelectorAll('img');
const toggler = document.querySelector('form .toggle .slider');
const box = document.querySelector('form .toggle input');

const toggleRestaurant = (e) => {

    e.target.classList.toggle('saved')
    if(e.target.classList.contains('saved')){

        e.target.src = e.target.dataset.saved;
    } else {

        e.target.src = e.target.dataset.unsaved;
    }
}

const updateRating = (value) => {
    starRating.style.width = `${value}vw`;
}

const setSliderRating = (e) => {
    e.preventDefault();
    let val = calcRating(e.target.value);
    updateRating(val);
}

const calcRating = (rating, stars = 5) => {
    const width = stars * 17.9;
    return ((rating / stars) * width);
}

const toggleBox = (e) => {
    // e.preventDefault();
    console.log('click');
    box.checked = !box.checked;
}

if(faveBtn){
    faveBtn.addEventListener('click', toggleRestaurant);
}

if(sliderRating){
    sliderRating.addEventListener('input', setSliderRating, {passive: false});
}

if(toggler){
    console.log(toggler);
    toggler.addEventListener('click', toggleBox);
}