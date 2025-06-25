import { Carousel } from 'antd'
import firstImg from '../assets/images/firstCarImg.png'
import secondImg from '../assets/images/secondCarImg.png'
import thirdImg from '../assets/images/thirdCarImg.png'
import fourthImg from '../assets/images/fourthCarImg.png'
import fifthImg from '../assets/images/fifthCarImg.png'
import sexthImg from '../assets/images/sexthCarImg.png'
import seventhImg from '../assets/images/seventhCarImg.png'
const contentStyle = {
  margin: '20px 0',
  height: '470px',
  innerWidth: '100%',
  color: '#fff',
  lineHeight: '360px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%',
  objectFit: 'cover',
};

const CarouselComponent = () => {
  return (
    <Carousel arrows autoplaySpeed={2000} autoplay>
      <div>
        <img style={contentStyle} src={firstImg} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={secondImg} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={thirdImg} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={fourthImg} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={fifthImg} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={sexthImg} alt="" />
      </div>
      <div>
        <img style={contentStyle} src={seventhImg} alt="" />
      </div>
    </Carousel>
  )
}

export default CarouselComponent