# Whatsapp-Cloud-Message-Api-Node.js
This api is used to message to whatsapp number using node.js

This module create based on meta whatsapp documentation
<a href="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started"><h4>DOCUMENTATION</h4></a>

<h5>Requirements</h5>

<a href="https://expressjs.com/"><h6>Express JS</h6></a>
<a href="https://www.npmjs.com/package/axios"><h6>Axios</h6></a>

<h6>Enter Commad On Terminal For Install All Package</h6>
npm install 

For Sent Whatsapp Message From Node.js Change Following Data In routers/index.js

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
  
  <h6>npm start Enter This Command On Terminal For Start</h6>
