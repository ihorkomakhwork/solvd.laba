const linkedTypes = {
    object: JSON.stringify,
    function: JSON.stringify,
};

const stringifyValue = value => {

    console.log('stringifyValue');
    /*
    const type = typeof data;
    const serializer = linkedTypes[type];
    if (serializer) return serializer(data)
    else return data.toString()
*/
};

module.exports = { stringifyValue };