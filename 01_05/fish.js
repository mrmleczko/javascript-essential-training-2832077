/** fish.js practice creating classes 

will be giving some properties so describe a fish
*/

class Fish{
    constructor(
    // define parameters
        name,
        size,
        aggression,
        purpose,
        reefSafe,
    ){
      
        // Define Properties here , class should be declared above

        this.name = name;
        this.size = size;
        this.aggression = aggression;
        this.purpose = purpose;
        this.reefSafe = reefSafe;


    };    
    setSize(current_size) {
        this.size = current_size;
    } 
    



}
