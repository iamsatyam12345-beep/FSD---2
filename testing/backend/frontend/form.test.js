import { describe,it,expect } from 'vitest'
import { validateForm } from './form'

describe("Form Test", ()=>{

 it("valid input", ()=>{
   expect(validateForm("Satyam")).toBe(true)
 })

 it("empty input", ()=>{
   expect(validateForm("")).toBe(false)
 })

})