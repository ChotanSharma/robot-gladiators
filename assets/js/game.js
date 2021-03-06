var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

// fight function
var fight = function(enemy) {
    // while loop for repeat the fight
    while(playerInfo.health > 0 && enemy.health > 0) {
         // give the player an option
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");
         // if player choose to skip
        if (promptFight === 'skip' || promptFight === 'SKIP') {
            // confirm to skip
           var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if(yes) leave the fight
           if (confirmSkip) {
               window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
               playerInfo.money = Math.max(0, playerInfo.money - 10);
               console.log("playerMoney: " + playerInfo.money);
               break;
           } 
        }
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
           );   
          // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            // award money
            playerInfo.money = playerInfo.money + 20;
            // leave the loop if died
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // generate random damage value based on enemy's attack
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
           );   
        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            // leave the loop
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
   
}

var startGame = function() {
    //  call reset method 
    playerInfo.reset();
    // fight each enemy using for loop
    for(var i = 0; i < enemyInfo.length; i++) {
        // let player know the round
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round"+ (i+1));
            //pick the new enemy
            var pickedEnemyObj = enemyInfo[i];
            // reset the enemy health
            pickedEnemyObj.health = randomNumber(40, 60);
        
            fight(pickedEnemyObj) 
            // if enemy is not the last one and player is not dead
            if(playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game over!");
            break;
        }
    }
    // run the end game function either to run or end the game
    endGame();
};

var endGame = function() {
    // if player alive, player wins
    window.alert("The game has ended. Let's see what you did!");
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }
      // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill": // new case
           playerInfo.refillHealth();
           break;
        case "UPGRADE": // NEW CASE
        case "upgrade":
          playerInfo.upgradeAttack();
          break;

        case "leave":   // new case
        case "LEAVE":
          window.alert("Leaving the store.");
          // do nothing, so function will end
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          // call shop() again to force player to pick a valid option
          shop();
          break;
    }
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        if(playerInfo.money > 7) {
            window.alert("Refilling player's health 20 by 7 dollar");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money");
        }
    }, 

    upgradeAttack: function() {
        if(playerInfo.money > 7) {
            window.alert("Upgrading player's attack 6 by 7 dollar");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money");
        }
    }
};

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
];


// start the game when page loads
startGame(); 