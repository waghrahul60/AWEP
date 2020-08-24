/***
 * data member :: Here We dont explicitly Define members
 * Constructor :: keyword constructor()
 * Member Functions
 *
 */
class Person {
  /***
   * Constructor | Speciaal Function
   */
  constructor() {
    console.log("I Am a Constructor");
  }
  /**
   * Normal Fun | Member Function
   */
  getPersonAdds() {
    return "Mumbai";
  }
  /**
   * Normal Fun | Member Function
   */
  getPersonName() {
    return "Rahul";
  }
  getPersonDetaile() {
    const name = this.getPersonName();
    const address = this.getPersonAdds();
    return name + " " + address;
  }
  /**
   * Static Member Function | Class Fun
   */
  static main() {
    let obj = new Person();
    console.log(obj);
    let x = obj.getPersonDetaile();
    console.log(x);
  }
}

Person.main();
