# TypeScript

1.  `npm install -g typescript`              Donwload TypeScript Compiler Globally
2.  `npm install --save-dev typescript`      Donwload TypeScript Compiler Development Mode (If Needed)
3.  `npm init` or `npm init -y`              Download package.json file
4.  `npm install --save-dev lite-server`     Download Lite Server (package.json => "scripts" => "start" : "lite-server") =>  npm start
5.  `npx tsc --init`                         Download tsconfig.json file for Compile All TypeScript files (Modify it with codes below)
6.  `Create **src** folder`                  All TypeScript files will create in here
7.  `Create **dist** folder`                 All JavaScript files will create in here
8.  `npx tsc`                                Compile (converts) All TypeScript file into JavaScript file
9.  `npx tsc -w` or `npx tsc --watch`        Wacth TypeScript and whenever it changes automatically compile
10. `npm install -g ts-node`                 Download TypeScript Node in order to show in terminal
11. `npx ts-node fileName.ts`                Wihtout any complication it shows TypeScript in Terminal


> [!NOTE]
> **compilerOption**
> `target`               : Derlenmiş JsvsScript'in hangi ECMAScript sürümüne uygun olacağını belirler
> `module`               : Modül sistemini belirler (örn. comonjs, es2015)
> `strict`               : Sıkı tip denetimi için true olarak ayarlanabilir.
> `outDir`               : Derlenmiş Javascript dosyalarının nereye kaydedileceğini belirtir.
> `include` ve `exclude` : Hangi dosyaların derleme işlemine dahil edileceğini veya edilmeyeceğini berlirler 


> [!IMPORTANT]
> The file **tsconfig.json** must consist of this code
```javascript
{
  "compilerOptions": {
    "target": "es2016",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "baseUrl": "./",
    "paths": { "*": ["node_modules"] },
    "allowJs": true,
    "noEmit": false,
    "module": "commonjs",
    "outDir": "./dist"
  },     
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```


> [!TIP]
> Always create **.gitignore** file. In this file we write file/folder (node_modules) names which did not download to github while we pushing projects


> [!TIP]
> **tsc typescript.ts** If TypeScript and JavaScript filename are the same (Or there is not JavaScript file). And also keep in mind that > if you open TypeScript and JavaScript file all together and if you have **const** variable in them, Typescript file will be give some small errors. When you make any changes in TypeScript file you should type **tsc fileName.ts** again and again. Or just write **tsc fileName.ts -w** it will watch TypeScripy file whenever it changes

> [!WARNING]
> While writing **tsc typescript.ts javascript.js** must be some error in order to eliminate it ***Run Powershell as Adminstrator*** then
> write ***Get-ExecutionPolicy*** then ***Set-ExecutionPolicy RemoteSigned*** apply this code towards All files




# TypeScript
1. **npm install -g typescript**                     Donwload TypeScript Complier globally
2. **npm install --save-dev typescript**             Donwload TypeScript Complier development mode
3. **tsc typescript.ts javascript.js**               Compile (Converts) TypeScript file into JavaScript file
4. **tsc typescript.ts -w**                          Wacth TypeScript and whenever it changes automatically compile 
