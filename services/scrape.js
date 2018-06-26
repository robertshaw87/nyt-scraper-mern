
const axios = require('axios');
const cheerio = require('cheerio');

module.exports =/*const test = */ async (req,res) => {

  const { topic, start, end } = req.query;
  
  try {
    const data = await axios.get(`https://www.nytimes.com/search?endDate=${end}&query=${topic}&sort=best&startDate=${start}`);
    
    const articles = [];
    const $ = cheerio.load(data.data, {
      normalizeWhitespace: true,
      xmlMode: true,
      lowerCaseTags: true
    });

    const orderedArticles = $('li')

    for (let i = 0; ((articles.length <=5) && (i < 25)); i++) {

      let url = $(orderedArticles[i]).find('a').attr('href');


      const title = $(orderedArticles[i]).find('h4').text();
      const description = $(orderedArticles[i]).find('p').text();
      const img = $(orderedArticles[i]).find('img').attr('src');

      if ((url !== undefined) && (img !== undefined) && (title !== undefined) && (description !== undefined)) {
        console.log(url);
        if(url.indexOf(".com") === -1){
          url = "https://www.nytimes.com" + url;
        }
        console.log(url);
        articles.push({ url, title, description, img });
      }

    }

    res.json(articles);

  } catch(err) {
    console.log(err);
  }
}

// (async () => {
//   console.log(await test())
// })();
