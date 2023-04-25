const guestList = ['Bilal', 'Farhan', 'Umer', 'Ahsan'];
console.log(guestList);
guestList.push('Tayyab', 'Arsal', 'Asad', 'Rehaan');
console.log(`Updated list : ${guestList}`);

//informing people that you found a bigger dinner table.
console.log(`Hi Guys, I have found a bigger dinning table so planned to invite more friends.`);

//Add one new guest to the beginning of your array.
guestList.unshift('Hammad');

//Add one new guest to the middle of your array.
guestList.splice(4,0,'Abdullah');

//Use append() to add one new guest to the end of your list.
guestList.push('Salman');

// Print a new set of invitation messages, one for each person in your list. 
let inviteMessage = `You are cordially invited to attend the dinner party we have planned for Sunday, 26th February at 8pm.`;
for(let i =0; i < guestList.length; i++){
    console.log(`Hi ${guestList[i]}, ${inviteMessage}`);
}


export{}