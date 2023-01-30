import app from '../app.js'

const port = 3010

app.listen(process.env.PORT || 3010, () => {
    console.log(`http://localhost:${port}/`)
})