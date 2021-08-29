module.exports = {
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
            components: 'src/components/*.tsx',
            exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
        },
    ],
}
