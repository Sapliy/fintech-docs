import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Sapliy Fintech',
    description: 'Event-driven automation & policy platform for fintech and business flows',

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { name: 'theme-color', content: '#0F172A' }],
    ],

    themeConfig: {
        logo: '/logo.svg',

        nav: [
            { text: 'Guide', link: '/getting-started/quickstart' },
            { text: 'API', link: '/api/overview' },
            { text: 'SDKs', link: '/sdks/node' },
            {
                text: 'Resources',
                items: [
                    { text: 'Examples', link: '/examples/checkout' },
                    { text: 'Automation', link: '/automation/flow-builder' },
                    { text: 'Reference', link: '/reference/errors' }
                ]
            }
        ],

        sidebar: {
            '/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Quick Start', link: '/getting-started/quickstart' },
                        { text: 'Authentication', link: '/getting-started/authentication' },
                        { text: 'Test vs Live Mode', link: '/getting-started/test-vs-live' }
                    ]
                },
                {
                    text: 'Core Concepts',
                    items: [
                        { text: 'Organizations', link: '/concepts/organizations' },
                        { text: 'Zones', link: '/concepts/zones' },
                        { text: 'Events', link: '/concepts/events' },
                        { text: 'Flows', link: '/concepts/flows' }
                    ]
                },
                {
                    text: 'SDKs',
                    items: [
                        { text: 'Node.js', link: '/sdks/node' },
                        { text: 'Python', link: '/sdks/python' },
                        { text: 'Go', link: '/sdks/go' }
                    ]
                },
                {
                    text: 'API Reference',
                    items: [
                        { text: 'Overview', link: '/api/overview' },
                        { text: 'Payments', link: '/api/payments' },
                        { text: 'Wallets', link: '/api/wallets' },
                        { text: 'Ledger', link: '/api/ledger' },
                        { text: 'Webhooks', link: '/api/webhooks' }
                    ]
                },
                {
                    text: 'Automation',
                    items: [
                        { text: 'Flow Builder', link: '/automation/flow-builder' },
                        { text: 'Triggers', link: '/automation/triggers' },
                        { text: 'Actions', link: '/automation/actions' }
                    ]
                },
                {
                    text: 'Reference',
                    items: [
                        { text: 'Error Codes', link: '/reference/errors' },
                        { text: 'Rate Limits', link: '/reference/rate-limits' }
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/sapliy/fintech-ecosystem' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present Sapliy'
        },

        search: {
            provider: 'local'
        }
    }
})
