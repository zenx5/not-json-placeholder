import './App.css'
import Content from './components/Content'
import TopBar from './components/TopBar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <TopBar title="Ejercicio 1" subtitle="Uso de fetch para consumo de API" />
      
      <div className="container mx-auto my-4 p-4 flex flex-basis-1 flex-row bg-white">
        <Content />
      </div>
      
    </>
  )
}

export default App
