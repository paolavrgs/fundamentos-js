// BIGWAVE SAMPLE
const bw_url = 'https://bigwave-api.herokuapp.com/'
const users = 'v1/users/:id'
const options = { crossDomain: true } 

// PROMISES (avoid the callback hell)
function user(id) {
  return new Promise((resolve, reject) => {
    const url = `${bw_url}${users.replace(':id', id)}`

    $.get(url, options, function(data){
      resolve(data)
    }).fail(() => reject(id))
  })  
}

// user(1)
//   .then(function (user){
//     console.log(`Hola, yo soy ${user.data.attributes.name} y mi id es ${user.data.id}`)
//   })
//   .catch(function(id) {
//     console.log(`Sucedió un error al obtener el id ${id}`)
//   })

// PROMISES CHAINING
user(1)
  .then(bwuser => {
    console.log(`Hola, yo soy ${bwuser.data.attributes.name} y mi id es ${bwuser.data.id}`)
    return user(2)
  })
  .then(bwuser => {
    console.log(`Hola, yo soy ${bwuser.data.attributes.name} y mi id es ${bwuser.data.id}`)
    return user(3)
  })
  .then(bwuser => {
    console.log(`Hola, yo soy ${bwuser.data.attributes.name} y mi id es ${bwuser.data.id}`)
    return user(17) //error
  })
  .then(bwuser => {
    console.log(`Hola, yo soy ${bwuser.data.attributes.name} y mi id es ${bwuser.data.id}`)
  })
  .catch(function(id) {
    console.log(`Sucedió un error al obtener el id ${id}`)
  })
