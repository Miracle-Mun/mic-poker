import { Card, CardImg, Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import CardBody from 'reactstrap/lib/CardBody'

const ProfileHeader = ({ data }) => {

  return (
    <div>
      <img src={data.coverImg} alt='User Profile Image' style={{ marginLeft: -40 }}/>
      <div className="mb-3 mt-3" style={{ textAlign: 'center' }}>
        <h1>Welcome to the home of MIC Porker</h1>
        <p style={{ marginBottom: 30 }}>Tournaments and games running non-stop!</p>
        <Button.Ripple className='round pl-5 pr-5 pt-1 pb-1' tag={Link} to='/home' color='info' outline>
          Play Now
        </Button.Ripple>
      </div>
      <Card>
        <CardBody>
          <Row>
            <Col sm='6' className="pl-5 pt-3">
              <h1 className="mb-3">Let's play MIC Poker</h1>
              <ul className="mb-3">
                <li className="m-1">Play on a range of platforms - enjoy the same great PokerStars experience on your PC or Mac.</li>
                <li className="m-1">Games starting every second - never wait for action thanks to brand new tournaments and ring games starting right now. Don’t miss out!</li>
              </ul>
              <Button.Ripple className='round pl-5 pr-5 pt-1 pb-1 ml-5 d-flex justify-content-center' tag={Link} to='/home' color='info' outline>
                Play Now
              </Button.Ripple>
            </Col>
            <Col sm='6' className="p-3">
              <CardImg src={require(`@src/assets/images/home/home1.png`).default} style={{ width: 500 }}/>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <div>
        <CardBody>
          <Row>
            <Col sm='6' className="pl-5 pt-3">
              <h1 className="mb-2 d-flex justify-content-end">Become a Poker Champion</h1>
              <p>Get tips and poker strategies from the game’s best players</p>
              <ul className="mb-3">
                <li className="mt-1">1,000s of free games and tournaments - take part in daily free tournaments, Sit & Go’s and ring games in a variety of formats and hone your skills.</li>
                <li className="mt-1">Visit our free dedicated strategy section - from basic tips to video tutorials, there’s everything you need to master the game.</li>
              </ul>
              <Button.Ripple className='round pl-5 pr-5 pt-1 pb-1 ml-5 d-flex justify-content-center' tag={Link} to='/home' color='info' outline>
                Play Now
              </Button.Ripple>
            </Col>
            <Col sm='6' className="p-3">
              <CardImg src={require(`@src/assets/images/home/home2.png`).default} style={{ width: 500 }}/>
            </Col>
          </Row>
        </CardBody>
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  )
}

export default ProfileHeader
