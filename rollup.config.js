import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
    input: "index.js", // 打包入口
    output: [{
        name: 'myBoundle',
        file: "dist/index.js",
        format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    }, ],
    plugins: [
        // 打包插件
        resolve(), // 查找和打包node_modules中的第三方模块
        commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    ],
};