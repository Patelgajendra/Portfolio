import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export default function Contact() {



  return (
    <>
      <section className='contact' id='connect'>
<Container>
    <Row className="align-item-center">
        <Col md={6}>
            <img src={contactImg} alt="" />
        </Col>
        <Col md={6}>
            <h2>Get In Touch </h2>
            <form >
                <Row>
                    <Col sm={6} className="px-1">
<input type="text"  placeholder='First Name'/>
                    </Col>
                    <Col sm={6} className="px-1">
                    <input type="text"  placeholder='Last Name' />
                    </Col>
                    <Col sm={6} className="px-1">
                    <input type="email"  placeholder='Email'/>
                    </Col>
                    <Col sm={6} className="px-1">
                    <input type="tel"  placeholder='Phone No.' />
                    </Col>
                    <Col>
                    <textarea rows="6"  placeholder='Message' ></textarea>
                    <button type='submit' ><span>Send</span></button>
                    </Col>
                    
                </Row>
                
            </form>
        </Col>

    </Row>
</Container>

      </section>
    </>
  )
}
