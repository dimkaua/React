function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2>Кошик</h2>

        <div className="item">
          <div className="cart_item">
            <img width={70} height={70} src="/img/sensor/1.jpg" alt="Sensor" />
            <div>
              <p>
                Бездротовий датчик детектування диму та чадного газу Ajax
                FireProtect Plus EU Black
              </p>
              <b>2 960 грн.</b>
            </div>
            <img className="btn_remove" src="/img/btn-remove.svg" />
          </div>
          <div className="cart_item">
            <img width={70} height={70} src="/img/sensor/1.jpg" alt="Sensor" />
            <div>
              <p>
                Бездротовий датчик детектування диму та чадного газу Ajax
                FireProtect Plus EU Black
              </p>
              <b>2 960 грн.</b>
            </div>
            <img className="btn_remove" src="/img/btn-remove.svg" />
          </div>
        </div>
        <div className="cart_total">
          <ul>
            <li>
              <span>Всього :</span>
              <div></div>
              <b>2 960 грн.</b>
            </li>
            <li>
              <span>Податок 20% :</span>
              <div></div>
              <b>592 грн.</b>
            </li>
          </ul>
          <button>Оформити замовлення</button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
