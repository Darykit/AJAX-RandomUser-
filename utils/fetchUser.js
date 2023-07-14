const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(URL)
  const data = await response.json()

  //destructuring
  const person = data.results[0]
  const { phone } = person
  const { email } = person
  const { large: image } = person.picture
  const { first, last } = person.name
  const { password } = person.login
  const { age } = person.dob
  const { name } = person.location.street
  const { number } = person.location.street
  return {
    image,
    phone,
    email,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
    password,
    age,
  }
}
export default getUser
