
const addNumberToCart = () => {
    const cartAdded = document.getElementsByClassName('card-btn')
    for(var i = 0; i < cartAdded.length; i++){
      const button = cartAdded[i]
      let count = document.getElementById('count').value || 0
      button.addEventListener('click', () => {
        const addtoDiv = document.getElementById('count')
        if(typeof addtoDiv.value === Number ){
          count = parseInt(count )
          addtoDiv.value = count + 1
        } else {
            count  = parseInt(count)
            addtoDiv.value = count + 1
        }
      }) 
  }
  }
const removeItemfromCart = () => {
     const removeButtons = document.getElementsByClassName('remove-btn')  
     for(var i = 0; i < removeButtons.length; i++ ){
         const button = removeButtons[i]
         let count = document.getElementById('count').value 
         button.addEventListener('click', () => {
             const removeFromDiv = document.getElementById('count')
             if( typeof removeFromDiv.value === Number) {
                  decrementCount = parseInt(count)
                   removeFromDiv.value = decrementCount - 1
                } else {
                    decrementCount = parseInt(count)
                    removeFromDiv.value = decrementCount - 1
                }
         })
     }
  }
  const popup = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


