/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

let tog = document.querySelector("h1#header")
tog.addEventListener('click', function(e){
  toggleColor(e.target)
})

/***** Deliverable 2 *****/
document.addEventListener("DOMContentLoaded", () =>{
  let form = document.querySelector('#new-player-form')
    form.addEventListener("submit", e =>{
      e.preventDefault()
      console.log(e)
      let newplayer = {
        number: e.target.number.value,
        name: e.target.name.value,
        nickname: e.target.nickname.value,
        photo: e.target.photo.value,
        likes: 0
      }
      renderPlayer(newplayer)
    }
    )
})

/***** Deliverable 3 *****/
// let but = document.getElementsByClassName("player")
// but[0].querySelectorAll('p')
// but[0].querySelectorAll('p')[0]
// parseInt(but[0].querySelectorAll('p')[0].innerText,10)
let like_buttons = document.getElementsByTagName('button');
for (let i=0;i<like_buttons.length;i++){
  like_buttons[i].addEventListener("click", e => {
    let like_number =like_buttons[i].parentElement.childNodes[5].innerText
    // console.log(like_number)
    like_number = `${parseInt(like_number,10)+1} likes`
    like_buttons[i].parentElement.getElementsByClassName('likes')[0].innerText=like_number// This is a the number of lkes 
  })
}

