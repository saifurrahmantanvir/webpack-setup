import Counter from './Counter'
import './style.scss'
import avatar from './assets/avatar.png'

const App = () => {
   return (
      <div className="app">
         <h3>Server running in {process.env.serve}</h3>
         <img src={avatar} alt="avatar" />
         <div>Learning webpack with react.js and typescript</div>
         <Counter />
      </div>
   )
}

export default App
