var data = [3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 7],
w = 400,
h = 200,
margin = 20,
y = d3.scale.linear().domain([0, d3.max(data)]).range([0 + margin, h - margin]),
x = d3.scale.linear().domain([0, data.length]).range([0 + margin, w - margin])