const { User } = require('../../src/app/models')

describe('Authentication', () => {
	it('Should create a user', async () => {
		const user = await User.create({
			name: 'nubelsondev',
			email: 'nubel@me.com',
			password_hash: '1234567890'
		})

		console.log(user)

		expect(user.email).toBe('nubel@me.com')
	})
})
