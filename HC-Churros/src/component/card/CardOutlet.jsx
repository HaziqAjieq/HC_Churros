import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from "react-bootstrap";
import './CardOutlet.scss';
import { sliderImg } from "../../assets/sliderImg/sliderImg";

function CardOutlet() {
  return (
    <>
        <div className="card-text">

          <h1>Our Locations!</h1>

        </div>
       
            <div className="card-container">
            
            <Card className="card">
              <div className="image-container">
              <img  src={sliderImg.img5} className="card-img" />
              </div>
              <Card.Body>
                  <Card.Title>Hc Churros.Official</Card.Title>
                    <Card.Text className="address">
                    Berhadapan Kem Tudm J, Jalan Sultan Suleiman Shah, Kampung Kathong, 42700 Banting, Selangor
                    </Card.Text>
                  <Button className="card-btn" href="https://www.google.com/maps/dir//Jalan+Murni+1,+Taman+Langat+Murni,+42700+Banting,+Selangor/@2.8029141,101.578215,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cdb9001953b191:0xe59d5c3e93e52fc2!2m2!1d101.660617!2d2.802917?entry=ttu">Location</Button>
              </Card.Body>
          </Card>
          <Card  className="card">
          <div className="image-container">
          <img  src={sliderImg.img5} className="card-img" />
          </div>
              <Card.Body>
                  <Card.Title>Hc Churros Bukit.Changgang</Card.Title>
                    <Card.Text className="address">
                    Jalan Murni 1, Taman Langat Murni, 42700 Banting, Selangor
                    </Card.Text>
                  <Button className="card-btn" href="https://www.google.com/maps/dir//Jalan+Murni+1,+Taman+Langat+Murni,+42700+Banting,+Selangor/@2.8029141,101.578215,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cdb9001953b191:0xe59d5c3e93e52fc2!2m2!1d101.660617!2d2.802917?entry=ttu">Location</Button>
              </Card.Body>
          </Card>
          </div>
          <div className="card-container">
          <Card  className="card">
          <div className="image-container">
          <img  src={sliderImg.img5} className="card-img" />
          </div>
              <Card.Body>
                  <Card.Title>Hc Churros.Sg Lang</Card.Title>
                    <Card.Text className="address">
                    Jalan Cempaka Sari 2, Taman Cempaka, 42700 Banting, Selangor
                    </Card.Text>
                  <Button className="card-btn" href="https://www.google.com/maps?s=web&client=firefox-b-d&lqi=CgpoYyBjaHVycm9zSPC67_aVvYCACFoUEAAQARgAGAEiCmhjIGNodXJyb3OSAQZiYWtlcnmqAT4KCS9tLzAxXzhmNRABMh8QASIbn_4plySOn6s00sLPjzOMqyyI--o-ITVb5Pp8Mg4QAiIKaGMgY2h1cnJvcw&phdesc=_QynNsu_u5A&vet=12ahUKEwiygfPBseyGAxXScmwGHS9kCykQ1YkKegQIPBAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=my&sa=X&geocode=KbkrVyQAo80xMQfpTD6djuBP&daddr=Jalan+Cempaka+Sari+2,+Taman+Cempaka,+42700+Banting,+Selangor">Location</Button>
              </Card.Body>
          </Card>
          <Card  className="card">
          <div className="image-container">
          <img  src={sliderImg.img5} className="card-img" />
          </div>
              <Card.Body>
                  <Card.Title>Hc Churros.Official</Card.Title>
                    <Card.Text className="address">
                    Berhadapan Kem Tudm J, Jalan Sultan Suleiman Shah, Kampung Kathong, 42700 Banting, Selangor
                    </Card.Text>
                  <Button className="card-btn">Location</Button>
              </Card.Body>
          </Card>
          </div>
         
    </>
  )
}

export default CardOutlet