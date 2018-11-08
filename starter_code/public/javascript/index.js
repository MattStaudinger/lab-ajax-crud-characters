const charactersAPI = new APIHandler("http://localhost:8000")
let characterContainer = document.querySelector(".characters-container")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(res => {
      characterContainer.innerHTML = ""
      for (let character = 0; character < res.length; character++) {
        characterContainer.innerHTML += `
        <div class="character-info">
        <div class="name">${res[character].name}</div>
        <div class="occupation">${res[character].occupation}</div>
        <div class="cartoon">${res[character].cartoon}</div>
        <div class="weapon">${res[character].weapon}</div>
      </div>
      `
      }
      console.log(res)
    })

  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister(Number(document.getElementById("inputFetch").value))
    .then (res => {
      characterContainer.innerHTML = `
      <div class="character-info">
      <div class="name">Name: ${res.name}</div>
      <div class="occupation">Occupation: ${res.occupation}</div>
      <div class="cartoon">Cartoon: ${res.cartoon}</div>
      <div class="weapon">Weapon: ${res.weapon}</div>
    </div>
    `

    })
  }
  
  document.getElementById('delete-one').onclick = function(){
        charactersAPI.deleteOneRegister(Number(document.getElementById("inputDelete").value))
        .then (res => {
          if (res === "Character has been successfully deleted")   {
          document.getElementById("delete-one").style.backgroundColor = "green";
          } else {
          document.getElementById("delete-one").style.backgroundColor = "red";
          }
        })
        .catch (err => {
        })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault()
    
    let editId = document.getElementById("edit-id").value
    let editName = document.getElementById("edit-name").value
    let editOccupation = document.getElementById("edit-occupation").value
    let editWeapon = document.getElementById("edit-weapon").value
    let editCartoon = document.getElementById("edit-cartoon").checked
    
    let newCharacter = {
    name: editName,
    occupation: editOccupation,
    weapon: editWeapon,
    cartoon: editCartoon
    }
    
    console.log("Test")
    
    charactersAPI.updateOneRegister(editId, newCharacter )
    
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault()
    let inputName = document.getElementById("input-name").value
    let inputOccupation = document.getElementById("input-occupation").value
    let inputWeapon = document.getElementById("input-weapon").value
    let inputCartoon = document.getElementById("input-cartoon").checked

    let newCharacter = {
      name: inputName,
      occupation: inputOccupation,
      weapon: inputWeapon,
      cartoon: inputCartoon
    }

    charactersAPI.createOneRegister(newCharacter)  
  }
})
