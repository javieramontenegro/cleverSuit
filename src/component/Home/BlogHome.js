import React from "react";

import {
  Row,
  Col,
  Button,
  Card,
  Carousel,
  CarouselItem
} from "react-bootstrap";
import data from "../../data/content.json";
/* import Carousel from "react-multi-carousel"; */

const { Body, Title, Text } = Card;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

class BlogHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 3,
      data
    };
  }

  loadMore = () => {
    this.setState(old => {
      return { visible: old.visible + 2 };
    });
  };

  render() {
    return (
      <>
        <Row
          className={` justify-content-center text-porfolio ${this.props.classAnimationPortfolio} `}
        >
          <Col
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={12}
            className={`${this.props.classAnimationPortfolio} `}
          >
            <h1 className="portfolio-title">
              {data.Home.sectionBlog.blogTitle}
            </h1>
          </Col>
          {/*  <Col xl={6} lg={2} md={0} sm={0} xs={0}></Col> */}
        </Row>
        <Row
          className={` justify-content-center ${this.props.classAnimationPortfolio} `}
        >
          <Col xs={8}>
            {/*  <Carousel>
              <CarouselItem> */}
            {data.Home.sectionBlog.blogList
              .slice(0, this.state.visible)
              .map((card, index) => {
                return (
                  <div
                    className="col-12 col-sm-10 col-md-8 col-lg-8 col-xl-4 item-carousel"
                    key={index}
                  >
                    <Card style={{ width: "100%" }}>
                      <div className="inner">
                        <Card.Img variant="top" src={card.img} />
                      </div>
                      <Body className="card-body-portfolio">
                        <Title>{card.text}</Title>
                        <Text>{card.description}</Text>
                        <Text className="area-text-home">{card.area}</Text>
                      </Body>
                    </Card>
                  </div>
                );
              })}
            {/*  </CarouselItem>
            </Carousel> */}
          </Col>
        </Row>
        <Row
          className={`  justify-content-center ${this.props.classAnimationPortfolio} `}
        >
          {this.state.visible < data.Home.sectionBlog.blogList.length && (
            <Button
              onClick={() => this.loadMore()}
              className="btn-loadMore-home"
            >
              {" "}
              load more
            </Button>
          )}
        </Row>
      </>
    );
  }
}
export default BlogHome;
