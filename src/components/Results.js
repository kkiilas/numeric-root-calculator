import React from 'react'
import Headers from './Headers'
import Rows from './Rows'

const Results = ({ headers, rows }) => {
  if (rows.length === 0) {
    return null
  }
  return (
    <>
      <table>
        <thead>
          <Headers headers={headers} />
        </thead>
        <tbody>
          <Rows rows={rows} />
        </tbody>
      </table>
    </>
  )
}

export default Results