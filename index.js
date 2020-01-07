const express = require('express')

const app = express()

const page = `<html>
  <head>
    <title>My joke</title>
  </head>

  <body>
    <h1>Setup</h1>

    punchline
  </body>
</html>`

app.get(
  '/',
  (request, response) => {
    response.send(page)
  }
)

const port = 3033

app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)
