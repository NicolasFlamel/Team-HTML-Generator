const Manager = require("../lib/Manager");

describe('Manager class', () => {
    it('Should create Manager obj with Employee keys and office number', () => {
        const name = 'John';
        const id = '23';
        const email = 'john@email';
        const officeNum = '916'
        const obj = new Manager(name, id, email, officeNum);

        expect(obj).toBeInstanceOf(Manager);
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.officeNumber).toBe(officeNum);
    })

    describe('getRole', () => {
        it('Should return "Manager"', () => {
            const name = 'John';
            const id = '23';
            const email = 'john@email';
            const officeNum = '916'
            const obj = new Manager(name, id, email, officeNum);

            expect(obj.getRole()).toBe('Manager');
        })
    })
});