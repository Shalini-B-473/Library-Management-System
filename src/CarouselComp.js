import Carousel from 'react-bootstrap/Carousel';
import img8 from './images/img8.jpg';
import img11 from './images/img11.jpg';
import img13 from './images/img13.jpg';
import img15 from './images/img15.jpg';
function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block px-5 w-100 me-5"
          src={img13}
          alt="Library"
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h1 style={{ position: "relative", top: "-250px" }}>Library Management System</h1>
          <h3 style={{ position: "relative", top: "-240px" }}>Your goto lms system</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block px-5 w-100 me-5 "
          src={img8}
          alt="Library"
          style={{ height: "500px" }}
        />

        <Carousel.Caption>
          <h2>Get books of your choice</h2>
          <h3>among 1000s of books</h3><br /><br />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block px-5 w-100 me-5 "
          src={img11}
          alt="Library"
          style={{ height: "500px" }}
        />

        <Carousel.Caption>
          <h2>A dedicated system for bibliophiles</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block px-5 w-100 me-5 "
          src={img15}
          alt="Library"
          style={{ height: "500px" }}
        />

        <Carousel.Caption>
          <h2>“Good friends, good books, and a sleepy conscience: this is the ideal life.”</h2>
          <h2>― Mark Twain</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;