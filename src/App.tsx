import usaLogo from './assets/united-states-of-america.png'
import newZealandLogo from './assets/new-zealand.png'
import germanyLogo from './assets/germany.png'
import './App.css'
import { Clock } from './Clock'

function App() {
  return (
    <>
      <div className="clocks">
        <Clock timezone="Pacific/Auckland" texture={newZealandLogo} />
        <Clock timezone="Europe/Berlin" texture={germanyLogo} />
        <Clock timezone="America/Chicago" texture={usaLogo} />
      </div>
      <div className='attributions'>
        <a href="https://www.flaticon.com/free-icons/eeuu" title="eeuu icons">Eeuu icons created by Dighital - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/germany" title="germany icons">Germany icons created by Dighital - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/new-zealand" title="new zealand icons">New zealand icons created by amoghdesign - Flaticon</a>
      </div>
    </>
  )
}

export default App
