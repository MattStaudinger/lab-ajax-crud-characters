class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
   return axios.get(this.BASE_URL + "/characters")
    .then(response => {
      return response.data
    })
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + "/characters/" + id)
    .then(response => {
      return response.data
  })
}

  createOneRegister (character) {
    if (character.name && character.occupation && character.weapon) {
   return axios.post(this.BASE_URL + "/characters/", character)
      .then(response => {
          return response.data
      })
      .catch(error => {
          console.log('Oh No! Error!');  
          console.log(error)
      })
    }
  }

  updateOneRegister (id, character) {
    
      return axios.put(this.BASE_URL + "/characters/" +id, character)
      .then(response => {
          return response.data
      })
      .catch(error => {
          console.log('Oh No! Error!');  
          console.log(error)
      })    
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + "/characters/" +id)
    .then (res => {
      return "Character has been successfully deleted"
    })
    .catch (err => {
      return "Character not found"
    })

  }
}
