import fs from "fs";

const tweets = JSON.parse(fs.readFileSync("./tweets.json", "utf8"));
console.log(tweets.length);

const urls = [];

tweets.forEach((tweet) => {
  if (tweet.entities?.urls) {
    tweet.entities.urls.forEach((url) => {
      // console.log(url.expanded_url);
      if (
        url.expanded_url.includes("en.wikipedia.org/wiki/") &&
        !urls.includes(url.expanded_url) &&
        !url.expanded_url.includes("en.wikipedia.org/wiki/Category:") &&
        !url.expanded_url.includes("en.wikipedia.org/wiki/Template:") &&
        !url.expanded_url.includes("en.wikipedia.org/wiki/File:") &&
        !url.expanded_url.includes("en.wikipedia.org/wiki/User:")
      ) {
        urls.push(url.expanded_url);
        fs.writeFileSync("./urls.json", JSON.stringify(urls));
      }
    });
  }
});
