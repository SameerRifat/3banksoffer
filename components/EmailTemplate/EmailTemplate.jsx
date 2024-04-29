import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

const EmailTemplate = async ({ formData, contactDetails }) => {
  const {
    country,
    industry,
    cryptoCurrency,
    experience,
    physicalPresence,
    moneyIn,
    moneyOut,
  } = formData

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    companyName
} = contactDetails

  return (
    <Html>
      <Head />
      <Preview>Your quote request</Preview>
      <Body style={main}>
        <Container>

          <Section style={content}>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {firstName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Thanks for contacting us
                </Heading>

                <Text style={paragraph}>
                  <b>First Name: </b>
                  {firstName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Last Name: </b>
                  {lastName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Phone Number: </b>
                  {phoneNumber}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Company Name: </b>
                  {companyName}
                </Text>
                {/* <br />
                <br /> */}
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Country: </b>
                  {country}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Industry: </b>
                  {industry}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Crypto Currency: </b>
                  {cryptoCurrency}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Experience: </b>
                  {experience}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Physical Presence: </b>
                  {physicalPresence}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Money In: </b>
                  {moneyIn}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Money Out: </b>
                  {moneyOut}
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};