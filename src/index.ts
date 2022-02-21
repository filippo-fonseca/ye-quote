import axios from "axios";

/**
 * An *incredibly* complex and *high-tier* function for fetching a random Kanye West quote.
 */
export async function getRandomKanyeQuote() {
  try {
    const response = await axios.get(`https://api.kanye.rest/`);
    return response.data.quote;
  } catch (error) {
    return error;
  }
}
