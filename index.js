var katzDeli = [];
var counter = 0;

function takeANumber() {
  // katzDeliLine.push(name)
  counter++
  return `Welcome. You are number ${counter} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

  var lineNumberAndName = []

  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    lineNumberAndName.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${lineNumberAndName}`
}
