import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Card, Carousel, Col, Flex, Row, Typography } from "antd"
import { useRef } from "react";
import catologs from '../../public/data/catolog.json'
import { chunkArray } from "../utils/chunkArray";
const { Title } = Typography;

const CatologSection = () => {
    const carouselRef = useRef();

    const prevSlide = () => {
        carouselRef.current?.prev();
    }

    const nextSlide = () => {
        carouselRef.current?.next();
    }

    const groupedCata = chunkArray(catologs, 8);
    return (
        <div>
            <Title level={2}>Комплектующие</Title>
            <Flex gap='middle' justify="end">
                <Flex onClick={prevSlide} style={{ backgroundColor: '#FF0096', color: '#FFF', padding: '10px 14px', cursor: 'pointer' }}>
                    <ArrowLeftOutlined />
                </Flex>
                <Flex onClick={nextSlide} style={{ backgroundColor: '#FF0096', color: '#FFF', padding: '10px 14px', cursor: 'pointer' }}>
                    <ArrowRightOutlined />
                </Flex>
            </Flex>
            <Carousel ref={carouselRef} className="my-6" infinite={false}>
                {groupedCata.map((group, index) => (
                    <div key={index} style={{ padding: '10px' }}>
                        <Row gutter={[16, 16]}>
                            {group.map((item, i) => (
                                <Col
                                    key={i}
                                    xs={24}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                >
                                    <Card
                                        hoverable
                                        cover={<img alt={item.title} src={item.image} style={{ height: '240px', objectFit: 'cover' }} />}
                                    >
                                        <Card.Meta style={{textAlign: 'center'}} title={item.title} />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CatologSection