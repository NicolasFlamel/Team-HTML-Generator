const Engineer = require('../lib/Engineer');

describe('Manager class', () => {
    it('creates obj with Employee keys and github', () => {
        const name = 'John';
        const id = '23';
        const email = 'john@email';
        const githubName = 'johnny'
        const obj = new Engineer(name, id, email, githubName);

        expect(obj).toBeInstanceOf(Engineer);
        expect(obj.name).toBe(name);
        expect(obj.id).toBe(id);
        expect(obj.email).toBe(email);
        expect(obj.github).toBe(githubName);
    });

    describe('getGitHub', () => {
        it("Should return engineer's github username", () => {
            const name = 'John';
            const id = '23';
            const email = 'john@email';
            const githubName = 'johnny'
            const obj = new Engineer(name, id, email, githubName);

            expect(obj.getGithub()).toBe(obj.github);
            expect(obj.getGithub()).toBe(githubName);
        });
    });

    describe('getRole', () => {
        it("should return 'Engineer'", () => {
            const name = 'John';
            const id = '23';
            const email = 'john@email';
            const githubName = 'johnny'
            const obj = new Engineer(name, id, email, githubName);

            expect(obj.getRole()).toBe('Engineer');
        })
    })
});