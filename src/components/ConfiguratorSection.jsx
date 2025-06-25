import { ArrowRightOutlined } from "@ant-design/icons"
import { Button, Flex } from "antd"
import systemBlock from '../assets/images/system-block-1.png'
import { Typography } from "antd"
const { Title } = Typography;

const ConfiguratorSection = () => {
    return (
        <Flex gap='middle' align="center" >
            <div className="my-20">
                <Title level={2}>Конфигуратор</Title>
                <p className="my-8 font-medium russo-one-style">Конфигуратор системного блока UPGrade поможет подобрать комплектацию ПК и проверить комплектующие на совместимость. Выбирайте, сравнивайте характеристики, заказывайте дополнительные опции для создания конфигурации своей мечты!</p>
                <Button style={{
                    fontSize: '18px',
                    padding: '7px 14px',
                    height: 'auto',
                    borderRadius: 0,
                }} color="pink" variant="solid">подробней  пк <ArrowRightOutlined /> </Button>
            </div>
            <div>
                <img src={systemBlock} alt="systemBlock" />
            </div>
        </Flex>
    )
}

export default ConfiguratorSection