{
    "mode": "development",
    "entry": "src/index.js",
    "output": {
        "path": __dirname+'/photos',
        "filename": "[name].[chunkhash:8].js"
    },
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env",
                            "react"
                        ]
                    }
                }
            }
        ]
    }
}
