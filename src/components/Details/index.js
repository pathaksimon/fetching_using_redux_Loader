import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Loader from 'react-loader-spinner'
import Last from '../Last'
import {FetchUsers123} from '../../Services/Action/action'
import './app.css'

const Details = props => {
  const {match} = props
  const {params} = match
  const {id} = params

  const dispatch = useDispatch()

  const news3 = useSelector(state => state)
  const Date1 = news3.LatuData
  const Bool = news3.loading
  console.log(Date1)
  useEffect(() => {
    dispatch(FetchUsers123(id))
  }, [dispatch])

  const LOADER = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </div>
  )

  const acess = () => {
    if (Bool) {
      return LOADER()
    }
    return (
      <ul>
        {Date1.map(each => (
          <Last first2={each} key={each.id} />
        ))}
      </ul>
    )
  }

  return (
    <div className="Indepth">
      <div className="other">{acess()}</div>
    </div>
  )
}

export default Details
