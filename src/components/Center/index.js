import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import './app.css'

const Center = props => {
  const {first} = props
  const {id, name, logo} = first
  return (
    <li className="centerist">
      <Link to={`/blogs/${id}`}>
        <img src={logo} className="pics" />
      </Link>
    </li>
  )
}

export default Center
