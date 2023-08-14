import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Header from '../Header'
import {FetchUsers} from '../../Services/Action/action'
import Center from '../Center'
import './app.css'

const Home = () => {
  const news2 = useSelector(state => state)
  const Date1 = news2.Data

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchUsers())
  }, [dispatch])

  return (
    <>
      <Header />
      <div className="classy">
        <ul className="ulu">
          {Date1.map(each1 => (
            <Center first={each1} key={each1.id} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
