const request = require('supertest')
const {Genre } = require('../../models/genre')
let server;

describe('/api/genres' , () => {
    beforeEach(() => {
        server = require('../../index')
    })
    afterEach(async () => {
        server.close()
        await Genre.deleteMany()
    })

    describe('GET /' ,() => {
        it('should return all genres', async() => {
            await Genre.collection.insertMany([
                {name:'genre1'},
                {name:'genre2'},
            ])
    
            const response = await request(server).get('/api/genres')

            expect(response.status).toBe(200)
            expect(response?.body?.length).toBe(2)
            expect(response.body.some(g => g.name === 'genre1')).toBeTruthy()
            expect(response.body.some(g => g.name === 'genre2')).toBeTruthy()
        })
    })


    // describe('GET /:id' ,() => {
    //     it('should return a single genre',async() => {
    //         const genre = new Genre({name:'genre1'})
    //         await genre.save()

    //         const response = await request(server).get('/api/genres/' + genre._id)
    //         expect(response.status).toBe(200)
    //         expect(response.body).toHaveProperty('name',genre.name)
    //     })

    //     it('should return 404 if invalid id is passed', async() => {
    //         const response = await request(server).get('/api/genres/1')
    //         expect(response.status).toBe(404)
    //     })
    // })
}) 