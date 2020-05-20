import React from 'react'
import Row from './Row'

const Rows = ({ rows }) => {
  return (
    <>
      {rows.map((row, i) =>
        <Row
          key={i}
          n={row.n}
          xi={row.xi}
          err={row.err}
        />
      )}
    </>
  )
}

export default Rows