const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017'
const dbName = 'circulation'

function dummyRepo(){
    function loadData(data) {
        return new Promise(async(resolve, reject) => {
            const client = new MongoClient(url)
            try{
                await client.connect()
                const db = client.db(dbName)
                const results = await db.collection('names').insertMany(data)
                resolve(results)
            } catch (e) {

            } finally {
                await client.close()
            }
        })
    }
    function get() {
        return new Promise(async(resolve, reject) => {
            const client = new MongoClient(url)
            try{
                await client.connect()
                const db = client.db(dbName)
                const items = await db.collection('names').find()
                resolve(items.toArray())
            } catch (e) {

            } finally {
                await client.close()
            }
        })
    }
    return {loadData, get}
}

module.exports = dummyRepo()
