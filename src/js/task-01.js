//* вариант А 
// const categoriesEl = document.querySelector('#categories')
// console.log(`В списке ${categoriesEl.children.length} категории.`)



// for (const element of categoriesEl.children) {
//   console.log(`Категория: ${element.firstElementChild.textContent}`)

//   console.log(`Количество элементов: ${element.lastElementChild.children.length}`)
  
// }



//* вариант B (больше как вопрос - можно ли вот так, через функцию решить данную таску?)

// const getCategoriesInfo = categories => {

//   console.log(`В списке ${categories.children.length} категории.`)

//   for (const element of categories.children) {
//     console.log(`Категория: ${element.firstElementChild.textContent}`)

//     console.log(`Количество элементов: ${element.lastElementChild.children.length}`)
//   }

// }

// getCategoriesInfo(document.querySelector('#categories'))