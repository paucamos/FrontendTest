/* Function to trigger the Enter Key on search */
function search() {
  username = document.getElementById('searchInput');

  searchInput.addEventListener('keypress', (event) => { //Event Enter Key Click
    if (event.key === 'Enter') {
      if (username.value == 'Pau') {
        showAll();
      } else {
        userError();
      }
    }
  });
  searchButton.addEventListener('click', () => { //Event button click
    if (username.value == 'Pau') {
      showAll();
    } else {
      userError();
    }
  });
}
// Load events
window.addEventListener('load', search);

created = false; //dont repeat on multiple click

function showAll() { //creates img and some text
  var trigger = document.getElementById('resultContainerError');
  trigger.innerHTML = "";
  if (created == false) {
    objTo = document.getElementById('resultContainer');
      var divContentContainer = document.createElement("div");
      divContentContainer.id = "resultContentContainer";
      objTo.appendChild(divContentContainer);

      divContentImg = document.getElementById('resultContentContainer');
      var divImg = document.createElement("div");
      divImg.id = "imgDiv";
      divContentContainer.appendChild(divImg);

      var divContentImgIn = document.getElementById('imgDiv');
      var img = document.createElement("img");
      img.setAttribute("src", "img/icon.png");
      divContentImgIn.appendChild(img);

      createText();
      createRepos();
    created = true;
  }
}
function createText(){ //creates text
  var textDiv = document.createElement("div");
  textDiv.id = "idText";
  textDiv.innerHTML = "\@\Pau";

  var textName = document.createElement("div");
  textName.id = "textName";
  textName.innerHTML = "Pau Camós Parra";

  var textBio = document.createElement("div");
  textBio.id = "textBio";
  textBio.innerHTML = "20yo student...";

  divContentImg.appendChild(textDiv);
  divContentImg.appendChild(textName);
  divContentImg.appendChild(textBio);
}

function createRepos(){ //this creates repos inside the div
  var reposDiv = document.createElement("div");
  reposDiv.id = "reposTitle";
  reposDiv.innerHTML = "Repositories";

  var container = document.getElementById("container");
  container.appendChild(reposDiv);

  /*Repos List*/
  var repo1Container = document.createElement("div");
  var repo2Container = document.createElement("div");
  var repo3Container = document.createElement("div");
  var repo4Container = document.createElement("div");

  repo1Container.className = "repos";
  repo2Container.className = "repos";
  repo3Container.className = "repos";
  repo4Container.className = "repos";

  repo1Container.innerHTML = "Repo 1";
  repo2Container.innerHTML = "Repo 2";
  repo3Container.innerHTML = "Repo 3";
  repo4Container.innerHTML = "Repo 4";

  container.appendChild(repo1Container);
  container.appendChild(repo2Container);
  container.appendChild(repo3Container);
  container.appendChild(repo4Container);
}
errorCreated = false;
function userError(){
  if (errorCreated == false) {
    var triggerContainer = document.getElementById('resultContainer');
    triggerContainer.innerHTML = "";

    var trigger = document.getElementById('resultContainerError');

    var myErrorDiv = document.createElement('div');
    myErrorDiv.id = "errorDiv";
    myErrorDiv.innerHTML = "Does not exist";

    trigger.appendChild(myErrorDiv);

    errorCreated = true;
  }
}
