import { useSkin } from '@hooks/useSkin'
import { Link, Redirect } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const Login = () => {
  const [skin, setSkin] = useSkin()

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/'>
          <img src={require(`@src/assets/images/logo/logo.png`).default} style={{ width: 90, height: 35, marginTop: -8}} />
          <h2 className='brand-text text-primary ml-1'>Casino's World</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={require(`@src/assets/images/logo/logo-background.png`).default} alt='Login V2' style={{ height: 550 }}/>
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Welcome to MIC Casino's World!
            </CardTitle>
            <CardText className='mb-2'>Please sign-in to your account and start the adventure</CardText>
            <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input type='email' id='login-email' placeholder='john@example.com' autoFocus />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle className='input-group-merge' id='login-password' />
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button.Ripple tag={Link} to='/home' color='primary' block>
                Sign in
              </Button.Ripple>
            </Form>
            <p className='text-center mt-2'>
              <span className='mr-25'>New on our platform?</span>
              <Link to='/register'>
                <span>Create an account</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button.Ripple color='facebook'>
                <Facebook size={14} />
              </Button.Ripple>
              <Button.Ripple color='twitter'>
                <Twitter size={14} />
              </Button.Ripple>
              <Button.Ripple color='google'>
                <Mail size={14} />
              </Button.Ripple>
              <Button.Ripple className='mr-0' color='github'>
                <GitHub size={14} />
              </Button.Ripple>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
