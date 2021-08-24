const names = ['John', 'Arthur', 'Mortimer', 'Don', 'Bella', 'Dina', 'Anne', 'Martha'];
const lastNames = ['Goth', 'Caliente', 'Lothario', 'Smith', 'Landgraab', 'Sim', 'Broke'];
const worlds = ['Old Town', 'Magic Town', 'Pleasantview', 'Strangetown', 'Veronaville', 'Sunset Valley', 'Riverview', 'Willow Creek', 'Oasis Springs', 'Newcrest'];

function getRandomItem (array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomSim () {
    return `Your random Sim is: ${getRandomItem(names)} ${getRandomItem(lastNames)}, living in ${getRandomItem(worlds)}`;
}

console.log(getRandomSim());