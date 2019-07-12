module.exports = {
    getListings(req, res) {
        const db = req.app.get('db')
        db.get_listings()
            .then(dbRes => res.status(200).send(dbRes))
            .catch(err => res.status(500).send(`Couldn't add...`, err))
    },
    addListing(req, res) {
        let { name, address, state, city, zip, image, mortgage, rent } = req.body
        const db = req.app.get('db')
        db.add_listing([name, address, city, state, +zip, image, +mortgage, +rent])
            .then(res.status(200).send(console.log('Added Listing!')))
            .catch(err => res.status(500).send('Add Failure!', err))
    },
    deleteListing(req, res) {
        let { id } = req.params
        const db = req.app.get('db')
        db.delete_listing(id)
            .then(res.status(200).send(console.log('Deleted Listing!')))
            .catch(err => res.status(500).send(`Delete Failed!`, err))

    }
}

