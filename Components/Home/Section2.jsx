import React from 'react';
import styles from '../../styles/HomeSection2.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';

export default function Section2() {
  return (
    <div>
      <main>
        <Container>
          <div style={{maxWidth: '850px', margin: 'auto', marginTop: '10%'}}>
            <section>
              <h1 className={styles.site_section2_intro_heading_text}>What I do in Nutshell</h1>
              <p className={styles.site_section2_intro_sub_text}>
                “Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take
                away.” — <span style={{color: '#ffffff'}}>Antoine de Saint-Exupery.</span>
              </p>
            </section>
            <section style={{marginTop: '10%'}}>
              <Row>
                <Col sm={4}>
                  <div>
                    <Image src='/user.png' width={50} height={50} />
                  </div>
                  <h6 className={styles.site_section2_skills_heading}>User Research</h6>
                  <p className={styles.site_section2_skills_text}>
                    Through the use of a suitable user research method, I strive to understand how users go about
                    performing tasks and achieving goals.
                  </p>
                </Col>
                <Col sm={4}>
                  <div>
                    <Image src='/ds.png' width={50} height={50} />
                  </div>
                  <h6 className={styles.site_section2_skills_heading}>Design Strategy</h6>
                  <p className={styles.site_section2_skills_text}>
                    I iteratively seek to redefine problems in an attempt to identify better alternative strategies and
                    solutions that might not be instantly apparent.
                  </p>
                </Col>
                <Col sm={4}>
                  <div>
                    <Image src='/wire.png' width={50} height={50} />
                  </div>
                  <h6 className={styles.site_section2_skills_heading}>Wireframing & Prototyping</h6>
                  <p className={styles.site_section2_skills_text}>
                    I ensure useful and usable user interfaces that work across multiple devices is an important part of
                    the work we do on today’s web.
                  </p>
                </Col>
              </Row>
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}
