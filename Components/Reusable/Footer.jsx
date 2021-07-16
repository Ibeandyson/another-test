import React from 'react';
import Image from 'next/image';
import {Row, Col, Container} from 'react-bootstrap';
import {AiFillDribbbleCircle, AiFillTwitterCircle, AiFillBehanceCircle} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <footer style={{maxWidth: '850px', margin: 'auto', marginTop: '5%', marginBottom: '5%'}}>
        <Container>
          <Row>
            <Col sm={6}>
              <Image src='/sitelogo.png' width={100} height={45} />
            </Col>
            <Col sm={6}>
              <div style={{float: 'right', display: 'flex'}}>
                <div style={{marginLeft: '10px'}}>
                  <AiFillTwitterCircle size={30} color='#ffffff' />
                </div>
                <div style={{marginLeft: '10px'}}>
                  <AiFillBehanceCircle size={30} color='#ffffff' />
                </div>
                <div style={{marginLeft: '10px'}}>
                  <AiFillDribbbleCircle size={30} color='#ffffff' />
                </div>
                <div style={{marginLeft: '10px'}}>
                  <FaFacebook size={28} color='#ffffff' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
