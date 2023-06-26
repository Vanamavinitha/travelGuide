import './index.css'

const TravelGuide = props => {
  const {details} = props
  const {ImageUrl, name, description} = details
  return (
    <li className="container">
      <img src={ImageUrl} alt={name} className="image" />
      <h1 className="heading">{name}</h1>
      <p className="p">{description}</p>
    </li>
  )
}
export default TravelGuide
