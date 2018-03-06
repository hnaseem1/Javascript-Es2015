/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Elements {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Parks extends Elements {
  constructor(name, buildYear, trees, area) {
    super(name, buildYear);
    this.trees = trees;
    this.area = area;
  }
  treeDensity() {
  var density = this.trees/this.area;
  return density
    }

  calculateAge() {
    var age = 2018 - this.buildYear;
    return age;
  }
}
class Streets extends Elements {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
    }
  }

const park1 = new Parks("Thorn Park", 1947, 1080, 50);
const park2 = new Parks("St jacob Park", 1990, 578, 30);
const park3 = new Parks("Kipling Park", 1960, 1400, 150);

const street1 = new Streets("King St", 1950, 10, "small");
const street2 = new Streets("Queen St", 1940, 40, "huge");
const street3 = new Streets("John St", 1980, 20, "big");
const street4 = new Streets("Jake St", 1920, 15, "normal");

let parkAges = [park1.calculateAge(), park2.calculateAge(), park3.calculateAge()];

const parkTrees = [park1.trees, park2.trees, park3.trees];

const streetLength = [street1.length, street2.length, street3.length, street4.length];

const streetSize = [street1.size, street2.size, street3.size, street4.size];
