import React from 'react';
import styles from '../../styles/HomeSection3.module.css';
import {Container, Button, Card} from 'react-bootstrap';
import Image from 'next/image';

export default function Section3() {
  return (
    <div>
      <main>
        <Container>
          <div style={{maxWidth: '850px', margin: 'auto', marginTop: '10%'}}>
            <section>
              <h1 className={styles.site_section3_intro_heading_text}>My Works</h1>
              <p className={styles.site_section3_intro_sub_text}>
                "There is no such thing as a boring project. There are only boring executions" ―<br />
                <span style={{color: '#ffffff'}}> Irene Etzkorn.</span>
              </p>
            </section>
            <section className="mb-5 mt-5">
              <Card
                style={{
                  backgroundColor: '#000000',
                  border: '1px #ffffff',
                  borderRadius: '30px',
                  border: '1px solid #1f1f20'
                }}>
                <div className={styles.site_section3_card_postion_style}>
                  <div className={styles.site_section3_card_body_style}>
                    <p className={styles.site_section3_card_mobile}>Mobile</p>

                    <h1 className={styles.site_section3_card_heading_text}>EduSponsor</h1>
                    <p className={styles.site_section3_card_sub_text}>
                      EduSponsor is born out of a simple but empathetic idea that every deserving academic candidate
                      irrespective of their social and financial status deserves a shot at their desired conventional
                      exam
                    </p>
                    <Button className={styles.site_btn1}>Case Study</Button>
                  </div>
                  <div className={styles.site_section3_card_image_postion_style}>
                    <Image src='/work1.png' width={1000} height={1100} />
                  </div>
                </div>
              </Card>
            </section>
            <section className='mb-5'>
              <Card
                style={{
                  backgroundColor: '#000000',
                  border: '1px #ffffff',
                  borderRadius: '30px',
                  border: '1px solid #1f1f20'
                }}>
                <div className={styles.site_section3_card_postion_style}>
                  <div className={styles.site_section3_card_body_style}>
                    <p className={styles.site_section3_card_web}>Web</p>

                    <h1 className={styles.site_section3_card_heading_text}>Rent4Less</h1>
                    <p className={styles.site_section3_card_sub_text}>
                      Rent4Less is a rental scheme designed to provide a flexible way to rent homes. With this scheme,
                      you can now spread out the payment for apartments in choice locations, by on a monthly basis.
                    </p>
                    <Button className={styles.site_btn2}>Case Study</Button>
                  </div>
                  <div className={styles.site_section3_card_image_postion_style}>
                    <Image src='/work2.png' width={1000} height={1100} />
                  </div>
                </div>
              </Card>
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
