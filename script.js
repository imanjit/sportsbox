const standingsBtnLeag = document.querySelector("#standingsLeag")
const standingsBtnConf = document.querySelector("#standingsConf")
const standingsBtnDivi = document.querySelector("#standingsDivi")
const standingsBtnClear = document.querySelector("#clear")
const gamesBtnClear = document.querySelector("#clearGames")
const enterDate = document.querySelector("#enterDate")

const leagueTable = document.getElementById("League")

const westTable = document.getElementById("West")
const eastTable = document.getElementById("East")

const atlanticTable = document.getElementById("Atlantic")
const centralTable = document.getElementById("Central")
const southeastTable = document.getElementById("Southeast")
const northwestTable = document.getElementById("Northwest")
const pacificTable = document.getElementById("Pacific")
const southwestTable = document.getElementById("Southwest")

const westTableSpace = document.getElementById("westTableSpace")
const eastTableSpace = document.getElementById("eastTableSpace")
const leagueTableSpace = document.getElementById("leagueTableSpace")
const divisionTableSpace = document.getElementById("divisionTableSpace")

leagueTableSpace.style.display = "none";
westTableSpace.style.display = "none";
eastTableSpace.style.display = "none";
divisionTableSpace.style.display = "none";

const leagueStandings = async function(event) {
	eastTableSpace.style.display = "none";
	westTableSpace.style.display = "none";
	divisionTableSpace.style.display = "none";

	let leagueStandingsData = await getLeagueStandingsData();
	event.preventDefault();
	const leagueStandingsBody = document.createElement('tbody');
	leagueStandingsBody.setAttribute("id", "leagueStandingsBody");
	for (let i = 0; i < leagueStandingsData.length; i++) {
            let createNewRow = document.createElement("tr");
			let pos = document.createElement("th");
			pos.append(i + 1);
			let teamName = document.createElement("td");
			teamName.append(leagueStandingsData[i].fullName)
            let wins = document.createElement("td");
            wins.append(leagueStandingsData[i].win);
            let losses = document.createElement("td");
            losses.append(leagueStandingsData[i].loss);
			let winPercent = document.createElement("td");
            winPercent.append(leagueStandingsData[i].winPercentage);
			let GB = document.createElement("td");
            GB.append(parseInt(leagueStandingsData[i].win) + parseInt(leagueStandingsData[i].loss));
			let conf = document.createElement("td");
            conf.append(leagueStandingsData[i].conference.win + "-" + leagueStandingsData[i].conference.loss);
            let home = document.createElement("td");
			home.append(leagueStandingsData[i].home.win + "-" + leagueStandingsData[i].home.loss);
			let away = document.createElement("td");
			away.append(leagueStandingsData[i].away.win + "-" + leagueStandingsData[i].away.loss);
			let L10 = document.createElement("td");
			L10.append(leagueStandingsData[i].lastTenWin + "-" + leagueStandingsData[i].lastTenLoss);
			let strk = document.createElement("td");
			if (leagueStandingsData[i].winStreak === "0") {
				strk.append("L" + leagueStandingsData[i].streak);
			} else {
				strk.append("W" + leagueStandingsData[i].winStreak);
			}
			createNewRow.append(pos);
            createNewRow.append(teamName);
            createNewRow.append(wins);
            createNewRow.append(losses);
            createNewRow.append(winPercent);
			createNewRow.append(GB);
			createNewRow.append(conf);
			createNewRow.append(home);
			createNewRow.append(away);
			createNewRow.append(L10);
			createNewRow.append(strk);
            leagueStandingsBody.append(createNewRow);
    }
	leagueTable.append(leagueStandingsBody);
	leagueTableSpace.style.display = "block";
}
const westStandings = async function() {
	leagueTableSpace.style.display = "none";
	divisionTableSpace.style.display = "none";

	let westStandingsData = await getWestStandingsData();
	const westStandingsBody = document.createElement('tbody');
	westStandingsBody.setAttribute("id", "westStandingsBody");
	for (let i = 0; i < westStandingsData.length; i++) {
            let createNewRow = document.createElement("tr");
			let pos = document.createElement("th");
			pos.append(i + 1);
			let teamName = document.createElement("td");
			teamName.append(westStandingsData[i].fullName)
            let wins = document.createElement("td");
            wins.append(westStandingsData[i].win);
            let losses = document.createElement("td");
            losses.append(westStandingsData[i].loss);
            let winPercent = document.createElement("td");
            winPercent.append(westStandingsData[i].winPercentage);
			let GB = document.createElement("td");
            GB.append(parseInt(westStandingsData[i].win) + parseInt(westStandingsData[i].loss, 10));
			let conf = document.createElement("td");
            conf.append(westStandingsData[i].conference.win + "-" + westStandingsData[i].conference.loss);
            let home = document.createElement("td");
			home.append(westStandingsData[i].home.win + "-" + westStandingsData[i].home.loss);
			let away = document.createElement("td");
			away.append(westStandingsData[i].away.win + "-" + westStandingsData[i].away.loss);
			let L10 = document.createElement("td");
			L10.append(westStandingsData[i].lastTenWin + "-" + westStandingsData[i].lastTenLoss);
			let strk = document.createElement("td");
			if (westStandingsData[i].winStreak === "0") {
				strk.append("L" + westStandingsData[i].streak);
			} else {
				strk.append("W" + westStandingsData[i].winStreak);
			}
			createNewRow.append(pos);
            createNewRow.append(teamName);
            createNewRow.append(wins);
            createNewRow.append(losses);
            createNewRow.append(winPercent);
			createNewRow.append(GB);
			createNewRow.append(conf);
			createNewRow.append(home);
			createNewRow.append(away);
			createNewRow.append(L10);
			createNewRow.append(strk);
            westStandingsBody.append(createNewRow);
    }
	westTable.append(westStandingsBody);
}
const divisionStandings = async function(event) {
	leagueTableSpace.style.display = "none";
	eastTableSpace.style.display = "none";
	westTableSpace.style.display = "none";
    divisionTableSpace.style.display = "none";

	let leagueStandingsData = await getLeagueStandingsData();

	const atlanticStandingsBody = document.createElement('tbody');
	atlanticStandingsBody.setAttribute("id", "atlanticStandingsBody");

	const centralStandingsBody = document.createElement('tbody');
	centralStandingsBody.setAttribute("id", "centralStandingsBody");

	const southeastStandingsBody = document.createElement('tbody');
	southeastStandingsBody.setAttribute("id", "southeastStandingsBody");

	const northwestStandingsBody = document.createElement('tbody');
	northwestStandingsBody.setAttribute("id", "northwestStandingsBody");

	const pacificStandingsBody = document.createElement('tbody');
	pacificStandingsBody.setAttribute("id", "pacificStandingsBody");

	const southwestStandingsBody = document.createElement('tbody');
	southwestStandingsBody.setAttribute("id", "southwestStandingsBody");
	 console.log(leagueStandingsData)
	for (let i = 0; i < leagueStandingsData.length; i++) {
            let createNewRow = document.createElement("tr");
			let pos = document.createElement("th");
			pos.append(leagueStandingsData[i].division.rank);
			let teamName = document.createElement("td");
			teamName.append(leagueStandingsData[i].fullName)
            let wins = document.createElement("td");
            wins.append(leagueStandingsData[i].win);
            let losses = document.createElement("td");
            losses.append(leagueStandingsData[i].loss);
            let winPercent = document.createElement("td");
            winPercent.append(leagueStandingsData[i].winPercentage);
			let GB = document.createElement("td");
            GB.append(parseInt(leagueStandingsData[i].win) + parseInt(leagueStandingsData[i].loss, 10));
			let conf = document.createElement("td");
            conf.append(leagueStandingsData[i].conference.win + "-" + leagueStandingsData[i].conference.loss);
            let home = document.createElement("td");
			home.append(leagueStandingsData[i].home.win + "-" + leagueStandingsData[i].home.loss);
			let away = document.createElement("td");
			away.append(leagueStandingsData[i].away.win + "-" + leagueStandingsData[i].away.loss);
			let L10 = document.createElement("td");
			L10.append(leagueStandingsData[i].lastTenWin + "-" + leagueStandingsData[i].lastTenLoss);
			let strk = document.createElement("td");
			if (leagueStandingsData[i].winStreak === "0") {
				strk.append("L" + leagueStandingsData[i].streak);
			} else {
				strk.append("W" + leagueStandingsData[i].winStreak);
			}
			createNewRow.append(pos);
            createNewRow.append(teamName);
            createNewRow.append(wins);
            createNewRow.append(losses);
            createNewRow.append(winPercent);
			createNewRow.append(GB);
			createNewRow.append(conf);
			createNewRow.append(home);
			createNewRow.append(away);
			createNewRow.append(L10);
			createNewRow.append(strk);
			if (leagueStandingsData[i].division.name === "southwest"){
				southwestStandingsBody.append(createNewRow)
			} else if (leagueStandingsData[i].division.name === "atlantic") {
				atlanticStandingsBody.append(createNewRow)
			} else if (leagueStandingsData[i].division.name === "southeast") {
				southeastStandingsBody.append(createNewRow)
			} else if (leagueStandingsData[i].division.name === "northwest") {
				northwestStandingsBody.append(createNewRow)
			} else if (leagueStandingsData[i].division.name === "pacific") {
				pacificStandingsBody.append(createNewRow)
			} else if (leagueStandingsData[i].division.name === "central") {
				centralStandingsBody.append(createNewRow)
			}
            
    }
	atlanticTable.append(atlanticStandingsBody);
	centralTable.append(centralStandingsBody);
	southeastTable.append(southeastStandingsBody);
	northwestTable.append(northwestStandingsBody);
	pacificTable.append(pacificStandingsBody);
	southwestTable.append(southwestStandingsBody);

	divisionTableSpace.style.display = "block";
}
const eastStandings = async function() {
	leagueTableSpace.style.display = "none";

	let eastStandingsData = await getEastStandingsData();
	const eastStandingsBody = document.createElement('tbody');
	eastStandingsBody.setAttribute("id", "eastStandingsBody");
	for (let i = 0; i < eastStandingsData.length; i++) {
            let createNewRow = document.createElement("tr");
			let pos = document.createElement("th");
			pos.append(i + 1);
			let teamName = document.createElement("td");
			teamName.append(eastStandingsData[i].fullName)
            let wins = document.createElement("td");
            wins.append(eastStandingsData[i].win);
            let losses = document.createElement("td");
            losses.append(eastStandingsData[i].loss);
            let winPercent = document.createElement("td");
            winPercent.append(eastStandingsData[i].winPercentage);
			let GB = document.createElement("td");
            GB.append(parseInt(eastStandingsData[i].win) + parseInt(eastStandingsData[i].loss, 10));
			let conf = document.createElement("td");
            conf.append(eastStandingsData[i].conference.win + "-" + eastStandingsData[i].conference.loss);
            let home = document.createElement("td");
			home.append(eastStandingsData[i].home.win + "-" + eastStandingsData[i].home.loss);
			let away = document.createElement("td");
			away.append(eastStandingsData[i].away.win + "-" + eastStandingsData[i].away.loss);
			let L10 = document.createElement("td");
			L10.append(eastStandingsData[i].lastTenWin + "-" + eastStandingsData[i].lastTenLoss);
			let strk = document.createElement("td");
			if (eastStandingsData[i].winStreak === "0") {
				strk.append("L" + eastStandingsData[i].streak);
			} else {
				strk.append("W" + eastStandingsData[i].winStreak);
			}
			createNewRow.append(pos);
            createNewRow.append(teamName);
            createNewRow.append(wins);
            createNewRow.append(losses);
            createNewRow.append(winPercent);
			createNewRow.append(GB);
			createNewRow.append(conf);
			createNewRow.append(home);
			createNewRow.append(away);
			createNewRow.append(L10);
			createNewRow.append(strk);
            eastStandingsBody.append(createNewRow);
    }
	eastTable.append(eastStandingsBody);
}
const getScheduleData = async function (inputDate) {
	let date = inputDate;
	let scheduleData = [];
	const results = await fetch("https://api-nba-v1.p.rapidapi.com/games/date/" + date, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08e5f79f79msh32c8baa272684c6p18097ejsnb7a075f07bd3",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
	})
	const json = await results.json();
	json.api.games.forEach(element => {
			scheduleData.push(element)
		});
		return scheduleData
}
const confStandings = async function (event) {
	event.preventDefault();
	leagueTableSpace.style.display = "none";
	await eastStandings();
	await westStandings();
	eastTableSpace.style.display = "block";
	westTableSpace.style.display = "block";
}
const getLeagueStandingsData = async function() {
	const leagueStandingsData = [];
	let teamData = await getTeamData();
	let results = await fetch("https://api-nba-v1.p.rapidapi.com/standings/standard/2020", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08e5f79f79msh32c8baa272684c6p18097ejsnb7a075f07bd3",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
	})
	let json = await results.json();
		json.api.standings.sort((a, b) => {
			if (a.winPercentage > b.winPercentage) {
				return -1;
			} else {
				return 1;
			}
		});
		json.api.standings.forEach(element => {
			let teamName = teamData.find(e => e.teamId === element.teamId)
			element.fullName = teamName.fullName;
			leagueStandingsData.push(element);
		});
	return(leagueStandingsData)
}

