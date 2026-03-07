import { expect, it } from 'vitest'

import * as nucleify from 'nucleify'

it('returns AdTextarea for "textarea"', (): void => {
  expect(nucleify.getComponent('textarea')).toBe(nucleify.AdTextarea)
})

it('returns AdInputText for "input-text"', (): void => {
  expect(nucleify.getComponent('input-text')).toBe(nucleify.AdInputText)
})

it('returns AdDatePicker for "date-picker"', (): void => {
  expect(nucleify.getComponent('date-picker')).toBe(nucleify.AdDatePicker)
})

it('returns AdSelect for "select"', (): void => {
  expect(nucleify.getComponent('select')).toBe(nucleify.AdSelect)
})

it('returns AdPassword for "password"', (): void => {
  expect(nucleify.getComponent('password')).toBe(nucleify.AdPassword)
})

it('returns AdInputText for unknown types', (): void => {
  expect(
    nucleify.getComponent('unknown-type' as unknown as nucleify.ComponentType)
  ).toBe(nucleify.AdInputText)
})

it('returns AdInputText for empty string', (): void => {
  expect(nucleify.getComponent('' as unknown as nucleify.ComponentType)).toBe(
    nucleify.AdInputText
  )
})
