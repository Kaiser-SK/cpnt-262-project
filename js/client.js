// Select element needed to input information
const section = document.querySelector('.rick-morty')

// Create fetch and error script
const fetchData = async function(endpoint) {
  try {
  const response = await fetch(endpoint);
  const rickMorty = await response.json();

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  let output = '';

  // Create API json collector function
  const handleInfo = function(rickMorty) {
    output += `
    <article>
      <h2>${rickMorty.name}</h2>
      <img src="${rickMorty.image}" alt="Picture of ${rickMorty.name}">
      <ul>
      <li>Status: ${rickMorty.status}</li>
      <li>Species: ${rickMorty.species}</li>
      <li>Gender: ${rickMorty.gender}</li>
      <li>Origin: ${rickMorty.origin.name}</li>
      <li>Location: ${rickMorty.location.name}</li>
      <a href="https://rickandmorty.fandom.com/wiki/Rickipedia">More Information</a>
      </ul>
    </article>
    `;
  }

  rickMorty.forEach(handleInfo);

  // Print info into created const
  section.innerHTML = output;

  // Catch error if there is bug
} catch (error){
  section.innerHTML = `<h2>There was an error</h2>
                        <p>${error.message}</p>`;
}
}

// Link API to fetch from
fetchData('https://rickandmortyapi.com/api/character/1,2,20,24,105,121,155,193,306,420,549,,666');