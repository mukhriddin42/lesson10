import { useParams } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../features/products/ProductApi';
import { Button, Flex } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const boxStyle = {
  width: '100%',
  height: 120,
  borderRadius: 6,
  border: '1px solid #40a9ff',
};


const ProductDetail = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetProductsByIdQuery(id);
  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>Xatolik keldiyu</h2>
  console.log(data)
  return (
    <>
      <Title level={2}>{data.title}</Title>
      <Flex style={boxStyle} justify='space-between' align='center' >
        <img src={data.image} alt={data.title} />
        <div>
          <Title>{data.availabilityStatus}</Title>
          <div>
            <Title level={4}>Narxi</Title>
            <Title>{data.price}</Title>
          </div>
          <Button  block>Bir klikda sotib olish</Button>
          <Button type='primary' block>Savatga qo'shish</Button>
        </div>
      </Flex>
    </>
  )
}

export default ProductDetail