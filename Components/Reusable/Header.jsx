import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' className={styles.site_header_bg}>
        <Container>
          <Navbar.Brand href='#home' className='mt-4'>
            <Image src='/sitelogo.png' width={100} height={45} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto' />
            <Nav>
              <Nav.Link eventKey={2} href='#memes'  className='mt-4'>
                <Image src='/navicon.png' width={45} height={45} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
