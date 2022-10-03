import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="title">
          <h1>Всі сенсори</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." />
          </div>
        </div>

        <div className="sensor_card">
          <div className="card">
            <img
              width={150}
              height={150}
              src="/img/sensor/1.jpg"
              alt="Sensor"
            />
            <h5>
              Бездротовий датчик детектування диму та чадного газу Ajax
              FireProtect Plus EU Black
            </h5>
            <div className="cardBottom">
              <div>
                <span>Ціна:</span>
                <b>2 960 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={100}
              height={150}
              src="/img/sensor/2.jpg"
              alt="Sensor"
            />
            <h5>
              Бездротовий датчик руху універсальний Ajax MotionProtect White
              ID1254563211
            </h5>
            <div className="cardBottom">
              <div>
                <span>Ціна:</span>
                <b>1 499 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={100}
              height={150}
              src="/img/sensor/3.jpg"
              alt="Sensor"
            />
            <h5>
              Датчик відчинення дверей/вікна із сенсором удару та нахилу Ajax
              DoorProtect Plus White
            </h5>
            <div className="cardBottom">
              <div>
                <span>Ціна:</span>
                <b>1 500 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={150}
              height={150}
              src="/img/sensor/4.jpg"
              alt="Sensor"
            />
            <h5>Бездротовий датчик диму Ajax FireProtect White ID848487611</h5>
            <div className="cardBottom">
              <div>
                <span>Ціна:</span>
                <b>2 000 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={90} height={150} src="/img/sensor/5.jpg" alt="Sensor" />
            <h5>
              Бездротовий датчик руху з фотофіксацією Ajax MotionCam Білий
            </h5>
            <div className="cardBottom">
              <div>
                <span>Ціна:</span>
                <b>3 800 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={100}
              height={150}
              src="/img/sensor/6.jpg"
              alt="Sensor"
            />
            <h5>
              Бездротовий датчик відкриття дверей/вікна Ajax DoorProtect Black
            </h5>
            <div className="cardBottom">
              <div>
                <span>Ціна:</span>
                <b>999 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={90} height={150} src="/img/sensor/7.jpg" alt="Sensor" />
            <h5>
              Бездротовий вуличний датчик руху Ajax MotionProtect Outdoor White
            </h5>
            <div className="cardBottom">
              <div>
                <span>Ціна:</span>
                <b>4 600 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={100}
              height={150}
              src="/img/sensor/8.jpg"
              alt="Sensor"
            />
            <h5>Бездротовий датчик руху Ajax MotionProtect Plus EU Black</h5>
            <div className="cardBottom">
              <div>
                <span>Ціна:</span>
                <b>2 300 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={100}
              height={150}
              src="/img/sensor/9.jpg"
              alt="Sensor"
            />
            <h5>
              Бездротовий датчик руху штора Ajax MotionProtect Curtain Чорний
            </h5>
            <div className="cardBottom">
              <div>
                <span>Ціна:</span>
                <b>1 900 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