const getWestStandingsData = async function () {
	const westStandingsData = [];
	let teamData = await getTeamData();
	let results = await fetch("https://api-nba-v1.p.rapidapi.com/standings/standard/2020/conference/west", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08e5f79f79msh32c8baa272684c6p18097ejsnb7a075f07bd3",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
	})
	let json = await results.json();
		json.api.standings.sort((a, b) => {
			if (a.winPercentage > b.winPercentage) {
				return -1;
			} else {
				return 1;
			}
		});
		json.api.standings.forEach(element => {
			let teamName = teamData.find(e => e.teamId === element.teamId)
			element.fullName = teamName.fullName;
			westStandingsData.push(element);
		});
	return(westStandingsData)
}

const getEastStandingsData = async function () {
	const eastStandingsData = [];
	let teamData = await getTeamData();
	let results = await fetch("https://api-nba-v1.p.rapidapi.com/standings/standard/2020/conference/east", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "08e5f79f79msh32c8baa272684c6p18097ejsnb7a075f07bd3",
			"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
		}
	})
	let json = await results.json();
		json.api.standings.sort((a, b) => {
			if (a.winPercentage > b.winPercentage) {
				return -1;
			} else {
				return 1;
			}
		});
		json.api.standings.forEach(element => {
			let teamName = teamData.find(e => e.teamId === element.teamId)
			element.fullName = teamName.fullName;
			eastStandingsData.push(element);
		});
	return(eastStandingsData)
}

