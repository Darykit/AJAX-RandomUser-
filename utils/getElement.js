const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    console.log("no element selected")
  }
}

export default getElement
