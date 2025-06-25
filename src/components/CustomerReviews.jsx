import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const { Title, Text } = Typography;

const reviewItems = [
    {
        label: 'Общий рейтинг',
        value: '95%',
    },
    {
        label: 'Yandex.uz',
        description: 'Оставить свой отзыв',
        icon: <FiArrowRight />,
    },
    {
        stars: 5,
        description: '93% покупателей купили бы здесь снова',
        icon: <FiArrowRight />,
    },
    {
        label: '500+',
        description: 'Положительных оценок за все время работы',
        icon: <FiArrowRight />,
    },
];

const CustomerReviews = () => {
    return (
        <div style={{ padding: '40px' }}>
            <Title level={2}>
                Oтзывы клиентов
            </Title>
            <Row gutter={[24, 24]}>
                {reviewItems.map((item, index) => (
                    <Col key={index} xs={24} sm={12} md={6}>
                        <Card
                            bordered={false}
                            style={{ backgroundColor: '#f9f9f9', height: '100%' }}
                            bodyStyle={{
                                padding: '30px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            {/* Yulduzlar */}
                            {item.stars && (
                                <div style={{ marginBottom: '10px', display:'flex' }}>
                                    {[...Array(item.stars)].map((_, i) => (
                                        <FaStar key={i} color="#ff00aa" />
                                    ))}
                                </div>
                            )}

                            {/* Yuqori matn */}
                            {item.label && (
                                <Text style={{ fontSize: '16px', color: '#ff00aa' }}>{item.label}</Text>
                            )}

                            {/* Katta raqam yoki foiz */}
                            {item.value && (
                                <Title level={2} style={{ margin: 0, fontSize: '40px' }}>
                                    {item.value}
                                </Title>
                            )}

                            {/* Pastki matn va icon */}
                            {item.description && (
                                <div
                                    style={{
                                        marginTop: '20px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text type="secondary">{item.description}</Text>
                                    {item.icon && <span style={{ fontSize: '20px' }}>{item.icon}</span>}
                                </div>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CustomerReviews;
