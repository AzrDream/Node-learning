let name = "it666.com";

function sum(a, b) {
    return a + b;
}

// exports.str = name;
// exports.fn = sum;

// module.exports.str = name;
// module.exports.fn = sum;

global.str = name;
global.fn = sum;
