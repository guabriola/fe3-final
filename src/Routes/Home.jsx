import { useDocStates } from '../Components/utils/global.context';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useDocStates()

  return (
    <main className="" >  
      <h1>Home</h1>
      <div className='card-grid'>        
        {state.list.map(item => <Card item={item} key={item.id}/>)}
      </div>
    </main>
  )

}

export default Home
