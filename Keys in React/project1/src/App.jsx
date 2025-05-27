import { people } from "./data"
import { getImageUrls } from "./utils";

export default function App() {
    const chmeists = people.filter(person =>
      person.profession === 'chemist'
    );

    const listItem = chmeists.map(person =>
      <li>
        <img src={getImageUrls(person)} alt={person.name} />
        <p><b>{person.name}:</b>
        {' ' + person.profession+ ' '}
        known for {person.accomplishment}</p>
      </li>
    )

  return (
    
      <ul>{listItem}</ul>
    
  )
}

