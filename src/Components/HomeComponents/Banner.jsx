import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img
        className='max-w-64'
        src="https://i.ibb.co/FLpp4bkG/chang-duong-Sj0i-Mtq-Z4w-unsplash-1068x712.jpg" />
        <p className="legend">Connect Through Shared Interests</p>
      </div>
      <div>
        <img src="https://i.ibb.co/G1p7rpb/images-4.jpg" />
        <p className="legend">Meet New People in Your City</p>
      </div>
      <div>
        <img src="https://i.ibb.co/3mNkW7hw/images-5.png" />
        <p className="legend">Grow Your Passion into a Community</p>
      </div>
    </Carousel>
  );
};

export default Banner;
