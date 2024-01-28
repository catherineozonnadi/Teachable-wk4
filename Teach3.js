
class kathy {
    static name = 'Fred'
    static age = 25

    static move() {
        console.log(`Selective begger`);
        retutn `lol this is early morning`
    }
}

console.log(kathy.nam25e)
console.log(kathy.age)
console.log(kathy.move)



// REAL ONE

class People {
    constructor(names, color) {
        this.otherName = names;
        this.eyeColor = color;
    }
  
    // Instance properties
    name = "Kathy";
    hairColor = "Brown";
    age = 24;
    Status = "Single";
  
    // Instance method
    friendList() {
        return "Buzor, Fred";
    }
  
    // Static property
    static status = "Unknown";
  
    // Static method
    static getStatus() {
        return People.status;
    }
  }
  
  let person = new People('kiki', 'blue');
  console.log(person);
  console.log(person.friendList());
  
  // Accessing static property
  console.log(People.status);
  
  // Accessing static method
  console.log(People.getStatus());
  