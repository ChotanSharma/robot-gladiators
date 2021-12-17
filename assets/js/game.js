var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

var fight = function(enemyName) {
    // while loop for repeat the fight
    while(playerHealth>0 && enemyHealth>0) {
         // give the player an option
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");
         // if player choose to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm to skip
           var confirmSkip = window.confirm("are you sure you'd like to quit?");
            // if(yes) leave the fight
           if (confirmSkip) {
               window.alert(playerName + " has decided to skip this fight. Goodbye!");
               playerMoney = playerMoney - 10;
               console.log("playerMoney: " + playerMoney);
               break;
           } 
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable   
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
           );   
          // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            // award money
            playerMoney = playerMoney + 20;
            // leave the loop if died
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable   
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
           );   
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
   
}

var startGame = function() {
    // debugger tool
    debugger;
    // reset player status
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    

    for(var i = 0; i < enemyNames.length; i++) {
        // let player know the round
        if(playerHealth>0) {
            window.alert("Welcome to Robot Gladiators! Round"+ (i+1));
        //pick the new enemy
        var pickedEnemyName = enemyNames[i];
        // reset the enemy health
        enemyHealth = 50;
        
        fight(pickedEnemyName) 

        } else {
            window.alert("You have lost your robot in battle! Game over!");
            break;
        }
        
    }
    endGame();
};

var endGame = function() {
    // if player alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
      } 
      else {
        window.alert("You've lost your robot in battle.");
      }
      // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
            // restart the game
            startGame();
    } 
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };


// start the game when the page loads

startGame();


