import { ArrowRightOutlined } from "@ant-design/icons"
import { Button, Flex } from "antd"
import aboutImg from '../assets/images/about-img.png'
import { Typography } from "antd"
import { Link } from "react-router-dom";
const { Title } = Typography;

const AboutSection = () => {
    return (
        <>
            <Title level={2}>О Компании</Title>
            <Flex gap={50} align="center" >
                <img className="w-[45%]" src={aboutImg} alt="systemBlock" />
                <div className="my-20">
                    <Title level={2}>О Компании</Title>
                    <p className="my-8 font-medium russo-one-style">С 2009 года мы продаем компьютерную технику в Узбекистане. Мы - официальные партнеры многих международных компаний, что гарантирует качество нашей продукции. Наши опытные сотрудники всегда готовы помочь с выбором техники. В нашем шоуруме представлен широкий ассортимент товаров. Мы предлагаем доставку по всей республике и поддерживаем все виды оплаты для вашего удобства.</p>
                    <Button style={{
                        fontSize: '18px',
                        padding: '7px 14px',
                        height: 'auto',
                        borderRadius: 0,
                    }} color="pink" variant="solid">Узнать больше<ArrowRightOutlined /> </Button>
                </div>
            </Flex>
            <div className="flex ">
                <Link style={{ width: '20%' }}>
                    <div className="border border-gray-400 hover:bg-gray-300 py-16 px-4 flex flex-col items-center justify-center gap-4 h-60">
                        <p className="text-center text-xl"><span className="text-[#ff0096]">Лидеры</span> <br /> на игровом рынке </p>
                        <ArrowRightOutlined style={{ margin: '0 auto', fontSize:'28px'}} />
                    </div>
                </Link>
                <Link style={{ width: '20%' }}>
                    <div className="border border-gray-400 hover:bg-gray-300 py-16 px-4 flex flex-col items-center justify-center gap-4 h-60">
                        <p className="text-center">Более <br /><span className="text-[#ff0096]">500 положительных</span> <br />отзывов</p>
                        <ArrowRightOutlined  style={{ margin: '0 auto', fontSize:'28px'}} />
                    </div>
                </Link>
                <Link style={{ width: '20%' }}>
                    <div className="border border-gray-400 hover:bg-gray-300 py-16 px-4 flex flex-col items-center justify-center gap-4 h-60">
                        <p><span className="text-[#ff0096]">Топовые блогеры</span><br /> выбирают нас </p>
                        <ArrowRightOutlined style={{ margin: '0 auto', fontSize:'28px'}} />
                    </div>
                </Link>
                <Link style={{ width: '20%' }}>
                    <div className="border border-gray-400 hover:bg-gray-300 py-16 px-4 flex flex-col items-center justify-center gap-4 h-60">
                        <p>Оборудовали<br /><span className="text-[#ff0096]">60 компьютерных  клубов</span> <br /> под ключ </p>
                        <ArrowRightOutlined style={{ margin: '0 auto', fontSize:'28px'}} />
                    </div>
                </Link>
                <Link style={{ width: '20%' }}>
                    <div className="border border-gray-400 hover:bg-gray-300 py-16 px-4 flex flex-col items-center justify-center gap-4 h-60">
                        <p><span className="text-[#ff0096]">Лидеры</span><br /> на игровом рынке </p>
                        <ArrowRightOutlined style={{ margin: '0 auto', fontSize:'28px'}} />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default AboutSection