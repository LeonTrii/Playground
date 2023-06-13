import bs4, requests

link = "https://www.amazon.com/Data-Structures-Algorithms-Made-Easy/dp/819324527X"
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0'}

def get_amazon_price(link, headers):
    try:
        res = requests.get(link, headers)
        res.raise_for_status()
        soup = bs4.BeautifulSoup(res.text, "html.parser")
        price = soup.select("#corePrice_feature_div > div > span > span:nth-child(2)")
        print(price[0])

    except requests.exceptions.HTTPError as err:
        print("HTTP Error:", err);

get_amazon_price(link, headers);