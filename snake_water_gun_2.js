
let user_choice = prompt("Enter SNAKE/WATER/GUN").toLocaleLowerCase();
let comp_choice = Math.floor(Math.random()*3);
let final_choice;
switch (comp_choice) {
    case 0:
        final_choice = "snake";
        break;
    case 1:
        final_choice = "water";
        break;
    
    case 2:
        final_choice = "gun";
        break;

    default:
        break;
}


if(user_choice===final_choice)
{
    console.log("Its a tie")
}

else if
(
    user_choice=="water" && final_choice=="gun"||
    user_choice=="snake" && final_choice=="water"||
    user_choice=="gun" && final_choice=="snake"

)
{
    console.log(`You won!! your choice ${user_choice} and comp_choice ${final_choice}`);
}

else
{
    console.log(`you lost!! your choice ${user_choice} and comp_choice ${final_choice}`);
}