const getTeamData = async function () {
	const teamData = [];
	const results = await fetch("https://api-nba-v1.p.rapidapi.com/teams/league/standard", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "08e5f79f79msh32c8baa272684c6p18097ejsnb7a075f07bd3",
			"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
		}
	})
	const json = await results.json();
	json.api.teams.forEach(element => {
		if ((element.leagues.standard.confName === "West")
		|| (element.leagues.standard.confName === "East")) {
		teamData.push(element)
		}
		});
	return(teamData)
}
const clearStandings = function () {
	leagueTableSpace.style.display = "none";
	westTableSpace.style.display = "none";
	eastTableSpace.style.display = "none";
	divisionTableSpace.style.display = "none";
}
const clearGames = function () {
	let currentShowing = document.getElementById("gamesGoHere");
	currentShowing.innerHTML = '';
}
const displayGamesOfDate = async function (event) {
	clearGames();
	let gameSpace = document.createElement("div")
	gameSpace.setAttribute("class", "content columns is-centered is-multiline")
	let date = document.getElementById("date").value;
	
	let scheduleData = await getScheduleData(date);
	event.preventDefault();
	let currentShowing = document.getElementById("gamesGoHere");

	for (let i = 0; i < scheduleData.length; i++) {
		let createNewCard = document.createElement("div");
		createNewCard.setAttribute("class", "card");
		createNewCard.setAttribute("id", "gameCard");
		let homeTeamName = document.createElement("p");
		homeTeamName.append(scheduleData[i].hTeam.shortName + " " + scheduleData[i].hTeam.nickName)
		let horizontalRule = document.createElement("hr")
		let visitorTeamName = document.createElement("p");
		visitorTeamName.append(scheduleData[i].vTeam.shortName + " " + scheduleData[i].vTeam.nickName)
		if (scheduleData[i].statusGame === "Finished" || scheduleData[i].statusGame === "In Play") {
			let homeScore = document.createElement("span")
			homeScore.setAttribute("style", "float: right")
			let visitorScore = document.createElement("span")
			visitorScore.setAttribute("style", "float: right")
			homeScore.append(scheduleData[i].hTeam.score.points)
			visitorScore.append(scheduleData[i].vTeam.score.points)
			if (parseInt(homeScore, 10) > parseInt(visitorScore, 10)) {
				homeScore.setAttribute("style", "color: green;")
				visitorScore.setAttribute("style", "color: red;")
			} else {
				homeTeamName.setAttribute("style", "color: red;")
				visitorTeamName.setAttribute("style", "color: green;")
			}
			homeTeamName.append(homeScore)
			visitorTeamName.append(visitorScore)
		}
		createNewCard.append(homeTeamName);
		createNewCard.append(horizontalRule);
		createNewCard.append(visitorTeamName);
		gameSpace.append(createNewCard);
		currentShowing.append(gameSpace);
	}
}

standingsBtnConf.addEventListener("click", confStandings);
standingsBtnLeag.addEventListener("click", leagueStandings);
standingsBtnDivi.addEventListener("click", divisionStandings);
standingsBtnClear.addEventListener("click", clearStandings);
gamesBtnClear.addEventListener("click", clearGames);
enterDate.addEventListener("click", displayGamesOfDate);

bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
  });
