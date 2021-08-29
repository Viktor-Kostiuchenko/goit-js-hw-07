const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients')

const makeListOfIngredients = names => {
  return names.map(name => {
    const itemEl = document.createElement('li')
    itemEl.textContent = name

    return itemEl
  })

}

const elements = makeListOfIngredients(ingredients)

listEl.append(...elements)