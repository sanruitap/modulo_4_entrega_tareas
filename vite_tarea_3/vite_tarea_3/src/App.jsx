
import './App.css'
import Title from './Components/title/title'
import Image from './Components/image/image'
import Details from './Components/details/details'
import './App.css'


function App() {
  const nombre = ' Diomedes Diáz.'
  const nacimiento= ' 26 de Mayo de 1957.'
  const genero = ' Masculino.'
  const status = ' Fallecido.'
  const frases = ' "Por eso la plata que cae en mis manos. La gasto en mujeres bebida y bailando."'

  return (
    
      <div class="card">
        
        <Title/>
        <Image/>
        <Details nombre = {nombre} nacimiento={nacimiento} genero={genero} status={status} frases={frases}/>
        
      </div>
      
      
       
  )
}

export default App



