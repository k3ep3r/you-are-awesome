// DO WHATEVER YOU WANT HERE
    let i = 0,  //incrementor
        j = 0;  //asyncIncrementor

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

    const incrementor = () => {
        i++;
        return incrementor;
    };  //Passed

    incrementor.__proto__.valueOf = function () {
        return i;
    };

    const asyncIncrementor = () => {
        return new Promise((asyncInc) => {
            setTimeout(() => {
                asyncInc(++j);
            }, 1);
        });
    };

    const createIncrementer = () => {
        let arr = [];
            arr.value = 0;
            arr.next = () => {
                arr.value++;
                return arr;
            }
            return arr;
    };  //Passed

    const returnBackInSecond = (param) => {
        return new Promise((done) => {
            setTimeout(() => {
                done(param);
            }, 1001);  // 1000 - 1500
       });
    };  //Passed

    const getDeepPropertiesCount = (property) => {
        let arr = JSON.stringify(property);
        return arr.match(/\:/g).length;
    };

    const createSerializedObject = () => {
        return null;
    };  // Passed

    const toBuffer = () => {};

    const sortByProto = (array) => {
        return array.map(value => value.__proto__).sort((left, right) => left.__proto__ - right.__proto__);
    };  //Passed

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
