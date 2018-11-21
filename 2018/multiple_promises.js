// BIGWAVE SAMPLE
const bw_url = 'https://bigwave-api.herokuapp.com/'
const pymes = 'v1/pymes/:id'
const options = { crossDomain: true } 

// PROMISES (avoid the callback hell)
function pyme(id) {
  return new Promise((resolve, reject) => {
    const url = `${bw_url}${pymes.replace(':id', id)}`

    $.get(url, options, function(data){
      resolve(data)
    }).fail(() => reject(id))
  })  
}

function onError() {
  console.log('ERROR')
}

var ids = [8,11,13]
var promises = ids.map(id => pyme(id))

console.log(promises)


Promise
  .all(promises)
  .then(bwpymes => console.log(bwpymes))
  .catch(onError)