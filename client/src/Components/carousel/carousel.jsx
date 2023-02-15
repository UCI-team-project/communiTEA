/* eslint-disable jsx-a11y/alt-text */
import { Carousel } from "antd";
import image1 from "../../assets/images/tea.jpg";
import image2 from "../../assets/images/tea2.jpg";
import image3 from "../../assets/images/matchatea.jpg";
import image4 from "../../assets/images/slush.jpg";
import style from "./imageCarousel.module.css";

export default function ImageCarousel() {
  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };

  return (
    // <Carousel autoplay autoplaySpeed={8000} afterChange={onChange}>
    <Carousel autoplay autoplaySpeed={8000}>
      {itemArray.map((item, key) => (
        <div key={key} style={contentStyle}>
          <article className="">
            <div className={style.imgContainer}>
              <img src={item.img} className={style.carouselImg} />
            </div>
          </article>
        </div>
      ))}
    </Carousel>
  );
}

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const itemArray = [
  { img: image4 },
  { img: image2 },
  { img: image1 },
  { img: image3 },
];
