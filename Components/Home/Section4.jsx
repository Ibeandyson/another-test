import React from 'react';
import styles from '../../styles/HomeSection4.module.css';
import {Container, Row, Col, Badge, Card, Button} from 'react-bootstrap';
import Image from 'next/image';
import {AiOutlineArrowRight} from 'react-icons/ai';

export default function Section4() {
  return (
    <div>
      <main>
        <Container>
          <div style={{maxWidth: '850px', margin: 'auto', marginTop: '10%'}}>
            <section>
              <Row>
                <Col sm={6}>
                  <h1 className={styles.site_section4_intro_heading_text}>
                    “You can’t wait for inspiration, you have to go after it with a club.”
                  </h1>
                  <p className={styles.site_section4_intro_sub_text}>
                    If a design is a mindset, a design tool is the hand of the mind. Here are the tools I take pleasure
                    in working with;
                  </p>
                </Col>
                <Col sm={6}>
                  <div className='text-center'>
                    <div>
                      <Badge className={styles.site_skills}>
                        <Image src='/adobe-xd-logo-png-transparent 2.png' width={10} height={10} />{' '}
                        <span className='mt-1 ml-2'> Adobe XD</span>
                      </Badge>

                      <Badge className={styles.site_skills}>
                        <Image src='/586d7feb25738d9f2d793e96 1.png' width={10} height={10} />{' '}
                        <span className='mt-1 ml-2'> Adobe Illustrator</span>
                      </Badge>
                    </div>
                    <div>
                      <Badge className={styles.site_skills}>
                        <Image src='/Vector.png' width={10} height={10} />{' '}
                        <span className='mt-1 ml-2'> Adobe After-Effect</span>
                      </Badge>
                      <Badge className={styles.site_skills}>
                        <Image src='/1_nUZs178q_SxL7NbW7mE10A 2.png' width={10} height={10} />{' '}
                        <span className='mt-1 ml-2'> Figma</span>
                      </Badge>
                    </div>
                    <div>
                      <Badge className={styles.site_skills}>
                        <Image src='/5cb480cd5f1b6d3fbadece79 2.png' width={10} height={10} />{' '}
                        <span className='mt-1 ml-2'> slack</span>
                      </Badge>

                      <Badge className={styles.site_skills}>
                        <Image src='/5a5772891c992a034569ab8c 2.png' width={10} height={10} />{' '}
                        <span className='mt-1 ml-2'> Zeplin</span>
                      </Badge>
                    </div>
                  </div>
                </Col>
              </Row>
            </section>
            <section style={{marginTop: '10%'}}>
              <h1 className={styles.site_section4_intro_heading_text}>My Publications</h1>
              <p className={styles.site_section4_intro_sub_text}>
                Through writing, I come to understand my internal psychologies more intimately than through any other
                form of semantic exploration.
              </p>
            </section>
            <section className='mt-5 mb-5'>
              <Row>
                <Col sm={6}>
                  <Card
                    style={{
                      backgroundColor: '#000000',
                      border: '1px solid #1f1f20',
                      height: '100%',
                      marginBottom: '0px'
                    }}>
                    <Image src='/Rectangle 20.png' width={400} height={400} />
                    <Card.Body>
                      <Card.Title className={styles.site_section4_card_heading_text}>
                        Designing Better Interface
                      </Card.Title>
                      <Card.Text className={styles.site_section4_card_sub_text}>
                        Design is the process of creating machines, interactive systems, buildings, vehicles, software,
                        objects, etc. It user-centered, i.e. users are at the heart of the design. It is about creating
                        solutions for people, physical items, or abstract systems to address a need or a problem. Simply
                        put, Design is a science of creating things: from inception to delivery.
                      </Card.Text>
                      <Button className={styles.site_btn_round}>
                        <div style={{marginTop: '-7px'}}>
                          <AiOutlineArrowRight color='#ffffff' />
                        </div>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card
                    style={{
                      backgroundColor: '#000000',
                      border: '1px solid #1f1f20',
                      height: '100%',
                      marginBottom: '0px'
                    }}>
                    <Image src='/Rectangle 22.png' width={400} height={400} />
                    <Card.Body>
                      <Card.Title className={styles.site_section4_card_heading_text}>
                        UI, UX: What’s the difference?
                      </Card.Title>
                      <Card.Text className={styles.site_section4_card_sub_text}>
                        The line between UX and UI is a pretty thin one; it is indeed so thin that it is arguably one of
                        the most discussed issues in recent times. Although there is a plethora of information on the
                        internet seeking to shed more light on the UX and UI and corresponding job descriptions and
                        requirements of these fields, the boundary between UI and
                      </Card.Text>
                      <Button className={styles.site_btn_round2}>
                        <div style={{marginTop: '-7px'}}>
                          <AiOutlineArrowRight color='#ffffff' />
                        </div>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </section>
            <div className='text-center'>
              <Button className={styles.site_btn_seeall}>See All</Button>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
