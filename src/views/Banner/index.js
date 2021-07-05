import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import UILoader from '@components/ui-loader'
import ProfileHeader from './ProfileHeader'
import { Row, Col, Button } from 'reactstrap'

import '@styles/react/pages/page-profile.scss'

const Profile = () => {
  const [data, setData] = useState(null)
  const [block, setBlock] = useState(false)

  const handleBlock = () => {
    setBlock(true)
    setTimeout(() => {
      setBlock(false)
    }, 2000)
  }

  useEffect(() => {
    axios.get('/profile/data').then(response => setData(response.data))
  }, [])
  return (
    <Fragment>
      {data !== null ? (
        <div id='user-profile'>
          <Row>
            <Col sm='12'>
              <ProfileHeader data={data.header} />
            </Col>
          </Row>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Profile
