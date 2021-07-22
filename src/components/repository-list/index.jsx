// dependencies
import { useState, useEffect } from "react"

// shared components
import RepositoryItem from "../repository-item"

// styles
import "./styles.scss"

export default function RepositoryList () {
  const [repositories, setRepositories] = useState( [] )

  useEffect( () => {
    fetch( "https://api.github.com/users/andersonandrad/repos" )
      .then( response => response.json() )
      .then( json => setRepositories( json ) )
  }, [] )

  return (
    <section className="repository-list">
      <h1>List of repository</h1>
      <ul>
        {
          repositories.map( repository => {
            return (
              <RepositoryItem
                key={repository.id}
                repository={repository}
              />
            )
          } )
        }
      </ul>
    </section>
  )
}