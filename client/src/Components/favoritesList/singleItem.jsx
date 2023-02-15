import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { StarOutlined } from "@ant-design/icons";
import style from "./favoritesList.module.css";

export default function SingleItem({ storeList }) {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  // console.log("storelist", storeList);

  return (
    <div className={style.singleItemContainer}>
      <Carousel afterChange={onChange}>
        {storeList &&
          storeList?.map((store) => (
            <div key={store.storeId}>
              <Link to={`/store/${store.storeId}`}>
                <article className={style.listItemContainer}>
                  <img
                    src={store.image}
                    alt={store.name}
                    className={style.image}
                  />
                  <div className={style.containerRow}>
                    <h3>{store.name}</h3>
                    <p className={style.rating}>
                      {store.avg_rating} <StarOutlined />
                    </p>
                  </div>
                  <p>{store.address}</p>
                </article>
              </Link>
            </div>
          ))}
      </Carousel>
    </div>
  );
}

// const contentStyle = {
//   margin: 0,
//   height: '160px',
//   color: 'red',
//   lineHeight: '160px',
//   textAlign: 'center',
// }
// const itemArray = [
//   { name: 'Boba House', rating: 5.0, description: 'business description' },
//   { name: 'ShareTea', rating: 3.5, description: 'business description' },
//   { name: 'Boba Place', rating: 4.0, description: 'business description' },
//   { name: 'Milk Tea', rating: 4.6, description: 'business description' },
// ]
