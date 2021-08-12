import { AppError } from './../error';

describe('test "error"', () => {
    it('should exist', () => {
        expect(AppError).toBeDefined()
    })

    it('must be ok', () => {
        const err = new AppError('category', 'error test', 400)
        expect(err.type).toEqual('category')
        expect(err.message).toEqual('error test')
        expect(err.statusCode).toEqual(400)
    })

    it('should throw error', () => {
        expect(
            () => { throw new AppError('type', 'message', 400) }
        ).toThrow('message')
    })
})
