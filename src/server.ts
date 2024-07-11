import app from "./app";


const PORT = process.env.APP_PORT || 8000


app.listen(PORT, () => {
    console.log(`google clone api server is running on ${PORT}`)
})