import requests;

link = "https://raw.githubusercontent.com/truongmleon/Playground/small-projects/First%2013%20months/Data%20Visualization/Bicycle-Racing-Scatter-Plot/data.json"
res = requests.get(link);
res.raise_for_status();
print(res.text)