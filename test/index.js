var should = require('chai').should(),
    AnyBase = require('../index');

describe('#Base10', function () {
    it('Start with value 0', function () {
        var anybase = new AnyBase('0123456789');
        anybase.toString().should.equal('0');
    });

    it('Increment of 1', function () {
        var anybase = new AnyBase('0123456789');
        anybase.increment();
        anybase.toString().should.equal('1');
    });

    it('Increment from 9 to 10', function () {
        var anybase = new AnyBase('0123456789', '9');
        anybase.increment();
        anybase.toString().should.equal('10');
    });
});

describe('#Base of 36', function () {
    var dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    it('Start with value A', function () {
        var anybase = new AnyBase(dictionary);
        anybase.toString().should.equal('A');
    });

    it('Increment of 1, value equal B', function () {
        var anybase = new AnyBase(dictionary);
        anybase.increment();
        anybase.toString().should.equal('B');
    });

    it('Increment from 9 to BA', function () {
        var anybase = new AnyBase(dictionary, '9');
        anybase.increment();
        anybase.toString().should.equal('BA');
    });

    it('Increment from 9999 to BAAAA', function () {
        var anybase = new AnyBase(dictionary, '9999');
        anybase.increment();
        anybase.toString().should.equal('BAAAA');
    });
});
