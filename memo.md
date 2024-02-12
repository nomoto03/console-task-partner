準備
```
npm init -y
npm install typescript --save-dev
```

tsconfig.json作成
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

TypeScriptを使用する場合は、型定義ファイル（@types/node）が必要になる
Node.jsのAPIをTypeScriptで使用するための型情報
```
npm install --save-dev @types/node
```

JavaScriptにコンパイル
```
npx tsc
```

実行
```
node dist/index.js
```
