const {multiplyArgs} = require('../dist/util');
const chai = require('chai');
const chaiAlmost = require('chai-almost');
chai.use(chaiAlmost());
const expect = chai.expect;

describe('MultiplyTest', function () {
    it('should give 0 when multiplied by 0', function () {
        for (const message of ['*0,12', '*210,12,123,0', '*0,1', '*10,12,0', '*0,3.14']) {
            const result = multiplyArgs(message);
            expect(result.error).to.be.null;
            expect(Math.abs(result.result)).to.equal(0);
        }
    });

    it('should give same number when multiplied with 1', function () {
        for (const number of [0, 1, 23, 1.32, -1.32, -23]) {
            const result = multiplyArgs(`*${number},1`);
            expect(result.error).to.be.null;
            expect(result.result).to.almost.equal(number);
        }
    });

    it('should give correct result when two floats multiplied', function () {
        const result = multiplyArgs('*3.14,3.14');
        expect(result.error).to.be.null;
        expect(result.result).to.almost.equal(9.8596);
    });

    it('should give correct result when two floats multiplied', function () {
        const result = multiplyArgs('*3.33333333,3.33333333333333');
        expect(result.error).to.be.null;
        expect(result.result).to.almost.equal(11.1111111);
    });

    it('should give error when incorrect number is given', function () {
        expect(multiplyArgs('*121*123').error).not.to.be.null;
    });

});
