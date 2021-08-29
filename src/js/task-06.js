const refs = {
  input: document.querySelector('[data-length]'),
}

refs.input.addEventListener('blur', onCheckDataLength)

function onCheckDataLength(event) {
    if (Number(event.currentTarget.dataset.length) === event.currentTarget.value.length) {
      refs.input.classList.remove('invalid')
      refs.input.classList.add('valid')
    } else if (event.currentTarget.value.length === 0){
      refs.input.classList.remove('invalid')
      refs.input.classList.remove('valid')
    } else {
      refs.input.classList.remove('valid')
      refs.input.classList.add('invalid')
    }
}







  

