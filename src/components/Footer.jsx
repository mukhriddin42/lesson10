import { Row, Col, Typography, Divider } from 'antd'
import {
  FiPhone,
  FiMapPin,
  FiClock,
} from 'react-icons/fi'
import {
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaTiktok,
} from 'react-icons/fa'

const { Title, Text } = Typography

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '40px 20px' }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={12} md={6}>
          <img src="/logo.svg" alt="Logo" style={{ height: 40 }} />
        </Col>

        <Col xs={24} sm={12} md={4}>
          <Title level={5}>Компания</Title>
          <Text block>Контакты</Text>
          <Text block>О нас</Text>
          <Text block>Почему мы?</Text>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <Title level={5}>Услуги</Title>
          <Text block>Апгрейд</Text>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <Title level={5}>Поддержка</Title>
          <Text block>Доставка</Text>
          <Text block>Способ оплаты</Text>
          <Text block>FAQ</Text>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <Title level={5}>Проекты</Title>
          <Text block>Блогеры</Text>
          <Text block>Игровые клубы</Text>
          <Text block>Киберспорт</Text>
        </Col>

        <Col xs={24} sm={24} md={8}>
          <div style={{ marginTop: 12 }}>
            <Text><FiPhone style={{ marginRight: 8 }} />Телефоны</Text><br />
            <Text>+998 (99) 124-24-24</Text><br />
            <Text>+998 (97) 124-24-24</Text><br /><br />

            <Text><FiMapPin style={{ marginRight: 8 }} />Адреса</Text><br />
            <Text>г. Ташкент, ул. Навои 37</Text><br />
            <Text>ТРЦ Малика, Магазин 24</Text><br /><br />

            <Text><FiClock style={{ marginRight: 8 }} />Режим работы</Text><br />
            <Text>Ежедневно с 10:00 до 20:00</Text>
          </div>
        </Col>
      </Row>

      <Divider style={{ borderTop: '2px solid #FF0096', marginTop: 40 }} />

      {/* Socials */}
      <Row justify="space-between" align="middle">
        <Col>
          <a href="#" style={{ color: '#FF0096', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <FaInstagram size={20} />
            <span>Instagram<br /><small>177 тыс. подписчиков</small></span>
          </a>
        </Col>
        <Col>
          <a href="#" style={{ color: '#FF0096', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <FaYoutube size={20} />
            <span>YouTube<br /><small>114 тыс. подписчиков</small></span>
          </a>
        </Col>
        <Col>
          <a href="#" style={{ color: '#FF0096', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <FaTelegramPlane size={20} />
            <span>Telegram<br /><small>23.4 тыс. подписчиков</small></span>
          </a>
        </Col>
        <Col>
          <a href="#" style={{ color: '#FF0096', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <FaTiktok size={20} />
            <span>Tik Tok<br /><small>30 тыс. подписчиков</small></span>
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
