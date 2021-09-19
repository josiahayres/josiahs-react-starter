const updatedConfig = Object.assign(
    {},
    require('./node_modules/react-scripts/config/webpack.config.js'),
)
const customConfig = {
    resolve: {
        fallback: {
            dgram: false,
            fs: false,
            net: false,
            tls: false,
            child_process: false,
        },
    },
}

// console.log(JSON.stringify(updatedConfig))

// updatedConfig.delete('node.dgram')
// updatedConfig.delete('node.fs')
// updatedConfig.delete('node.net')
// updatedConfig.delete('node.tls')
// updatedConfig.delete('node.child_process')

// updatedConfig.config.merge(customConfig)

module.exports = {
    webpackConfig: require('./node_modules/react-scripts/config/webpack.config.js'),

    sections: [
        {
            name: 'Introduction',
            content: 'README.md',
        },
        {
            name: 'Documentation',
            sections: [
                {
                    name: 'Installation',
                    content: 'INSTALL.md',
                    description: 'The description for the installation section',
                },
                {
                    name: 'Demo: localhost',
                    external: true,
                    href: 'http://localhost:3000',
                },
            ],
        },
        {
            name: 'UI Components',
            components: 'src/components/**/*.tsx',
            exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
        },
    ],
}
