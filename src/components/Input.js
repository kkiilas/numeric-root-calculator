import React from 'react'

const Input = ({ id, label, value, changeHandler }) => {
  return (
    <>
      <tr>
        <td class="label">
          <label for={id}>
            {label}
            </label>
        </td>
        <td>
          <input
            id={id}
            value={value}
            onChange={changeHandler}
          />
        </td>
      </tr>
    </>
  )
}

export default Input