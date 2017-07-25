var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {

        var from = 'Xyz';
        var text = 'Some Message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });

});
