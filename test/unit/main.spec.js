const lib = require('../../src/main');


describe('Methods test', () => {
    it('should return correct value methodA', () => {
        expect(lib.methodA()).to.equal('methodA-response');
    });
    it('should return correct value methodB without the argument', () => {
        expect(lib.methodB()).to.equal('methodB-undefined');
    });
    it('should return correct value methodB with argument', () => {
        var rand = Math.random() + Math.random();
        expect(lib.methodB(rand)).to.equal('methodB-' + rand);
    });
    it('should return correct env value methodC', () => {
        expect(lib.methodC()).to.equal('CUSTOM_ENV_VARIABLE');
    });
});
