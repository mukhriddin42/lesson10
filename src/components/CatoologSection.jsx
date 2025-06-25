import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Carousel, Col, Flex, Row, Typography } from "antd"
import { useRef } from "react";
const { Title } = Typography;

const contentStyle = {
    margin: 0,
    height: '560px',
    color: '#fff',
    lineHeight: '560px',
    textAlign: 'center',
    background: '#364d79',
};

const CatologSection = () => {
    const carouselRef = useRef();

    const prevSlide = () => {
        carouselRef.current?.prev();
    }

    const nextSlide = () => {
        carouselRef.current?.next();
    }
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
                <div>
                    <Row gutter={[16, 16]}>
                        <Col span={6}>
                            <div style={{ background: '#eee', padding: '10px', textAlign: 'center' }}>1</div>
                        </Col>
                        <Col span={6}>
                            <div style={{ background: '#eee', padding: '10px', textAlign: 'center' }}>2</div>
                        </Col>
                        <Col span={6}>
                            <div style={{ background: '#eee', padding: '10px', textAlign: 'center' }}>3</div>
                        </Col>
                        <Col span={6}>
                            <div style={{ background: '#eee', padding: '10px', textAlign: 'center' }}>4</div>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
                        <Col span={6}>
                            <div style={{ background: '#eee', padding: '10px', textAlign: 'center' }}>5</div>
                        </Col>
                        <Col span={6}>
                            <div style={{ background: '#eee', padding: '10px', textAlign: 'center' }}>6</div>
                        </Col>
                        <Col span={6}>
                            <div style={{ background: '#eee', padding: '10px', textAlign: 'center' }}>7</div>
                        </Col>
                        <Col span={6}>
                            <div style={{ background: '#eee', padding: '10px', textAlign: 'center' }}>8</div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default CatologSection