const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'circulation'

const data = require('./repos/dummyRepo.json')
const dataRepo = require('./repos/dummyRepo.js')

async function main() {
    const client = new MongoClient(url)
    try {
        await client.connect()
        const admin = client.db(dbName).admin()
        const results = await dataRepo.loadData(data)
        console.log(results)
        const items = await dataRepo.get()
        // console.log(await admin.serverStatus())
        console.log(items)
        // console.log(await admin.listDatabases())
    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
    }
}

exports.demo = main
