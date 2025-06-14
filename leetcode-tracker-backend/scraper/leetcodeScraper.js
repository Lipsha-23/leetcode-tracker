const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeLeetCodeSubmissions(username) {
  try {
    const url = `https://leetcode.com/${username}/`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const submissions = [];

    $("script").each((i, el) => {
      const scriptText = $(el).html();
      if (scriptText.includes("recentAcSubmissionList")) {
        const match = scriptText.match(/"recentAcSubmissionList":(\[.*?\])/, 's');
        if (match && match[1]) {
          submissions.push(...JSON.parse(match[1]));
        }
      }
    });

    return submissions;
  } catch (error) {
    console.error("Scraping failed:", error.message);
    return [];
  }
}

module.exports = scrapeLeetCodeSubmissions;
