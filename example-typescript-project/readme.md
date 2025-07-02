## comandos terminal
```
npm init -y
npm i typescript tsc tsup -D
npx tsc --init
```
ou

```
npm init -y typescript - D
```
## tsconfig.json
```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true    
  }
}
```

## scripts package.json
```
"scripts": {
    "dist": "tsup src",
    "start:dev": "tsx src/index.ts",
    "start:watch": "tsx watch src/index.ts",
    "start:dist": "npm run dist && node dist/index.js"
}
```