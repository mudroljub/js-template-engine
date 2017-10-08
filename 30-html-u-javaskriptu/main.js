const podaci = {
  ime: 'Daman',
  poeni: 222,
  energija: 100,
  tagovi: ['JavaScript', 'Node', 'Learning']
}

function praviSablon() {
  const tagovi = podaci.tagovi.map(tag => `<li>${tag}</li>`)
  return `
    <div class="${podaci.poeni > 200 ? 'stil1' : 'stil2'}">
      <h3>Profil</h3>
      Ime: ${podaci.ime}<br>
      Poeni: ${podaci.poeni}<br>
      Energija: ${podaci.energija}<br>
      Oznake:
      <ul>
        ${tagovi.join(' ')}
      </ul>
    </div>
  `
}

window.onload = () =>
  document.getElementById('profil').innerHTML = praviSablon()
