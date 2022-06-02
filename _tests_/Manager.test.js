const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe("Manager", () => {
  
  describe("Manager object instantiation", () => {
    it("Creates an object with name, id, email, and officeNumber properties", () => {
      const manager = new Manager("Opha Mae Johnson", 19, "OphaMJ@usmc.com", 13);

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("Opha Mae Johnson");
      expect(manager.id).toEqual(19);
      expect(manager.email).toEqual("OphaMJ@usmc.com");
      expect(manager.officeNum).toEqual(13);
    });
  });

  describe("getName", () => {
    it("Should return the Manager's name value", () => {
      const manager = new Manager("Opha Mae Johnson", 19, "OphaMJ@usmc.com", 13);

      expect(manager.getName()).toEqual("Opha Mae Johnson");
    });
  });

  describe("getId", () => {
    it("Should return the Manager's id value", () => {
      const manager = new Manager("Opha Mae Johnson", 19, "OphaMJ@usmc.com", 13);

      expect(manager.getId()).toEqual(19);
    });
  });

  describe("getEmail", () => {
    it("Should return the Manager's email value", () => {
      const manager = new Manager("Opha Mae Johnson", 19, "OphaMJ@usmc.com", 13);

      expect(manager.getEmail()).toEqual("OphaMJ@usmc.com");
    });
  });
  
  describe("getOffice", () => {
    it("Should return the Manager's officeNumber value", () => {
      const manager = new Manager("Opha Mae Johnson", 19, "OphaMJ@usmc.com", 13);

      expect(manager.getOfficeNum()).toEqual(13);
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
      const manager = new Manager("Opha Mae Johnson", 19, "OphaMJ@usmc.com", 13);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});