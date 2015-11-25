
function AnyBase(dictionary, initialValue) {
    this.dictionary = dictionary;
    this.positionValues = [];

    if(initialValue == undefined) {
        this.positionValues = [0];
    } else {
        var reversedInitialValue = initialValue.split("").reverse().join("");
        var position;
        for(var i=0;i<reversedInitialValue.length; i++) {
            position = this.dictionary.search(reversedInitialValue[i]);
            if(position >= 0) {
                this.positionValues.push(position);
            } else {
                throw "'" + reversedInitialValue[i] + "' not part of dictionary '" + this.dictionary + "'";
            }
        }
    }
}

AnyBase.prototype.increment = function() {
    var self = this;
    function doIncrement(key) {
        if(key == self.positionValues.length) {
            self.positionValues.push(1);
            return;
        }
        if(key > self.positionValues.length) {
            throw "LogicException";
        }
        var nextValue = self.positionValues[key] + 1;
        if(nextValue >= self.dictionary.length) {
            self.positionValues[key] = 0;
            doIncrement(key+1);
        } else {
            self.positionValues[key] = nextValue;
        }
    }
    doIncrement(0);
};

AnyBase.prototype.toString = function () {
    var string = '';
    for(var i=0; i<this.positionValues.length; i++) {
        string += this.dictionary[this.positionValues[i]];
    }
    return string.split("").reverse().join("");
};

module.exports = AnyBase;