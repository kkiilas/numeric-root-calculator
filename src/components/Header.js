import React from 'react'

const Header = ({ text, sub }) => {
   return (
    <>
      <th>
        {text}
        <sub>
        {sub}
        </sub>
      </th>
    </>
  )
}

export default Header