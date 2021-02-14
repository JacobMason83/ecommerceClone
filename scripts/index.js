//Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const cartAdded = document.getElementsByClassName('card-btn')
for(var i = 0; i < cartAdded.length; i++){
  const button = cartAdded[i]
  let count = 0
  button.addEventListener('click', () => {
    const addtoDiv = document.getElementsByClassName('.count-custom')
    if(addtoDiv.innerHTML === null ){
      addtoDiv.innerHTML = count + 1
    } else {
      addtoDiv.innerHTML = count + 1
    }
  })
}