import React from 'react'
import Header from './Header'

const Headers = ({ headers }) => {
  return (
    <>
      <tr>
        {headers.map((header, i) =>
          <Header
            key={i}
            text={header.text}
            sub={header.sub}
          />
        )}
      </tr>
    </>
  )
}

export default Headers