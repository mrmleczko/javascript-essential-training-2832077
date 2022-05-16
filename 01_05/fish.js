/** fish.js practice creating classes 

will be giving some properties so describe a fish
*/
const updateBackpack = (update) => {
    let main = document.querySelector("main"); // main is an element
    main.innerHTML = markup(backpack);
    
    console.info(update);
  };
  
const fish = {
    name: "Clownfish",
    size: "Small",
    aggression: "Peaceful",
    purpose: "Asthetics",
    reefSafe: true,
    toggleSafe: function (fishStatus) {
    this.fishChange = fishStatus;
    updateReefSafe(`Fish status changed.`);
  },
}

// {
      
//         // Define Properties here , class should be declared above

//         // this.name = name;
//         // this.size = size;
//         // this.aggression = aggression;
//         // this.purpose = purpose;
//         // this.reefSafe = reefSafe;


//     };    
  

    const markup = (fish) => {
        return `
        <div>
          <h3>${fish.name}</h3>
          <ul>
            <li>Size: ${fish.size}</li>
            <li>Aggression: ${fish.aggression}</li>
            <li>Purpose: ${fish.purpose}</li>
            <li>Reef Safe: ${fish.fishChange ? "Peaceful" : "Aggressive"}</li>
          </ul>
        </div>
      `;
      };



const main = document.createElement("main");
main.innerHTML = markup(fish);
document.body.appendChild(main);
