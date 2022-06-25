fetch('https://shop-items-server.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
            const cards = createCards(data)
            let container = document.querySelector('.item_cards')
            for(let card of cards){
                container.appendChild(card)
            }
    })
    
let createCards = (data) => {
    
    const cards = [];

    for (let item of data) {
    
    let itemCard = document.createElement('div')
    itemCard.className = 'body_item_card'
    itemCard.innerHTML = `
        <img src=“/img/${item.imgUrl}” alt="img_card" />
        <div class="item_card_info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <button class="card_button">Add to cart</button> 
            <div class="bottom_text">
                <img src="./img/icons/like_filled.svg">
                <p>${item.orderInfo}</p>
            </div>
        </div>
    `
    cards.push(itemCard)
 
}
    return cards
}
