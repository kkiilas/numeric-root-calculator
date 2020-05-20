import React, { useState } from 'react'
import Notification from './components/Notification'
import Forms from './components/Forms'
import Results from './components/Results'

const App = () => {
  const [root, setRoot] = useState('')
  const [valueIn, setValueIn] = useState('')
  const [powOfErr, setPowOfErr] = useState(-4)
  const [rows, setRows] = useState([])
  const [message, setMessage] = useState(null)

  const handleRootChange = (event) => setRoot(event.target.value)

  const handleValueInChange = (event) => setValueIn(event.target.value)

  const handlePowOfErrChange = (event) => setPowOfErr(event.target.value)

  const validate = (event) => {
    event.preventDefault()
    setRows([])
    if (isNaN(root) || isNaN(valueIn) || isNaN(powOfErr)) {
      if (isNaN(root)) {
        setMessage('Root must be a number')
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      } else if (isNaN(valueIn)) {
        setMessage('The term must be a number')
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      } else if (isNaN(powOfErr)) {
        setMessage('The power of ten for the margin of error must be a number')
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      }
    } else if (root < 1) {
      setMessage('Root must be a positive number greater than or equal to 1')
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    } else if (valueIn < 0) {
      if (root % 1 !== 0) {
        setMessage('Root must be an integer while the term is negative. Enter either a positive term or a root that is an integer.')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      } else if (root % 2 === 0) {
        setMessage('The result is a complex number. Enter either an odd root or a positive term.')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      } else {
        calculate()
      }
    } else {
      calculate()
    }
  }

  const calculate = () => {
    setMessage(null)
    setRows(rows.length = 0)
    let x = valueIn / root

    const error = (x) => {
      return Math.abs(1 - Math.pow(x, root) / valueIn)
    }

    let iterations = [{
      n: 0,
      xi: x,
      err: error(x)
    }]

    while (error(x) >= Math.pow(10, powOfErr)) {
      x = x - (Math.pow(x, root) - valueIn) / (root * Math.pow(x, root - 1))

      iterations = iterations.concat({
        n: iterations.length,
        xi: x,
        err: error(x)
      })

      if (iterations[iterations.length - 1].err === Infinity) {
        break
      }
    }
    setRows(rows.concat(iterations))
  }

  const reset = () => {
    setRows([])
    setRoot('')
    setValueIn('')
    setPowOfErr(-4)
  }

  const inputs = [{
    id: 'root',
    label: 'Root:',
    value: root,
    changeHandler: handleRootChange
  },
  {
    id: 'term',
    label: 'Term:',
    value: valueIn,
    changeHandler: handleValueInChange
  },
  {
    id: 'Margin of error',
    label: 'Margin of error is 10 to the power of:',
    value: powOfErr,
    changeHandler: handlePowOfErrChange
  }]

  const headers = [
    {
      text: 'Iteration',
      sub: '',
    },
    {
      text: 'x',
      sub: 'i',
    },
    {
      text: 'Error',
      sub: '',
    }
  ]

  return (
    <div>
      <h1>Numeric Root Calculator</h1>
      <Notification message={message} />
      <table>
        <thead>
          <tr>
            <th>

            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Forms
                reset={reset}
                validate={validate}
                inputs={inputs}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Results
                headers={headers}
                rows={rows}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App