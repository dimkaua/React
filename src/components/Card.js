function Card(props) {
  return (
    <div className="sensor_card">
      <div className="card">
        <img width={150} height={150} src={props.imageUrl} alt="Sensor" />
        <h5>{props.title}</h5>
        <div className="cardBottom">
          <div>
            <span>Ціна:</span>
            <b>{props.price} грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.png" alt="Plus" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
