const Employee = require("../lib/Employee");


describe("Employee", () => {
  
 
  describe("Employee object instantiation", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee("Charles Kim", 24, "seung.kim1998@gmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("Charles Kim");
      expect(employee.id).toEqual(24);
      expect(employee.email).toEqual("seung.kim1998@gmail.com");
    });
  });

  
  describe("getName", () => {
    it("Should return the Employee's name value", () => {
      const employee = new Employee("Charles Kim", 24, "seung.kim1998@gmail.com");

      expect(employee.getName()).toEqual("Charles Kim");
    });
  });

 
  describe("getId", () => {
    it("Should return the Employee's id value", () => {
      const employee = new Employee("Charles Kim", 24, "seung.kim1998@gmail.com");

      expect(employee.getID()).toEqual(24);
    });
  });


  describe("getEmail", () => {
    it("Should return the Employee's email value", () => {
      const employee = new Employee("Charles Kim", 24, "seung.kim1998@gmail.com");

      expect(employee.getEmail()).toEqual("seung.kim1998@gmail.com");
    });
  });


  describe("getRole", () => {
    it("Should return the string, 'Employee' ", () => {
      const employee = new Employee("Charles Kim", 24, "seung.kim1998@gmail.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});