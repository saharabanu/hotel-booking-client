'use client'
import { Card, Row, Col } from 'antd';


const PaymentMethods = () => {
  return (
    <Row >
      <Col xs={24} sm={24} md={24} lg={6}>
        <Card
          title="Credit Card"
          extra='Credit Card'
          style={{ width: 300 }}
        >
          <p>Pay with your credit card.</p>
        </Card>
      </Col>
      <br />
      <Col xs={24} sm={24} md={24} lg={6}>
        <Card title="PayPal" extra='Paypal' style={{ width: 300 }}>
          <p>Pay with your PayPal account.</p>
        </Card>
      </Col>
      <br /> 
      <Col xs={24} sm={24} md={24} lg={6}>
        <Card
          title="Bitcoin"
          extra="Bitcoin"
          style={{ width: 300 }}
        >
          <p>Pay with Bitcoin cryptocurrency.</p>
        </Card>
      </Col>
      {/* Add more payment methods as needed */}
    </Row>
  );
};

export default PaymentMethods;
