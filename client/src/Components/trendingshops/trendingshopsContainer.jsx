import React from "react";
import { GET_ALL_STORES } from "../../utils/queries";
import { useQuery } from "@apollo/client";

import SingleItem from "../favoritesList/singleItem";

const TrendingShopsContainer = () => {
  const { loading, data } = useQuery(GET_ALL_STORES);
  const storeList = data?.getAllStores || {};

  console.log(storeList);
  const trendingShops = [];

  if (data) {
    for (let i = 0; i < 5; i++) {
      if (storeList[i]) {
        trendingShops.push(storeList[i]);
      }
    }
    console.log("trendingshops", trendingShops);
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="">
      <h2>Trending Shops</h2>
      {storeList ? (
        <SingleItem storeList={trendingShops} />
      ) : (
        <p>There are no stores to view</p>
      )}
    </div>
  );
};

export default TrendingShopsContainer;
