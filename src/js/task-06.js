const refs = {
  input: document.querySelector('[data-length]'),
}

refs.input.addEventListener('blur', onCheckDataLength)

function onCheckDataLength(event) {
    Number(event.currentTarget.dataset.length) === event.currentTarget.value.length ?
        setClass('valid', 'invalid') :
        setClass('invalid', 'valid')
}

function setClass(add, remove) {
  refs.input.classList.add(add)
  refs.input.classList.remove(remove)
}






  

