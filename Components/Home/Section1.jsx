import React from 'react';
import styles from '../../styles/HomeSection1.module.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Image from 'next/image';
import {AiFillDribbbleCircle, AiFillTwitterCircle, AiFillBehanceCircle} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';

export default function Section1() {
  return (
    <div>
      <main>
        <Container>
          <Row>
            <Col sm={2} />
            <Col sm={6}>
              <h6 className={styles.site_section1_hello}>Hello, I’m</h6>
              <h1 className={styles.site_section1_names}>
                <span className={styles.site_section1_name_one}>Juli</span>
                <span className={styles.site_section1_name_two}>anna</span>
              </h1>
            </Col>
            <Col sm={4} style={{marginTop: '5%'}}>
              <div className='mt-4' style={{float: 'right'}}>
                <Image src='/Polygon.png' width={50} height={50} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <div className='mt-4'>
                <Image src='/zegi.png' width={50} height={100} />
              </div>
            </Col>
            <Col sm={6}>
              <p className={styles.site_section1_text}>
                I specialize in designing and developing user interfaces and digital products. I don’t restrict myself
                to design. The blend of design, user experience, marketing, and business is where I feel I excel.
              </p>
              <Button className={styles.site_btn1}>Hire Me</Button>{' '}
              <Button className={styles.site_btn2}>Contact Me</Button>
            </Col>
            <Col sm={4}>
              <div style={{float: 'right'}}>
                <div className='mt-3'>
                  <AiFillTwitterCircle size={30} color='#ffffff' />
                </div>
                <div className='mt-3'>
                  <AiFillBehanceCircle size={30} color='#ffffff' />
                </div>
                <div className='mt-3'>
                  <AiFillDribbbleCircle size={30} color='#ffffff' />
                </div>
                <div className='mt-3'>
                  <FaFacebook size={28} color='#ffffff' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
