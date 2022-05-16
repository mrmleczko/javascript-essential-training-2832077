/** fish.js practice creating classes 

will be giving some properties so describe a fish
*/

class Fish {
  constructor(
    name,
    size,
    aggression,
    purpose,
    reefSafe
  ) {
    this.name = name;
    this.volume = volume;
    this.size = size;
    this.aggression = aggression;
    this.purpose = purpose;
    this.reefSafe = reefSafe;
  }
  toggleLid(reefStatus) {
    this.reefSafe = reefStatus;
  }
 
}

export default Fish;

const updateReefSafe = (update) => {
    let main = document.querySelector("main"); // main is an element
    main.innerHTML = markup2(fish);
    
    console.info(update);
  };
  

  
// {
      
//         // Define Properties here , class should be declared above

//         // this.name = name;
//         // this.size = size;
//         // this.aggression = aggression;
//         // this.purpose = purpose;
//         // this.reefSafe = reefSafe;


//     };    
  

    const markup2 = (fish) => {
        return `
        <div>
          <h3>${fish.name}</h3>
          <ul>
            <li>Size: ${fish.size}</li>
            <li>Aggression: ${fish.aggression}</li>
            <li>Purpose: ${fish.purpose}</li>
            <li>Reef Safe: ${fish.fishChange ? "True" : "False"}</li>
          </ul>
        </div>
      `;
      };



const main = document.createElement("main");
main.innerHTML = markup2(fish);
document.body.appendChild(main);
