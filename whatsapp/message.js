import axios from 'axios';

export default (token,data,version,accId) => {
  return new Promise((resolve, reject) => {
    var url = `https://graph.facebook.com/${version}/${accId}/messages`
    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((done) => {
      resolve(done)
    }).catch((err) => {
      reject(err)
    })
  })
}