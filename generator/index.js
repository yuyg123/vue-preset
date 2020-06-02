module.exports = api => {
    // 复制并用 ejs 渲染 `./template` 内所有的文件
    api.render('./template')
    // 修改 `package.json` 里的字段
    api.extendPackage({
        dependencies: {
            "core-js": "^3.6.5",
            "vue": "^2.6.11",
            "element-ui": "^2.12.0",
            "moment": "^2.24.0",
            "vue-router": "^3.1.3",
            "vuex": "^3.0.1",
            "node-sass": "^4.12.0",
            "sass-loader": "^8.0.0"
        },
        devDependencies: {
            "@vue/cli-plugin-babel": "^4.4.0",
            "@vue/cli-plugin-eslint": "^4.4.0",
            "@vue/eslint-config-standard": "^4.0.0",
            "@vue/cli-service": "^4.4.0",
            "babel-eslint": "^10.1.0",
            "eslint": "^6.7.2",
            "eslint-plugin-vue": "^6.2.2",
            "vue-template-compiler": "^2.6.11",
            "axios": "^0.18.0",
            "@vue/cli-plugin-vuex": "^4.0.0"
        },
        scripts: {
            "serve": "vue-cli-service serve",
            "build": "vue-cli-service build",
            "lint": "vue-cli-service lint"
        },
        eslintConfig: {
            "root": true,
            "env": {
                "node": true
            },
            "extends": [
                "plugin:vue/essential",
                "@vue/standard"
            ],
            "rules": {
                "space-before-function-paren": 0,
                "semi": [
                    "warn",
                    "always"
                ],
                "vue/script-indent": [
                    "error",
                    4,
                    {
                        "baseIndent": 1
                    }
                ]
            },
            "overrides": [
                {
                    "files": [
                        "*.vue"
                    ],
                    "rules": {
                        "indent": "off"
                    }
                }
            ],
            "parserOptions": {
                "parser": "babel-eslint"
            }
        },
        postcss: {
            "plugins": {
                "autoprefixer": {}
            }
        },
        browserslist: [
            "> 1%",
            "last 2 versions",
            "not dead"
        ]
    })
}
