function loginModal(){
    const button = document.querySelector('#modalLogin')
    const modalContainer = document.querySelector('#modalContainer')


    button.addEventListener('click', () =>{
         modalContainer.showModal()

         closeModal()
    })
}

function closeModal(){
    const button = document.querySelector('#fecharModal')
    const modalContainer = document.querySelector('#modalContainer')

    button.addEventListener('click', () => {
        modalContainer.close()
    })
}

loginModal()
