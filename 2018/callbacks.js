// BIGWAVE SAMPLE
const bw_url = 'https://bigwave-api.herokuapp.com/'
const users = 'v1/users/:id'
const options = { crossDomain: true } 

const onResponse = (user) => console.log(`Hola, yo soy ${user.data.attributes.name} y mi id es ${user.data.id}`)

function user(id) {
  const url = `${bw_url}${users.replace(':id', id)}`
  $.get(url, options, onResponse) // url, data, success (callback), dataType
}

for (let i=1; i<=14; i++) {
  user(i)
}