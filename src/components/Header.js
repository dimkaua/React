function Header() {
  return (
    <header>
      <div className="headerLeft">
        {' '}
        <img width={60} height={60} src="/img/logo.png" />
        <div>
          <h3>Sensor Shop</h3>
          <p>Великий вибір сенсорів</p>
        </div>
      </div>
      <ul className="headerRight">
        <li>
          <img width={30} height={30} src="/img/basket.png" />
          <span>1800 грн.</span>
        </li>
        <li>
          <img width={30} height={30} src="/img/person.png" />
        </li>
      </ul>
    </header>
  )
}

export default Header
