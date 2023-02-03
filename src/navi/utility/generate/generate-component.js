require("colors");
const fs = require("fs");
const templates = require("./templates");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

const componentsList = fs.readdirSync("./src/components");
let content = "";
let exportContent = "export {";
componentsList.forEach((component) => {
  if ((fs.lstatSync(`./src/components/${component}`).isDirectory()) && (component != "assets" && component != "WfxTheme")) {
    content += `import ${component} from "./components/${component}/${component}";\r\n`;
    exportContent += `\r\n  ${component},`;
  }
});

content += `\nexport * from "./Icons/Icons";`
exportContent += "\r\n};\n"

content += "\r\n" + exportContent;

fs.writeFile("./src/index.ts", content, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
});
