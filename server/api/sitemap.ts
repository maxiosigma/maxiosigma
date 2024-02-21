export default defineSitemapEventHandler(async (e) => {
    console.log('aaaaaa')

    return [
        {
            loc: '/go-to-mw',
            lastmod: new Date()
        }
    ]
})
