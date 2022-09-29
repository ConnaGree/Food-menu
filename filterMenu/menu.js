const items = [
    {
        id : 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        imgClass: "image",
        img: "images/item-1.jpeg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle,
        hammock freegan copper mug whatever cold-pressed`
    },
    {
        id : 2,
        title: "Dinner double",
        category: "dinner",
        price: 13.99,
        img: "images/item-2.jpeg",
        imgClass: "image-2",
        desc: ` vaporware iPhone mumblecore selvage raw denim slow-carb leggings
        gochujang helvetica man braid jianbing. Marfa thundercats`
    },
    {
        id : 3,
        title: "Godzilla Milkshake",
        category: "shake",
        price: 6.99,
        img: "images/item-3.jpeg",
        imgClass: "image-3",
        desc: ` ombucha chillwave fanny pack 3 wolf moon street art photo booth
        before they sold out organic viral.`
    },
    {
        id : 4,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: "images/item-4.jpeg",
        imgClass: "image-4",
        desc: ` Shabby chic keffiyeh neutra snackwave pork belly shoreditch.
        Prism austin mlkshk truffaut,`
    },
    {
        id : 5,
        title: "Egg Attack",
        category: "lunch",
        price: 13.99,
        img: "images/item-5.jpeg",
        imgClass: "image-5",
        desc: ` franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`
    },
    {
        id : 6,
        title: "Oreo Dream",
        category: "shake",
        price: 13.99,
        img: "images/item-6.jpeg",
        imgClass: "image-6",
        desc: ` Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
    },
    {
        id : 7,
        title: "Bacon Overflow",
        category: "breakfast",
        price: 8.99,
        img: "images/item-7.jpeg",
        imgClass: "image-7",
        desc: ` carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`
    },
    {
        id : 8,
        title: "American Classic",
        category: "lunch",
        price: 12.99,
        img: "images/item-8.jpeg",
        imgClass: "image-8",
        desc: ` on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`
    },
    {
        id : 9,
        title: "Qurantine Buddy",
        category: "shake",
        price: 16.99,
        img: "images/item-9.jpeg",
        imgClass: "image-9",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
    },
    {
        id : 10,
        title: "Steak Dinner",
        category: "dinner",
        price: 16.99,
        img: "images/item-10.jpeg",
        imgClass: "image-10",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
    }
]
const itemContainer = document.querySelector('.item-wrap')
const filterBtns = document.querySelectorAll('.filter')

filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id
        const filteredCategory = items.filter((element) => {
            if(element.category === category){
                return element
            }
        })
        if(category === 'all'){
            displayMenuItem(items)
        }else{
            displayMenuItem(filteredCategory)
        }
    })
})



window.addEventListener('DOMContentLoaded', () => {
    displayMenuItem(items) 
})

function displayMenuItem(menuItem){
    let displayItem = menuItem.map((item) => {

        return `
        <div class="menu-item">
        <div class="${item.imgClass} img"></div>
        <div class="details">
          <div class="name-price">
            <h3>${item.title}</h3>
            <p class="price">$${item.price}</p>
          </div>
          <p class="description">
            ${item.desc}
          </p>
        </div>
      </div>
      `
     })
    
    displayItem = displayItem.join('')
    itemContainer.innerHTML = displayItem
}

// Sidebar thing

const sideBar = document.querySelector('.sidebar')
const menuBtn = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {
    sideBar.classList.toggle('show-sidebar')
})