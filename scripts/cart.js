let AddToCart = document.getElementById('btn')

for(let i = 0; i < AddToCart.length; i++){
    let  button = AddToCart[i]
    button.addEventListener('click', function(){
        console.log('you clicked me')
    })
}


