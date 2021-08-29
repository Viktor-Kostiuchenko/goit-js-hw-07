const categoriesEl = document.querySelector('#categories')
console.log(`В списке ${categoriesEl.children.length} категории.`)

for (const element of categoriesEl.children) {
  console.log(`Категория: ${element.firstElementChild.textContent}`)
  console.log(`Количество элементов: ${element.lastElementChild.children.length}`) 
}
