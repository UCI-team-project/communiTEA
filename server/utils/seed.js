const connection = require('../config');
const User = require('../models/User')


connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});

  const users = [
    {
      username: "johndoe",
      password: "johndoe",
      first_name: "John",
      last_name: "Doe",
      savedStores: [
        {
          storeId: 'Eq4v9VGhuYsghNuPiXVHZg',
          name: 'COMEBUYTEA',
          address: '7777 Edinger Ave 174, Huntington Beach, CA 92647',
          categoriesL: ['Bubble Tea', 'Coffee & Tea'],
          yelpURL: 'https://www.yelp.com/biz/comebuytea-huntington-beach-2?adjust_creative=cufIGHddzIjtERhY1UGH5w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=cufIGHddzIjtERhY1UGH5w',
          ratings: [
            {
              content: "i love this place",
              score: 4.2,
              reaction: "🙀",
              storeURL: 'https://www.yelp.com/biz/comebuytea-huntington-beach-2?adjust_creative=cufIGHddzIjtERhY1UGH5w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=cufIGHddzIjtERhY1UGH5w',
              storeName: 'COMEBUYTEA',
            }
          ]
        }
      ]
    }
  ];


  await User.collection.insertMany(users);
  console.log(users);
  process.exit(0);
});
