let players = [
  { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
];

// write your code here
let AddIcon = '<i class="fa fa-plus-circle up"></i>';
let SubtractIcon = '<i class="fa fa-minus-circle down"></i>';

const dataPanel = document.querySelector("#data-panel");
function displayPlayerList(DataName) {
  for (let i in DataName) {
    dataPanel.innerHTML += `
        <tr>
          <th>
            ${DataName[i].name}
          </th>
          <th>
            <span>${DataName[i].pts}</span>${AddIcon}${SubtractIcon} 
          </th>
          <th>
            <span>${DataName[i].reb}</span>${AddIcon}${SubtractIcon} 
          </th>
          <th>
            <span>${DataName[i].ast}</span>${AddIcon}${SubtractIcon} 
          </th>
          <th>
            <span>${DataName[i].stl}</span>${AddIcon}${SubtractIcon} 
          </th>
          <th>
            <span>${DataName[i].blk}</span>${AddIcon}${SubtractIcon} 
          </th>
        </tr>
`;
  }
}
dataPanel.addEventListener("click", function (event) {
  let ClickUp = event.target;
  if (event.target.classList.contains("up")) {
    //     不能直接 B= event.target.parentElement.children[0].innerText 會無法辨識值 要另外丟值到下一層H
    let B = event.target.parentElement.children[0];
    let H = Number(B.innerText) + 1;
    if (H>=0){
        B.innerText = H;
      }

  } else if (event.target.classList.contains("down")) {
    console.log("dwon");
//     不能直接 B= event.target.parentElement.children[0].innerText 會無法辨識值 要另外丟值到下一層H
    let B = event.target.parentElement.children[0];
    let H = Number(B.innerText) - 1;
      if (H>=0){
        B.innerText = H;
      }
  }

  // console.log(parentEvent.innerText);
});

displayPlayerList(players);