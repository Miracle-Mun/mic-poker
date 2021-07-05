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
          <section id='profile-info'>
            <Row>
              <Col className='text-center' sm='12'>
                <Button color='primary' className='border-0 mb-1 profile-load-more' size='sm' onClick={handleBlock}>
                  <UILoader blocking={block} overlayColor='rgba(255,255,255, .5)'>
                    <span> Load More</span>
                  </UILoader>
                </Button>
              </Col>
            </Row>
          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Profile
