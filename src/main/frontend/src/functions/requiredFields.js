const requiredErrors = (requiredFields, formInput) => {
  let formErrors = {}
  for (let field of Object.keys(requiredFields)) {
    if (formInput[field].trim() === "") {
      formErrors = {
        ...formErrors,
        [field] : `${requiredFields[field]} cannot be blank`
      }
    }
  }
  return formErrors
}

export default requiredErrors