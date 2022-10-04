import Drawer from './components/Drawer'
import Header from './components/Header'
import Card from './components/Card'

const arr = [
  {
    title:
      'Бездротовий датчик детектування диму та чадного газу Ajax FireProtect Plus EU Black',
    price: '2 960',
    imageUrl: '/img/sensor/1.jpg',
  },

  {
    title:
      'Бездротовий датчик руху універсальний Ajax MotionProtect White ID1254563211',
    price: '1 499',
    imageUrl: '/img/sensor/2.jpg',
  },

  {
    title:
      'Датчик відчинення дверей/вікна із сенсором удару та нахилу Ajax DoorProtect Plus White',
    price: '1 500',
    imageUrl: '/img/sensor/3.jpg',
  },
  {
    title: 'Бездротовий датчик диму Ajax FireProtect White ID848487611',
    price: '2 000',
    imageUrl: '/img/sensor/4.jpg',
  },
  {
    title: 'Бездротовий датчик руху з фотофіксацією Ajax MotionCam Білий',
    price: '3 800',
    imageUrl: '/img/sensor/5.jpg',
  },
  {
    title: 'Бездротовий датчик відкриття дверей/вікна Ajax DoorProtect Black',
    price: '999',
    imageUrl: '/img/sensor/6.jpg',
  },
  {
    title: 'Бездротовий вуличний датчик руху Ajax MotionProtect Outdoor White',
    price: '4 600',
    imageUrl: '/img/sensor/7.jpg',
  },
  {
    title: 'Бездротовий датчик руху Ajax MotionProtect Plus EU Black',
    price: '2 300',
    imageUrl: '/img/sensor/8.jpg',
  },
  {
    title: 'Бездротовий датчик руху штора Ajax MotionProtect Curtain Чорний',
    price: '1 900',
    imageUrl: '/img/sensor/9.jpg',
  },
]

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

        {arr.map((obj) => (
          <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
        ))}
      </div>
    </div>
  )
}

export default App
