import FoodFoto from './assets/anh.jpg'
import Clock from './assets/TimeIcon.jpg'
import Type2 from './assets/Type2.jpg'
import Difficult from './assets/Difficult.jpg'
import DifficultGreen from './assets/Difficult-green.jpg'
import DifficultYellow from './assets/Difficult-yellow.jpg'
import DifficultRed from './assets/Difficult-red.jpg'
import First from './assets/First.png'
import Second from './assets/Second.png'
import Salad from './assets/Salad.png'
import Snack from './assets/Snack.png'
import Bakery from './assets/Bakery.png'
import Dessert from './assets/Dessert.png'
import Meat from './assets/Meat.png'
import Fish from './assets/Fish.png'
import Canned from './assets/Canned.png'
import Drinks from './assets/Drinks.png'

import './Card.css'

export default function Card(prop) {
    const recip = prop.recip;
    let difficult;
    switch (recip.complexity) {
        case 1:
            difficult = (
                <div className="col-6 difficult">
                    <img src={DifficultGreen}></img>
                    <img src={Difficult}></img>
                    <img src={Difficult}></img>
                </div>
            )
            break;
        case 2:
            difficult = (
                <div className="col-6 difficult">
                    <img src={DifficultYellow}></img>
                    <img src={DifficultYellow}></img>
                    <img src={Difficult}></img>
                </div>
            )
            break;
        case 3:
            difficult = (
                <div className="col-6 difficult">
                    <div className='row'>
                        <img className='col-4' src={DifficultRed}></img>
                        <img className='col-4' src={DifficultRed}></img>
                        <img className='col-4' src={DifficultRed}></img>
                    </div>
                </div >
            )
            break;
        default:
            break;
    }

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="food-card">
                <div className="cont" id='img-card-wrapper'>
                    <img id='img-card'
                        src={FoodFoto} className="logo" alt="Vite logo" />
                    <div className="text-overlay">
                        {recip.title}
                    </div>
                </div>
                <div className="cadr-b row ">
                    <div className="col-6 text-center font">время</div>
                    <div className="col-6 text-center font">сложность</div>
                </div>
                <div className="cadr-b row">
                    <div className="col-6">
                        <img src={Clock}></img>
                        <div className="text">
                            <p>{recip.time}</p>
                        </div>
                    </div>
                    {difficult}
                </div>
            </div>
        </div>
    )
}