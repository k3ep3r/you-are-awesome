// DO WHATEVER YOU WANT HERE
let i = 0;  //incrementor

    const createEnumerableProperty = (property) => {
        return property;
    };  //Passed

    const createNotEnumerableProperty = (property) => {
        Object.defineProperty(Object.prototype, property, {
            value: 'value'
        });
        return property;
    };  //Passed

    const createProtoMagicObject = () => {
        return Function;
    };  //Passed

const incrementor = () => {};

const asyncIncrementor = () => {};
const createIncrementer = () => {};

    const returnBackInSecond = (param) => {
        return new Promise((done) => {
            setTimeout(() => {
                done(param);
            }, 1001);  // 1000 - 1500
       });
    };  //Passed

    const getDeepPropertiesCount = () => {};
    const createSerializedObject = () => {
        return null;
    };  // Passed

const toBuffer = () => {};

const sortByProto = (array) => {
    //array.map(value => value.__proto__).sort((left, right) => left - right);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
