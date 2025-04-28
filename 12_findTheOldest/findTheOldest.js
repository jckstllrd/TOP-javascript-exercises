const findTheOldest = function (people) {
  let d = new Date();
  let year = d.getFullYear();
  let oldestAge = 0;
  let oldestPerson = people[0];
  people[0].age = 0;
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    let born = person.yearOfBirth;
    let died = person.yearOfDeath;
    let age;
    if (born && died) {
      age = died - born;
    }
    if (!died) {
      age = year - born;
    }
    person.age = age;

    oldestPerson = oldestAgeChecker(person, oldestPerson);
  }
  return oldestPerson;
};

const oldestAgeChecker = function (currentPerson, oldestPerson) {
  if (currentPerson.age > oldestPerson.age) {
    return currentPerson;
  } else return oldestPerson;
};
// Do not edit below this line
module.exports = findTheOldest;
