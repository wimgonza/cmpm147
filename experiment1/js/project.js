// project.js - It generates Hunter Monster scenarios.
// Author: William Gonzalez
// Date: 4/7/25

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // define a method
  myMethod() {
    // code to run when method is called
  }
}

function main() {
  const fillers = {
    player: ["Homie", "John Hunter", "Adventurer", "Traveller", "Monster Hunter", "Protagonist", "Human", "Hunter", "$player and $player", "$player, $player, and $player"],
    adj: ["Big", "Small", "Far", "Close", "Short", "Long"],
    town: ["Azuz", "Suja", "WudWud","Kunafa", "Sild"],
    descriptor: ["urgency", "strength", "dexterity", "wisdom", "intelligence", "faith", "honor", "luck", "greatness"],
    item: ["cilia", "talons", "scales", "hide", "horns", "sacs", "pelts", "bones", "fins", "stingers"],
    itemReward: ["gems", "ore", "peppers", "relics", "tickets", "zenny"],
    reward: ["nothing", "prosperity", "gems", "scales", "metal", "garbage", "weapons", "armor"],
    monster: ["Congalalas", "Hirabamis", "Rathians", "Xu Wus", "Quematrices", "Rey Daus", "Uth Dunas", "Zoh Shias", "Balaharas"],
    message: ["awake", "here", "aware", "in the new world", "in the town", "done with your prior quest", "freed", "able to take on quests again", "high enough level", "able to upgrade your armor"],
    
  };
  
  const template = `$player, you are finally $message!
  
  I hail from $adj $town. I have been tasked with giving you the message with $descriptor. Lots of $monster have been sighted in the area. If you complete this task, you will gain $reward.
  
  They are heard to be rich in $item. The guild is willing to let you have all of the resources if you please or pay you $itemReward for it. We urge you to get this done quickly.
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
  
}

window.onload = main;