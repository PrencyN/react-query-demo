import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:3000/superheroes')
}

const fetchFriends = () => {
  return axios.get('http://localhost:3000/friends')
}

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
  const { data: friends } = useQuery('friends', fetchFriends)
  console.log(superHeroes, friends)
  return <div>Parallel Queries</div>
}
