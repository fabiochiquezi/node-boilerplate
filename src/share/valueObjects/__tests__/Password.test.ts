import { makePassword } from './../Password';

describe.only('test "makePassword"', () => {
    it('should exist', () => {
        expect(makePassword).toBeDefined()
    })

    it('must be success', () => {
        expect(makePassword('test12345')).toEqual('test12345')
    })

    it('must return empty string if param is empty', () => {
        expect(makePassword('')).toBe('')
    })

    it('wrong password, must return error', () => {
        const minLengthPassword = 8
        const errors = {
            min: `A senha deve conter no mínimo ${minLengthPassword} caracteres`,
            special: 'A senha não deve conter caracteres especiais ou espaço em branco',
          }

        expect(() => makePassword('test')).toThrow(errors.min)
        expect(() => makePassword('test12345á')).toThrow(errors.special)
        expect(() => makePassword('test1 2345')).toThrow(errors.special)
    })
})
