import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from "../img/IC-1.png"
import img2 from "../img/IC-2.png"
import img3 from "../img/IC-3.png"

function CaroselTest() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <Image src={img1} rounded />
                <Carousel.Caption>
                    <h3>Shop anywhere</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <Image src={img2} rounded />
                <Carousel.Caption>
                    <h3>Shop at home</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={img3} rounded />
                <Carousel.Caption>
                    <h3>Shop with friends</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CaroselTest;