let AddToCart = document.getElementsByClassName('cart-btn')

for(let i = 0; i < AddToCart.length; i++){
    let  button = AddToCart[i]
    button.addEventListener('click',  function() {
        console.log('you clicked me')
    })
}


