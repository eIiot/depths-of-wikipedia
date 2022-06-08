import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
// get user tweets and follow pagnation

const tweets = [];

const fetchTweets = async (token) => {
  fetch(
    `https://api.twitter.com/2/users/1289214585170464773/tweets?max_results=100&pagination_token=${token}&tweet.fields=entities`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      tweets.push(...data.data);
      fs.writeFileSync("./tweets.json", JSON.stringify(tweets));
      if (data.meta.next_token) {
        fetchTweets(data.meta.next_token);
      } else {
        console.log(tweets);
      }
    })
    .catch((err) => console.log(err));
};

fetch(
  "https://api.twitter.com/2/users/1289214585170464773/tweets?max_results=100&tweet.fields=entities",
  {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    tweets.push(...data.data);
    fs.writeFileSync("./tweets.json", JSON.stringify(tweets));

    if (data.meta.next_token) {
      fetchTweets(data.meta.next_token);
    } else {
      console.log(tweets);
    }
  });
