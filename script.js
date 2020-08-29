var database = [
	{
		username: "Tom",
		password: "abcde",
	},
	{
		username: "Jerry",
		password: "12345",
	},
	{
		username: "Tony",
		password: "pass",
	},
	{
		username: "Chris",
		password: "hey",
	}

];

var newsfeed = [
	{
		username: "Sam",
		timeline: "Hey Guys",
	},
	{
		username: "Jam",
		timeline: "YEP !!",
	},
	{
		username: "Dam",
		timeline: "Ok !",
	},
]

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("What's your password?");
var success = 'N';
 

function signIn (usrname,pass)
{
    for (var i = 0; i < database.length; i++)
    {
        if ((usrname === database[i].username) && (pass === database[i].password))
        {
            console.log(newsfeed);
            success = 'Y';
        }        
    }
    if (success != 'Y')
    {
        alert("Wrong Username/Password");
    }
 
}
 
signIn(userNamePrompt,passwordPrompt);
