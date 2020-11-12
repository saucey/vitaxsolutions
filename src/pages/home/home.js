import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Authorization from '../../components/higher-order-components/authorization'

import Records from './records'
import Sectors from './sectors'



const Home = () => {

  const location = useLocation();
  
  const PageRoute = () => {

    switch(location.pathname) {
        case '/home':
          return (<Sectors />)
      // code block
        case '/sectors':
          return (<Sectors />)
      // code block
      default:
        return false;
      // code block
    }
  }
  
  PageRoute()

  const user = {
    name: 'Leo',
    age: 33,
    sex: 'Male'
  }

  return (
    <div>
      <PageRoute />
    </div>
  )
}

export const WithAuthorization = Authorization(Home)
