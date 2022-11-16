const Employee = require("../lib/Employee");

describe('Employee class', () => {
    it('Creates obj with name, id, email properties', () => {
        const name = 'John';
        const id = '23';
        const email = 'john@email';
        const obj = new Employee(name, id, email)

        expect(obj).toBeInstanceOf(Employee);
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
    });

    describe('getName', () => {
        it('Returns obj name', () => {
            const name = 'John';
            const id = '23';
            const email = 'john@email';
            const obj = new Employee(name, id, email)

            expect(obj.getName()).toBe(name)
        })
    });

    describe('getId', () => {
        it('Returns obj Id', () => {
            const name = 'John';
            const id = '23';
            const email = 'john@email';
            const obj = new Employee(name, id, email)

            expect(obj.getId()).toBe(id)
        })
    });

    describe('getEmail', () => {
        it('Returns obj email', () => {
            const name = 'John';
            const id = '23';
            const email = 'john@email';
            const obj = new Employee(name, id, email)

            expect(obj.getEmail()).toBe(email)
        })
    });

    describe('getRole', () => {
        it('Returns obj name', () => {
            const name = 'John';
            const id = '23';
            const email = 'john@email';
            const obj = new Employee(name, id, email)

            expect(obj.getRole()).toBe('Employee')
        })
    });
});
