const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const collectionEl = document.querySelector('#gallery')
  collectionEl.style.listStyle = 'none'
  collectionEl.style.display = 'grid'
  collectionEl.style.gridTemplateColumns = '400px 400px 400px'
  collectionEl.style.gridColumnGap = '50px'


const createElementsOfGallery = options => {
  return options.map(option => {
    const itemEl = document.createElement('li')
    const imageEl = document.createElement('img')
    imageEl.src = option.url
    imageEl.alt = option.alt
    imageEl.width = '400'
  
    itemEl.append(imageEl)

    return itemEl
  })
}

const elements = createElementsOfGallery(images)
collectionEl.append(...elements)



