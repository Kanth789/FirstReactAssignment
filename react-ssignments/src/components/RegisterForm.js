
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    lastNameError: false,
    firstNameError: false,
    isFormSubmitted: false,
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({firstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({lastNameError: !isValidLastName})
    
  }

  renderFormContainer = () => {
    const {lastNameError, firstNameError} = this.state
    
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="input-element">{this.renderFirstName()}</div>
        {firstNameError && <p className="error-message">*Required</p>}
        <div className="input-element">{this.renderLastName()}</div>
        {lastNameError && <p className="error-message">*Required</p>}
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  submitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderFirstName = () => {
    const {firstName, firstNameError} = this.state
    const showError = firstNameError ? 'error-field' : ''
    return (
      <>
        <label className="label-text" htmlFor="first_name">
          FIRST NAME
        </label>
        <input
          type="text"
          value={firstName}
          className={`user-input ${showError}`}
          id="first_name"
          placeholder="First Name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  renderLastName = () => {
    const {lastName, lastNameError} = this.state
    const showError = lastNameError ? 'error-field' : ''
    return (
      <>
        <label className="label-text" htmlFor="last_name">
          LAST NAME
        </label>
        <input
          type="text"
          value={lastName}
          className={`user-input ${showError}`}
          id="last_name"
          placeholder="Last Name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </>
    )
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderSuccessContainer = () => (
    <div className="success-container">
      <img
        className="success-image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success-logo"
      />
      <p className="success-heading">Submitted Successfully</p>
      <button className="resubmit" type="button" onClick={this.onClickResubmit}>
        Submit Another Response
      </button>
    </div>
  )

  onClickResubmit = () =>
    this.setState({isFormSubmitted: false, firstName: '', lastName: ''})

  render() {
    const {
      firstName,
      lastName,
      firstNameError,
      lastNameError,
      isFormSubmitted,
    } = this.state
    console.log(
      firstName,
      lastName,
      firstNameError,
      lastNameError,
      isFormSubmitted,
    )
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <div className="box-container">
          {isFormSubmitted
            ? this.renderSuccessContainer()
            : this.renderFormContainer()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm