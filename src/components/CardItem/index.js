// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card ${className}`}>
      <div className="card-details">
        <h1 className="card-heading">{title}</h1>
        <p className="card-para">{description}</p>
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}
export default CardItem
