import axios from 'axios'

export const fetchUsersRequest = first => {
  console.log('1')
  return {
    type: first.type,
  }
}

export const fetchUsersSucess = users => {
  console.log('1')
  return {
    type: users.type,
    payload: users.payload,
  }
}

export const fetchUsersfailure = users1 => {
  console.log('1')
  return {
    type: users1.type,
    payload: users1.error,
  }
}

export const FetchUsers = () => {
  console.log('1')
  return async dispatch => {
    dispatch(fetchUsersRequest({type: 'fetching'})) // Indicate that fetching has started

    try {
      const response = await axios.get(`https://apis.ccbp.in/te/courses`)
      const data1 = response.data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logo: each.logo_url,
      }))
      dispatch(fetchUsersSucess({type: 'sucess', payload: data1}))
    } catch (error) {
      dispatch(fetchUsersfailure({type: 'failure', payload: error}))
    }
  }
}

export const FetchUsers123 = id => {
  console.log('1')
  return async dispatch => {
    dispatch(fetchUsersRequest({type: 'fetching'})) // Indicate that fetching has started

    try {
      const response = await axios.get(`https://apis.ccbp.in/te/courses/${id}`)
      const data1 = [response.data.course_details].map(each => ({
        id: each.id,
        name: each.name,
        img: each.image_url,
        description: each.description,
      }))
      dispatch(fetchUsersSucess({type: 'Latestsucess', payload: data1}))
    } catch (error) {
      dispatch(fetchUsersfailure({type: 'failure', payload: error}))
    }
  }
}
