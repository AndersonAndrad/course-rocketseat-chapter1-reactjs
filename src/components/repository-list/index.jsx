// shared components
import RepositoryItem from "../repository-item"

export default function RepositoryList() { 
  return(
    <section className="repository-list">
      <h1>List of repository</h1>
      <ul>
        <RepositoryItem name='this name is' description='' link=''/>
      </ul>
    </section>
  )
}