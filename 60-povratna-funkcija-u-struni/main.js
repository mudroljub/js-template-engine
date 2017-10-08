function callback() {
  return 'Hello from callback!'
}

function proveri(literals, vrednost) {
  return literals[0] + vrednost()
}

console.log(proveri `Funkcija u struni: ${callback}`)
