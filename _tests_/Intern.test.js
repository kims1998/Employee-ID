const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe("Intern", () => {
  
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("Sallie Kim", 29, "skim1993@gmail.com", "Virginia Tech");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("Sallie Kim");
      expect(intern.id).toEqual(29);
      expect(intern.email).toEqual("skim1993@gmail.com");
      expect(intern.school).toEqual("Virginia Tech");
    });
  });

  
  describe("getName", () => {
    it("Should return the Intern's name value", () => {
      const intern = new Intern("Sallie Kim", 29, "skim1993@gmail.com", "Virginia Tech");

      expect(intern.getName()).toEqual("Sallie Kim");
    });
  });

 
  describe("getId", () => {
    it("Should return the Intern's id value", () => {
      const intern = new Intern("Sallie Kim", 29, "skim1993@gmail.com", "Virginia Tech");

      expect(intern.getId()).toEqual(29);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the Intern's email value", () => {
      const intern = new Intern("Sallie Kim", 29, "skim1993@gmail.com", "Virginia Tech");

      expect(intern.getEmail()).toEqual("skim1993@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return the Intern's school value", () => {
      const intern = new Intern("Sallie Kim", 29, "skim1993@gmail.com", "Virginia Tech");

      expect(intern.getSchool()).toEqual("Virginia Tech");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Intern", () => {
      const intern = new Intern("Sallie Kim", 29, "skim1993@gmail.com", "Virginia Tech");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});