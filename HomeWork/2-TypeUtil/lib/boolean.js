const invertBoolean = value => {
    const type = typeof value;
    if (type == 'boolean') return !value;
    else throw new Error('Invalid type of argument');
};

module.exports = { invertBoolean };