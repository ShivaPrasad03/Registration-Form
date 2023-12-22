import {Component} from 'react'

import './index.css'

export default class RegistrationForm extends Component {
  state = {
    FirstName: '',
    LastName: '',
    FirstNameError: false,
    LastNameError: false,
    notSubmit: true,
  }

  first = event => {
    this.setState({FirstName: event.target.value})
  }

  last = event => {
    this.setState({LastName: event.target.value})
  }

  firstBlur = event => {
    if (event.target.value.length === 0) {
      this.setState({FirstNameError: true})
    } else {
      this.setState({FirstNameError: false})
    }
  }

  lastBlur = event => {
    if (event.target.value.length === 0) {
      this.setState({LastNameError: true})
    } else {
      this.setState({LastNameError: false})
    }
  }

  submit = event => {
    event.preventDefault()
    const {FirstName, LastName} = this.state
    if (FirstName.length === 0 && LastName.length === 0) {
      this.setState({FirstNameError: true})
      this.setState({LastNameError: true})
    } else if (LastName.length === 0) {
      this.setState({LastNameError: true})
    } else if (FirstName.length === 0) {
      this.setState({FirstNameError: true})
    } else {
      this.setState({notSubmit: false})
    }
  }

  newForm = () => {
    this.setState({notSubmit: true, FirstName: '', LastName: ''})
  }

  render() {
    const {
      FirstName,
      FirstNameError,
      LastName,
      LastNameError,
      notSubmit,
    } = this.state
    return (
      <div className="cont">
        {notSubmit ? (
          <div className="form">
            <h1>Registration</h1>
            <form className="card" onSubmit={this.submit}>
              <div className="input-cont">
                <label htmlFor="FirstName">FIRST NAME</label>
                <input
                  placeholder="First name"
                  id="FirstName"
                  type="text"
                  value={FirstName}
                  onChange={this.first}
                  onBlur={this.firstBlur}
                />
                {FirstNameError ? (
                  <p
                    style={{
                      color: '#ff0b37',
                      marginTop: 0,
                      fontWeight: '500',
                      fontSize: '13px',
                    }}
                  >
                    Required
                  </p>
                ) : (
                  ''
                )}
              </div>
              <div className="input-cont">
                <label htmlFor="LastName">LAST NAME</label>
                <input
                  placeholder="Last name"
                  id="LastName"
                  type="text"
                  value={LastName}
                  onChange={this.last}
                  onBlur={this.lastBlur}
                />
                {LastNameError ? (
                  <p
                    style={{
                      color: '#ff0b37',
                      marginTop: 0,
                      fontWeight: '500',
                      fontSize: '13px',
                    }}
                  >
                    Required
                  </p>
                ) : (
                  ''
                )}
              </div>
              <button type="submit" className="submit-btn">
                submit
              </button>
            </form>
          </div>
        ) : (
          <div className="submitted-form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button className="submit-btn" onClick={this.newForm}>
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
