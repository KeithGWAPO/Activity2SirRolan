const express = require("express")
const routes = require("./routers/post.route.js")

const app = express()

app.use(routes)


app.listen(4000, () => {
    console.log("server started!")
})