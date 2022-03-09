const faveBtn = document.querySelector('.save-restaurant');

const toggleRestaurant = (e) => {
    
    e.target.classList.toggle('saved')
    if(e.target.classList.contains('saved')){

        console.log('restaurant saved');
        e.target.src = e.target.dataset.saved;
    } else {

        console.log('restaurant removed');
        e.target.src = e.target.dataset.unsaved;
    }
}

faveBtn.addEventListener('click', toggleRestaurant)