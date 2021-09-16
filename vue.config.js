const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

// 获取npm script命令
// process.argv[3] 命令值参数 第四个命令
// process.env.npm_lifecycle_event 命令值键参数  eg:第一个参数 process.env.npm_lifecycle_event.split(":")[1]

let projectName = process.env.PROJECT;
function getPages() {
  return {
    index: {
      entry: "src/projects/" + projectName + "/main.js",
      template: "public/index.html",
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
