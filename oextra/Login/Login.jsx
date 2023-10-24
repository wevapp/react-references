import React, { useState, useRef } from 'react'

const Login = () => {
  // this variable looks like a class or id in vanilla javascript
  // you need to attach into element as an attribute to select the
  // target element.
  const focus = useRef(null)
 
  // Static Account 
  const account1 = 'username'
  const pass = 'password'
  

  // variable container for account
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // another variable container for display account
  const [Udisplay, setUdisplay] = useState('')
  const [Pdisplay, setPdisplay] = useState('')

  // function to set the value from user input
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  // function to set the value from user input
  const handlepassword = (e) => {
    setPassword(e.target.value)
  }

  // function when click passed the value of 
  // username and password to display variable
  // then display the value, and set focus to
  // input text username
  const handleAccount = () => {
    if(account1 === username && pass === password){
        // pass the value to display value
        setUdisplay(username)
        setPdisplay(password)

        // focus to first textbox
        focus.current.focus()

        // clear the text field
        setUsername('')
        setPassword('')
    }else{
        alert('Invalid username or password')

        // clear the text field
        setUsername('')
        setPassword('')
    }
  }

  // triggered when enter the second textbox
  const handleKeydown = (e) => {
    if(e.key === 'Enter'){
      handleAccount()
    }
  }

  return (
    <div className='container'>
      <form action="" className='card border border-success p-3 m-3 rounded-2 w-25'>
        <h1>Log-in</h1>
        <label htmlFor="username"
          className='mb-2 fs-5 fw-bold'
        >Username</label>
        <input
          ref={focus} // use ref to focus cursor
          value={username} // purpose to clear the textfield, refer to handleAccount function
          onChange={handleUsername}
          name='username'
          placeholder='Username'
        />
        <br />
        <label htmlFor="password"
          className='mb-2 fs-5 fw-bold'
        >Password</label>
        <input
          type='password'
          value={password} // purpose to clear the textfield, refer to handleAccount function
          onChange={handlepassword}
          name='password'
          placeholder='Password'
          onKeyDown={handleKeydown}
          required
        />
        <br />

        <button
          className='px-5 py-2 rounded'
          onClick={handleAccount}
          >
            Login
        </button>
      </form>

      {/* attemp to display */}
      <p>{Udisplay}</p>
      <p>{Pdisplay}</p>
    </div>
  )
}

export default Login
