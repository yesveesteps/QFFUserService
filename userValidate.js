
const express = require('express')
const app = express()
const port = 3000

app.get('/qffvalidateuser', (req, res) => {

  const receivedQuery = JSON.stringify(req.query);
  
  console.log(`querystring is: ${receivedQuery}`)
  if(receivedQuery!=null && receivedQuery.includes("test1@gmail.com") && receivedQuery.includes("secret123") ){
    res.sendStatus(200)
  }else{
      res.sendStatus(404)
  }
  
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})