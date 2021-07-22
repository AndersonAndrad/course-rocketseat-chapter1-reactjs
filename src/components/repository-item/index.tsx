// styles
import './styles.scss'

// types
type RepositoryItemProps = {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export default function RepositoryItem ( { repository, ...props }: RepositoryItemProps ) {
  return (
    <>
      <li>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>
        <a href={repository.html_url}>{repository.html_url}</a>
      </li>
    </>
  )
}