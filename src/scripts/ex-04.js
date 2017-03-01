import moment from 'moment'


//--------------------------------------------------------------------------
// TASK : Render out table rows with the lastLoggedIn date formatted
// 		'3:32 AM - Friday, February 10th 2017'  
//
//		   http://momentjs.com/docs/#/displaying/format/  
//--------------------------------------------------------------------------

let userLogins = [
	{ userName: 'Honey Bear' , city: "Atlanta",  lastLoggedIn: 1488335292232 },
	{ userName: 'Lazy Philosopher' , city: "Houston",  lastLoggedIn: 1488248962768 },
	{ userName: 'HRG', city: "Dallas",  lastLoggedIn: 1488076247719 },
	{ userName: 'ChirpChirp', city: "Dallas",  lastLoggedIn: 1488076190847 },
	{ userName: 'Babushka', city: "Houston",  lastLoggedIn: 1488007366792 },
	{ userName: 'Oh Mia',  city: "Dallas", lastLoggedIn: 1486694105551 }
]


console.log('-------- (ex-04) ---------')

//need to put on the dom
document.querySelector('.logged-in tbody').innerHTML = `
	<tr>
		<td>CoffeeAddict</td>
		<td>Austin</td>
		<td>9:32 PM - Saturday, February 11th 2017</td>
	</tr>
	<tr>
		<td>Ectb850</td>
		<td>Houston</td>
		<td>11:11 AM - Sunday, January 8th 2017</td>
	</tr>
`