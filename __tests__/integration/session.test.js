const request = require('supertest')

const app = require('../../src/app')
const truncate = require('../utils/truncate')
const factory = require('../factories')

describe('Authentication', () => {
	beforeEach(async () => {
		await truncate()
	})

	it('Should authenticate with valid credentials', async () => {
		const user = await factory.create('User', {
			password: '123123'
		})

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				password: '123123'
			})

		expect(response.status).toBe(200)
	})

	it('should not authenticate with invalid email', async () => {
		const user = await factory.create('User')

		const response = await request(app)
			.post('/sessions')
			.send({
				email: 'nubel@me.com',
				password: user.password
			})

		expect(response.status).toBe(401)
	})

	it('should not authenticate with invalid password', async () => {
		const user = await factory.create('User')

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				password: '123123'
			})

		expect(response.status).toBe(401)
	})

	it('should return a jwt token when authenticated', async () => {
		const user = await factory.create('User', {
			password: '123123'
		})

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				password: '123123'
			})

		expect(response.body).toHaveProperty('token')
	})
})
