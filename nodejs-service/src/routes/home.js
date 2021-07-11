const homePageRender = (req, res) => {
    res.send('Hello World')
}

const homePageParamRenderer = (req, res) => {
    console.log(req.params.id)
    res.send(`Hello ${req.params.id}`)
}

const homePageQueryRenderer = (req, res) => {
    console.log(req.query.id)
    res.send(`Hello ${req.query.id}`)
}

module.exports = {
    homePageRender,
    homePageParamRenderer,
    homePageQueryRenderer
}
