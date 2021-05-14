let team = localStorage.getItem("team");
console.log(team);

const callRoster = async function (team) {

    let results = await fetch(`https://fly.sportsdata.io/v3/nba/stats/json/Players/${team}?key= `);
    let roster = await results.json();
    console.log(roster);
    let rosterSpace = document.getElementById('playerList');
    roster.forEach( (player) => { 
      let tr = document.createElement('tr');
      //let headshot = document.createElement('img');
      //headshot.setAttribute('src', player.UsaTodayHeadshotNoBackgroundUrl);
      let jerseyNum = document.createElement('td');
      jerseyNum.textContent = `#${player.Jersey}`;
      let name = document.createElement('td');
      name.textContent = `${player.FirstName} ${player.LastName}`
      let pos = document.createElement('td');
      pos.textContent = player.Position;
      tr.append( jerseyNum, name, pos );
      rosterSpace.append(tr);
    });
};
callRoster(team);