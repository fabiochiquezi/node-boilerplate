import { makeEmail } from './../Email';

describe('test "Email"', () => {
    it('should exist', () => {
        expect(makeEmail).toBeDefined()
    })

    it('must be success', () => {
        expect(makeEmail('test@test.com')).toEqual('test@test.com')
    })

    it('must return empty string if param is empty', () => {
        expect(makeEmail('')).toBe('')
    })

    it('wrong email, must return error', () => {
        expect(() => makeEmail('test')).toThrow('E-mail inválido')
        expect(() => makeEmail('test@')).toThrow('E-mail inválido')
        expect(() => makeEmail('test@test')).toThrow('E-mail inválido')
        expect(() => makeEmail('@test.com')).toThrow('E-mail inválido')
    })
})
