
const axios = require('axios');
const cheerio = require('cheerio');

/*module.exports =*/const test = async (query) => {
  // const { topic, start, end } = query;
  try {
    // const data = await axios.get(`https://www.nytimes.com/search?endDate=${end}&query=${topic}&sort=best&startDate=${start}`);
    const data = await axios.get(`https://www.nytimes.com/search?endDate=20180731&query=chickens&sort=best&startDate=20180601`);

    const articles = [];
    const $ = cheerio.load(data.data, {
      normalizeWhitespace: true,
      xmlMode: true,
      lowerCaseTags: true
    });

    const orderedArticles = $('ol').children().find('li');

    console.log(orderedArticles);

    orderedArticles.each((i,el) => {
      const url = $(this);
      // console.log(url);
      // articles.push(url);
    })

    return articles;

  } catch(err) {
    console.log(err);
  }
}

(async () => {
  console.log(await test())
})();

