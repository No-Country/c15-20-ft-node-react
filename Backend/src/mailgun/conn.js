const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
	username: 'api',
	key: '4f0067d7e9f24590dc1061d6843fc811',
});

module.exports = mg;


// mg.messages
// 	.create(sandbox3f37bcca0b8047a0ae1067367b17dde8.mailgun.org, {
// 		from: "Mailgun Sandbox <postmaster@sandbox3f37bcca0b8047a0ae1067367b17dde8.mailgun.org>",
// 		to: ["salvareschilisandro0@gmail.com"],
// 		subject: "Hello",
// 		text: "Testing some Mailgun awesomness!",
// 	})
// 	.then(msg => console.log(msg)) // logs response data
// 	.catch(err => console.log(err)); // logs any error`;