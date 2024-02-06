const closeButton = document.querySelector('.close')
const closeLike = document.querySelector('.like')
const cardContainer = document.querySelectorAll('.cards-container')

closeButton.addEventListener('click', () => {
    cardContainer.forEach((container) => {
        if (container.classList.contains('active')) {
            container.classList.remove('active')

        } else {
            container.classList.add('active')
        }
    })
})

closeLike.addEventListener('click', () => {
    cardContainer.forEach((container) => {
        if (container.classList.contains('active')) {
            container.classList.remove('active')


        } else {
            container.classList.add('active')
        }
    })
})