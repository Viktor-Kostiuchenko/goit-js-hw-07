const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output')
}

refs.nameInput.addEventListener('input', onChangeUsername )

function onChangeUsername(event) {
  event.currentTarget.value ?
    refs.nameOutput.textContent = event.currentTarget.value  :
    refs.nameOutput.textContent = 'незнакомец'

}