const {sumArgs} = require('../dist/util');
const chai = require('chai');
const chaiAlmost = require('chai-almost');
chai.use(chaiAlmost());
const expect = chai.expect;

describe('SumTest', function () {
    it('should give same number when added by 0', function () {
        for (const number of [0, 1, 23, 1.32, -1.32, -23]) {
            const result = sumArgs(`+${number},0`);
            expect(result.error).to.be.null;
            expect(result.result).to.equal(number);
        }
    });

    it('should give 0 when added by summing reverse by addition', function () {
        for (const number of [0, 1, 23, 1.32, -1.32, -23]) {
            const result = sumArgs(`+${number},${-1*number}`);
            expect(result.error).to.be.null;
            expect(result.result).to.equal(0);
        }
    });

    it('should give correct result when two floats added', function () {
        const result = sumArgs('+3.14,3.14');
        expect(result.error).to.be.null;
        expect(result.result).to.equal(6.28);
    });

    it('should give correct result when two floats multiplied', function () {
        const result = sumArgs('+3.33333333,3.33333333333333');
        expect(result.error).to.be.null;
        expect(result.result).to.almost.equal(6.66666666333);
    });

    it('should give error when incorrect number is given', function () {
        const result = sumArgs('+121*123');
        expect(result.error).not.to.be.null;
    });

});
