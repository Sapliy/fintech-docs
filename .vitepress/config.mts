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
            { text: 'Architecture', link: '/concepts/architecture' },
            { text: 'API', link: '/api/overview' },
            { text: 'SDKs', link: '/sdks/node' },
            {
                text: 'Resources',
                items: [
                    { text: 'CLI Reference', link: '/reference/cli' },
                    { text: 'Nodes Reference', link: '/reference/nodes' },
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
                        { text: 'Why Sapliy? (vs n8n)', link: '/concepts/comparison' },
                        { text: 'Architecture', link: '/concepts/architecture' },
                        { text: 'Core Features', link: '/concepts/features' },
                        { text: 'Organizations', link: '/concepts/organizations' },
                        { text: 'Zones', link: '/concepts/zones' },
                        { text: 'Events', link: '/concepts/events' },
                        { text: 'Flows', link: '/concepts/flows' },
                        { text: 'Security & PBAC', link: '/concepts/security' }
                    ]
                },
                {
                    text: 'Guides & PBAC',
                    items: [
                        { text: 'Integration Guides', link: '/guides/integrations' },
                        { text: 'Configuring PBAC', link: '/guides/pbac-config' },
                        { text: 'Build Your First Flow', link: '/guides/first-flow' }
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
                    text: 'Reference',
                    items: [
                        { text: 'CLI Reference', link: '/reference/cli' },
                        { text: 'Nodes Reference', link: '/reference/nodes' },
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
