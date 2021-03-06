import './app.scss'
import Aifian from './aifian.png'
import IceCream from './icecream.svg'

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>TS Infras - {process.env.NODE_ENV} - {process.env.API_END_POINT}</h1>
        <img src={Aifian} alt="aifian_logo"/>
        <img src={IceCream} alt="aifian_logo" width="300"/>
      </div>
    </div>
  )
}