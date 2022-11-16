const Intern = require("../lib/Intern");

describe('Intern class', () => {
    it('creates Intern obj with Employee keys and school', () => {
        const name = 'John';
        const id = '23';
        const email = 'john@email';
        const school = 'UC Davis'
        const obj = new Intern(name, id, email, school);

        expect(obj).toBeInstanceOf(Intern);
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.school).toBe(school);
    });

    describe('getSchool', () => {
        it("Should return Intern's school username", () => {
            const name = 'John';
            const id = '23';
            const email = 'john@email';
            const school = 'UC Davis'
            const obj = new Intern(name, id, email, school);

            expect(obj.getSchool()).toBe(obj.school);
            expect(obj.getSchool()).toBe(school);
        });
    });

    describe('getRole', () => {
        it("should return 'Intern'", () => {
            const name = 'John';
            const id = '23';
            const email = 'john@email';
            const school = 'UC Davis'
            const obj = new Intern(name, id, email, school);

            expect(obj.getRole()).toBe('Intern');
        })
    })
});