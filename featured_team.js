const teamDiv = document.getElementById('teams-container');
// Featured Team Profile Data Storing into object
const TeamDataObjects = [
  {
    team_Name: 'Boston Celtics',
    team_Title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    team_Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aspernatur quae repellat iure excepturi labore.',
    team_Images: 'Assets/logo/Boston_Celtics.svg',
  },
  {
    team_Name: 'Brooklyn Nets',
    team_Title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    team_Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aspernatur quae repellat iure excepturi labore.',
    team_Images: 'Assets/logo/Brooklyn_Nets.svg',
  },
  {
    team_Name: 'Chicago Bulls',
    team_Title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    team_Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aspernatur quae repellat iure excepturi labore.',
    team_Images: 'Assets/logo/Chicago_Bulls.svg',
  },
  {
    team_Name: 'New York Knicks',
    team_Title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    team_Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aspernatur quae repellat iure excepturi labore.',
    team_Images: 'Assets/logo/New_York_Knicks.svg',
  },
  {
    team_Name: 'Philadelphia 76ers',
    team_Title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    team_Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aspernatur quae repellat iure excepturi labore.',
    team_Images: 'Assets/logo/Philadelphia_76ers.svg',
  },
  {
    team_Name: 'Toronto Raptors',
    team_Title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    team_Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aspernatur quae repellat iure excepturi labore.',
    team_Images: 'Assets/logo/Toronto_Raptors.svg',
  },
];
// Define function for creating html elements
function loadTeamElements(i) {
  const teamContent = document.createElement('div');
  teamContent.className = 'team-content';
  teamContent.innerHTML = `<img src="${TeamDataObjects[i].team_Images}" alt="" class="team-img" />
  <div class="team-details">
    <div>
      <h3 class="team-name">${TeamDataObjects[i].team_Name}</h3>
      <p class="team-title">${TeamDataObjects[i].team_Title}</p>
    </div>
    <p class="team-description">${TeamDataObjects[i].team_Description}
    </p>
  </div>`;
  teamDiv.appendChild(teamContent);
}
// Call function for create content at run time.
function ShowTeamDataOnload() {
  for (let i = 0; i <= 5; i += 1) {
    loadTeamElements(i);
  }
}
const x = 1;
if (x !== 1) {
  ShowTeamDataOnload();
}