// BIGWAVE SAMPLE
const bw_url = 'https://bigwave-api.herokuapp.com/'
const users = 'v1/users/:id'
const options = { crossDomain: true } 

// CALLBACK HELL AND ERRORS
function user(id, callback) {
  const url = `${bw_url}${users.replace(':id', id)}`
  
  $.get(url, options, function(user){
    console.log(`Hola, yo soy ${user.data.attributes.name} y mi id es ${user.data.id}`)

    if (callback) {
      callback()
    }
  }).fail(() => //error
    console.log(`ERROR: no se pudo encontrar el ${id}`)
  )
}

user(1, function() {
  user(2, function(){
    user(3, function(){
      user(4, function(){
        user(17) //It doesn't exists
      })
    })
  })
})