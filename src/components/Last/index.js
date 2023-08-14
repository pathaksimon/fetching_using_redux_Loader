import './App.css'

const Last = props => {
  const {first2} = props
  const {id, img, name, description} = first2
  return (
    <div>
      <img src={img} className="pictureoflogo" />
      <p>{description}</p>
    </div>
  )
}

export default Last
