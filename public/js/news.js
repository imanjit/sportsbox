const newsSpace = document.getElementById("newsSpace");

const displayNews = async () => {
	const news = await fetch('https://fly.sportsdata.io/v3/nba/scores/json/News?key=9a108b6dad1848478e8b7308446476ea');
	const newsjson = await news.json();
	console.log(newsjson);
	newsjson.forEach((news) => {
		let div = document.createElement('div');
		div.setAttribute('id', 'TeamPost');
		div.setAttribute('class', 'box');
		let a = document.createElement('a');
		a.setAttribute('href', `${news.Url}`)
		a.textContent = `${news.Title} - ${news.TimeAgo}`
		let p = document.createElement('p');
		p.textContent = `${news.Content}`;

		div.append(a, p);
		newsSpace.append(div);
	});
	

}
displayNews();