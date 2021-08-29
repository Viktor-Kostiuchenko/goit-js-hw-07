const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text')
}

refs.input.addEventListener('input', onChangeFontSize)

function onChangeFontSize(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`
}

