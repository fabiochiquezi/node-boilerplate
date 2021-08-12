
export const makePassword = (password: string): string => {
  const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/
  const minLengthPassword = 8
  const errors = {
    min: `A senha deve conter no mínimo ${minLengthPassword} caracteres`,
    special: 'A senha não deve conter caracteres especiais ou espaço em branco'
  }

  if (!password) return password
  if (!regex.test(password)) throw new Error(errors.special)
  if (password.length < minLengthPassword) throw new Error(errors.min)

  return password
}
