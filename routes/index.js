import express from 'express'
var router = express.Router();
import whatsappMsg from '../whatsapp/message.js'

router.get('/', (req, res) => {
  var data = {
    messaging_product: "whatsapp",
    to: NUMBER_ICLUDE_COUNTRY_CODE,
    type: "template",
    template: {
      name: "hello_world",
      language: {
        code: "en_US"
      }
    }
  }
  var version = API_VERSION //v14.0
  var accId = WHATSAPP_BUSINESS_ACCOUNT_ID
  var token = TOKEN
  whatsappMsg(token,data,version,accId).then((data)=>{
    console.log(data)
  }).catch((err)=>{
    console.log(err)
  })
})

export default router;
