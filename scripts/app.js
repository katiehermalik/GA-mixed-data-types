// // 1 // ---------------------------- Data Types //

// // A light switch that can be either on or off
// // Data type = Boolean 
// 'on' === true
// 'off' === false

// // A user's email address
// // Data type = string
// const email = 'khermalik@gmail.com'

// // A spaceship with a hull, laser blaster, tractor beam, and warp drive.
// // Data type = Array
// const spaceshipFeatures = ['hull', 'laserblaster', 'tractor beam', 'warp drive']

// // A list of student names from our class.
// // Data type = Array
// const roster = ['Jim', 'Pam', 'Dwight']

// // A list of student names from our class, each with a location.
// // Data type = Object
// const locationRoster = {
//   Jim: 'Stamford',
//   Pam: 'Scranton',
//   Dwight: 'Schrute Farms',
// }

// // A list of student names from our class, each with a location and each with a list of favorite tv shows.
// // Data type = an Array of Objects
// const infoRoster = [{
//   name: 'Jim',
//   location: 'Stamford',
//   favTvShows: ['30 for 30', 'The IT Crowd'],
//   },
//   {
//   name: 'Pam',
//   location: 'Stamford',
//   favTvShows: ['Breaking Bad', 'Game of Thrones'],
//   },
//   {
//   name: 'Dwight',
//   location: 'Stamford',
//   favTvShows: ['Sherlock Holmes', 'Survivor'],
//   }
// ]

// // 2 // ------------------------- Take it Easy //

// // 1
// const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// // 2
// console.log(rainbow[4]);
// // 3
// const katie = {
//   favoriteFood: 'truffle gnocchi',
//   hobby: 'running',
//   location: 'Los Angeles',
//   favoriteDataType: 'Array',
// };
// // 4
// console.log(katie.hobby);

// // 3 // ------------------------- Crazy Object! //

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favouriteHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[(crazyObject.taco[1].salsa.length - 1)]);
// Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favouriteHobby);
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// The object that contains the name funkhauser
console.log(crazyObject.larry.characters[1]);
