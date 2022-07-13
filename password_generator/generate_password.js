// generate_password.js

// Define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index]
}

// Define generatePaword function
function generatePassword(options) {

  // Define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toLocaleUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat([...lowerCaseLetters])
  }

  if (options.uppercase === 'on') {
    collection = collection.concat([...upperCaseLetters])
  }

  if (options.numbers === 'on') {
    collection = collection.concat([...numbers])
  }

  if (options.symbols === 'on') {
    collection = collection.concat([...symbols])
  }
  
  // remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(char => !options.excludeCharacters.includes(char))
  }

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }
  
  // start generating password
  let password = ''
  for (let i = 0; i < Number(options.length); i++) {
    password += sample(collection)
  }

  // return the generated password
  return password
}

//export generatePassword function for other files to use
module.exports = generatePassword