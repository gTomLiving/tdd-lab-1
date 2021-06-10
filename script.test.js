const { translate } = require("./script");

//convertPig

describe('translate', () => {
    //first case 
    test('converts apple', () => {
        expect(translate('apple')).toBe('appleway');
    })
    test('converts else', () => {
        expect(translate('else')).toBe('elseway');
    })
    test('converts earbud', () => {
        expect(translate('earbud')).toBe('earbudway');
    })
    test('converts iceberg', () => {
        expect(translate('iceberg')).toBe('icebergway');
    })
    test('converts orange', () => {
        expect(translate('orange')).toBe('orangeway');
    })
    test('converts giraffe', () => {
        expect(translate('giraffe')).toBe('iraffegay');
    })
    test('converts pepper', () => {
        expect(translate('pepper')).toBe('epperpay');
    })
    test('converts french', () => {
        expect(translate('french')).toBe('enchfray');
    })
    test('converts splash', function() {
        expect(translate('splash')).toBe('ashsplay')
    })
    test('converts caps', function() {
        expect(translate('PePPer')).toBe('epperpay')
    })
    test('converts orange', () => {
        expect(translate('orANgE')).toBe('orangeway');
    })
})