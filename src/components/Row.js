import React from 'react'

const Row = ({ n, xi, err }) => {
  return (
    <>
      <tr class="iterations">
        <td>{n}</td>
        <td>{xi}</td>
        <td>{err}</td>
      </tr>
    </>
  )
}

export default Row