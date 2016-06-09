import 'babel-polyfill'

import {expect} from 'chai'
import * as calculator from '../src/calculator'

describe("Calculator", () => {

  it("should make sum", () => {
    expect(calculator.sum(1, 2)).to.equal(3)
  })

  it("should make subtraction", () => {
    expect(calculator.subtract(2, 1)).to.equal(1)
  })

})
