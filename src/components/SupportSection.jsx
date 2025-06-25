import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { FiDollarSign, FiPackage, FiArrowRight } from 'react-icons/fi';
import { BsQuestionCircle } from 'react-icons/bs';

const { Title, Text } = Typography;

const supportData = [
  {
    icon: <FiDollarSign size={40} color="#ff00aa" />,
    title: 'Способ оплаты',
    description: 'Все об оплате покупок',
  },
  {
    icon: <BsQuestionCircle size={40} color="#ff00aa" />,
    title: 'FAQ',
    description: 'Часто задаваемые вопросы',
  },
  {
    icon: <FiPackage size={40} color="#ff00aa" />,
    title: 'Доставка',
    description: 'Информация о доставке',
  },
];

const SupportSection = () => {
  return (
    <div style={{ padding: '40px' }}>
      <Title level={2}>
        ПОДДЕРЖКА
      </Title>
      <Row gutter={[24, 24]}>
        {supportData.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
          >
            <Card
              style={{ textAlign: 'center', backgroundColor: '#f9f9f9' }}
              
            >
              <div style={{ marginBottom: '20px' }}>{item.icon}</div>
              <Title level={4}>{item.title}</Title>
              <Text type="secondary">{item.description}</Text>
              <div style={{ marginTop: '20px', fontSize: '20px' }}>
                <FiArrowRight />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SupportSection;
