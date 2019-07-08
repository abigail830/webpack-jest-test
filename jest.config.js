const path = require('path')

module.exports = {
    // 单元测试环境根目录
    // rootDir: path.join(__dirname, '../webpack-demo'),
    // 指定需要进行单元测试的文件匹配规则
    // testMatch: [
    //     '<rootDir>/*/__test__/*.test.js'
    // ],
    // 需要忽略的文件匹配规则
    testPathIgnorePatterns: [
        '/node_modules'
    ],
    testURL: 'http://localhost/',
    // 是否收集测试覆盖率，以及覆盖率文件路径
    collectCoverage: true,
    coverageDirectory: './coverage',
    moduleDirectories:[
        "node_modules",
        "src"
    ]
};
