# Whatsapp-Cloud-Message-Api-Node.js
This api is used to message to whatsapp number using node.js

This module create based on meta whatsapp documentation
<br>
#[DOCUMENTATION](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started)

<h5>Requirements</h5>

[Express JS](https://expressjs.com/)
<br>
[Axios](https://www.npmjs.com/package/axios)

<h6>Enter Commad On Terminal For Install All Package</h6>
npm install 

For Sent Whatsapp Message From Node.js Change Following Data In routers/index.js

<p>
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
    <br>
  var version = API_VERSION //v14.0
    <br>
  var accId = WHATSAPP_BUSINESS_ACCOUNT_ID
    <br>
  var token = TOKEN
    <br>
  </p>
  
  <h6>npm start Enter This Command On Terminal For Start</h6>
