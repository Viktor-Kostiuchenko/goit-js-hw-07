const refs = {
  amount: document.querySelector('[type]'),
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes')
}

refs.destroy.addEventListener('click', onDestroyBoxes)
refs.render.addEventListener('click', () => onCreateBoxes(refs.amount.value))


function onDestroyBoxes() {
  refs.boxes.innerHTML = ''
  refs.amount.value = ''
}

function onCreateBoxes(amount) {
  // по ТЗ не указано нужно ли добавлять новые div к уже существующим,
  // поэтому решил, что есть смысл в обнулении и добавил строку ниже
  refs.boxes.innerHTML = ''

  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div')
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    element.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    elements.push(element);
  }

  refs.boxes.append(...elements)

}


