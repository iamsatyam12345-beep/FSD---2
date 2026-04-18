import { test, expect } from 'vitest'

function validateForm(name){
  return name.length > 0;
}

test('valid input', () => {
  expect(validateForm("Satyam")).toBe(true)
})