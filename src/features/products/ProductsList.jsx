import { Card, Col, Row } from 'antd';
import { useGetProductsQuery } from './ProductApi'
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

const { Title } = Typography;

const ProductsList = () => {
  const { data, isError, isLoading } = useGetProductsQuery();

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Xatolik yuz berdiku</h1>
  console.log(data)

  return (
    <Row gutter={[32, 32]}>
      {data.map((product) => (
        <Col
          key={product.id}
          xs={24}
          sm={12}
          md={8}
          lg={6}
        >
          <Link to={`/products/${product.id}`}>
            <Card
              hoverable
              cover={<img
                alt={product.title}
                src={product.image}
                style={{ height: '200px', objectFit: 'cover', overflow: 'hidden' }}
              />
              }
            >
              <Title level={4}>{product.title}</Title>
              <p>{product.description}</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default ProductsList