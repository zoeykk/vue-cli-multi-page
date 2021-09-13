const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

let projectName = "";
const isProduction = process.env.NODE_ENV == "production";

// 运行全部
// var items = glob.sync("./src/projects/*/*.js");
// for (var i in items) {
//   var filepath = items[i];
//   var fileList = filepath.split("/");
//   var fileName = fileList[fileList.length - 2];
//   entries[fileName] = {
//     entry: `src/projects/${fileName}/main.js`,
//     // 模板来源
//     template: `public/index.html`,
//     // 在 dist/index.html 的输出
//     filename: `${fileName}.html`,
//     // 提取出来的通用 chunk 和 vendor chunk。
//     chunks: ["chunk-vendors", "chunk-common", fileName],
//   };
// }

function getPages() {
  projectName = isProduction
    ? process.argv[3]
    : process.env.npm_lifecycle_event.split(":")[1];
  return {
    index: {
      // page的入口
      entry: "src/projects/" + projectName + "/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      title: projectName,
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  };
}

module.exports = {
  outputDir: "dist/" + projectName,
  pages: getPages(),
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src/projects/" + projectName))
      .set("@@", resolve("src"));
  },
};
