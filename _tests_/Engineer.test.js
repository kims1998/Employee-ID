const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
  
  describe("Engineer object instantiation", () => {
    it("Creates an object with name, id, email, and github value", () => {
      const engineer = new Engineer("Patrick S", 25, "heWontTellMe@gmail.com", "wontTellMe");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("Patrick S");
      expect(engineer.id).toEqual(25);
      expect(engineer.email).toEqual("heWontTellMe@gmail.com");
      expect(engineer.gitHub).toEqual("wontTellMe");
    });
  });

  
  describe("getName", () => {
    it("Should return the engineer's name value", () => {
      const engineer = new Engineer("Patrick S", 25, "heWontTellMe@gmail.com", "wontTellMe");

      expect(engineer.getName()).toEqual("Patrick S");
    });
  });

  
  describe("getId", () => {
    it("Should return the engineer's id value", () => {
      const engineer = new Engineer("Patrick S", 25, "heWontTellMe@gmail.com", "wontTellMe");

      expect(engineer.getID()).toEqual(25);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the engineer's email value", () => {
      const engineer = new Engineer("Patrick S", 25, "heWontTellMe@gmail.com", "wontTellMe");

      expect(engineer.getEmail()).toEqual("heWontTellMe@gmail.com");
    });
  });

 
  describe("getGithub", () => {
    it("Should return the engineer's github value", () => {
      const engineer = new Engineer("Patrick S", 25, "heWontTellMe@gmail.com", "wontTellMe");

      expect(engineer.getGithub()).toEqual("wontTellMe");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Engineer", () => {
      const engineer = new Engineer("Patrick S", 25, "heWontTellMe@gmail.com", "wontTellMe");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
