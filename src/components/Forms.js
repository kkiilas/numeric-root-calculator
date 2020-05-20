import React from 'react'
import Input from './Input'

const Forms = ({ reset, validate, inputs }) => {
  return (
    <div>
      <form id='reset' onSubmit={reset} />
      <form id='inputs' onSubmit={validate}>
        <table>
          <tbody>
            {inputs.map((input, i) =>
              <Input
                key={i}
                id={input.id}
                label={input.label}
                value={input.value}
                changeHandler={input.changeHandler}
              />)}
            <tr>
              <td>
              </td>
              <td class="buttons">
                <button form='inputs' type="submit" >Calculate</button>
                <button form='reset' type="submit" >Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Forms