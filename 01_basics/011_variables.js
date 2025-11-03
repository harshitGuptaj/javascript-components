const accountId = 1345
let accountEmail = "har2004@gmail.com"
var accountPassword = "1245"
accountCity = "bulandshahr"
let accountState;

// accountId=4//not allowed

accountEmail = "ha4@v.com"
accountPassword = "2121221"
accountCity = "noida"

console.log(accountId);

/*prefer not to use var
because of issue in block scope and functional scope
*/
 
console.log([accountEmail, accountId, accountPassword, accountState,accountCity]);
