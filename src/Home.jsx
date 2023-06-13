import { Container, Stack, Carousel, Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
let API = "https://ridwandev.xyz/api/detik";

export default function Home() {
  const [detik, setDetik] = useState([]);
  const [img, setImg] = useState([
    {
      src: "/img/img1.jpg",
      title: "First slide",
      desc: "Is Fisrt Slide of the carousel?",
    },
    {
      src: "/img/img2.jpg",
      title: "Second  slide",
      desc: "Is second  Slide of the carousel?",
    },
    {
      src: "/img/img3.jpg",
      title: "Third  slide",
      desc: "Is Third  Slide of the carousel?",
    },
  ]);

  // useEffect(() => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setDetik(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="home">
      <Carousel className="">
        {img.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.src} alt={item.title} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container fluid className="mt-5 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fillOpacity="0.1"
            d="M0,160L0,32L144,32L144,128L288,128L288,224L432,224L432,256L576,256L576,64L720,64L720,160L864,160L864,32L1008,32L1008,128L1152,128L1152,256L1296,256L1296,128L1440,128L1440,0L1296,0L1296,0L1152,0L1152,0L1008,0L1008,0L864,0L864,0L720,0L720,0L576,0L576,0L432,0L432,0L288,0L288,0L144,0L144,0L0,0L0,0Z"
          ></path>
        </svg>
        <Stack direction="horizontal">
          <div className="table">
            <Table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {img.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        className="d-block w-100 img-thumbnail"
                        width={40}
                        height={120}
                        src={item.src}
                        alt={item.title}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
