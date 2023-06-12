import { Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const ItemCarousel = styled(Carousel.item)'
display: flex;

  align-items: center;

  justify-content: center;

  height: 100vh;

  img {

    max-height: 100%;

    max-width: 100%;

    object-fit: contain;

  }
';



export default function Home() {
  return (
    <div id="home">
      <div className="ratio ratio-16x9">
      <Carousel slide={true}>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="/img/img1.jpg"
            alt="First slide"
            fluid
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="/img/img2.jpg"
            alt="Second slide"
            fluid
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="/img/img3.jpg"
            alt="Third slide"
            fluid
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <br />
      <br />
    <Card className="mt-10px container-fluid">
    {/*Cards */}
      <Card.Header>Do You Know?</Card.Header>
      <Card.Body>
        <Card.Title>3 Gambar diatas diambil dari unsplash :v</Card.Title>
        <Card.Text>
            Dikarenakan saya tidak memiliki banyak stok gambar, jadi saya mencari alternatif seperti unsplash, untuk mengambil gambar dari resource tersebut!.
        </Card.Text>
        <Button variant="dark">Ke unsplash</Button>
      </Card.Body>
    </Card>
    </div>

  );
}
