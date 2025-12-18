import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SDD 规格驱动开发",
  description: "一套严谨的 AI 辅助软件开发流程，强制执行 Requirements → Design → Plan → Implementation 流水线",
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'keywords', content: 'SDD, Spec-Driven Development, AI, 规格驱动, 开发流程' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/GETTING-STARTED' },
      { 
        text: '文档', 
        items: [
          { text: '完整操作手册', link: '/QUICK-START' },
          { text: '提示词模板库', link: '/PROMPT-TEMPLATES' },
          { text: '文档索引', link: '/DOCUMENTATION-INDEX' }
        ]
      },
      { 
        text: '系统配置', 
        items: [
          { text: 'AI 核心配置', link: '/AGENTS' },
          { text: '规则系统', link: '/.spec-rules/README' }
        ]
      },
      { text: '关于', link: '/README' }
    ],

    sidebar: {
      // 快速开始侧边栏
      '/GETTING-STARTED': [
        {
          text: '🚀 入门指南',
          items: [
            { text: '5分钟极速入门', link: '/GETTING-STARTED' },
            { text: '完整操作手册', link: '/QUICK-START' },
            { text: '提示词模板库', link: '/PROMPT-TEMPLATES' }
          ]
        },
        {
          text: '📚 参考资料',
          items: [
            { text: '文档索引', link: '/DOCUMENTATION-INDEX' },
            { text: 'AI 核心配置', link: '/AGENTS' },
            { text: '项目介绍', link: '/README' }
          ]
        }
      ],
      
      // 操作手册侧边栏
      '/QUICK-START': [
        {
          text: '📖 完整操作手册',
          items: [
            { text: '系统概述', link: '/QUICK-START#系统概述' },
            { text: '环境准备', link: '/QUICK-START#环境准备' },
            { text: '工作流程', link: '/QUICK-START#工作流程' }
          ]
        },
        {
          text: '🎯 阶段提示词',
          items: [
            { text: 'Phase 0: PREWORK', link: '/QUICK-START#🔍-phase-0-prework-上下文侦探' },
            { text: 'Phase 1: REQUIREMENTS', link: '/QUICK-START#📝-phase-1-requirements-产品经理' },
            { text: 'Phase 2: DESIGN', link: '/QUICK-START#🏗️-phase-2-design-系统架构师' },
            { text: 'Phase 3: PLAN', link: '/QUICK-START#📋-phase-3-plan-工程经理' },
            { text: 'Phase 4: IMPLEMENTATION', link: '/QUICK-START#⚙️-phase-4-implementation-初级开发' },
            { text: 'Phase 5: ACCEPTANCE', link: '/QUICK-START#✅-phase-5-acceptance-qa-工程师' }
          ]
        },
        {
          text: '💼 常见场景',
          items: [
            { text: '全新功能开发', link: '/QUICK-START#🆕-场景-1-全新功能-零到一' },
            { text: '中断后恢复', link: '/QUICK-START#🔄-场景-2-中断后恢复' },
            { text: '问题排查', link: '/QUICK-START#故障排查' }
          ]
        }
      ],
      
      // 提示词模板侧边栏
      '/PROMPT-TEMPLATES': [
        {
          text: '💬 提示词模板库',
          items: [
            { text: '通用提示词', link: '/PROMPT-TEMPLATES#通用提示词' },
            { text: '阶段切换提示词', link: '/PROMPT-TEMPLATES#阶段切换提示词' },
            { text: '异常处理提示词', link: '/PROMPT-TEMPLATES#异常处理提示词' },
            { text: '高级操作提示词', link: '/PROMPT-TEMPLATES#高级操作提示词' }
          ]
        },
        {
          text: '⚠️ 注意事项',
          items: [
            { text: '反模式示例', link: '/PROMPT-TEMPLATES#反模式示例' },
            { text: '优化技巧', link: '/PROMPT-TEMPLATES#🎯-提示词优化技巧' }
          ]
        },
        {
          text: '🎁 实战示例',
          items: [
            { text: '组合拳示例', link: '/PROMPT-TEMPLATES#🎁-组合拳示例' },
            { text: '打印备忘单', link: '/PROMPT-TEMPLATES#🔖-打印备忘单' }
          ]
        }
      ],
      
      // 规则系统侧边栏
      '/.spec-rules/': [
        {
          text: '📋 规则系统',
          items: [
            { text: '规则系统总览', link: '/.spec-rules/README' },
            { text: '核心协议', link: '/.spec-rules/core/protocol' },
            { text: '阶段路由', link: '/.spec-rules/core/phase-router' },
            { text: '反模式清单', link: '/.spec-rules/core/anti-patterns' }
          ]
        },
        {
          text: '📁 各阶段规则',
          items: [
            { text: 'PREWORK', link: '/.spec-rules/phases/PREWORK' },
            { text: 'REQUIREMENTS', link: '/.spec-rules/phases/REQUIREMENTS' },
            { text: 'DESIGN', link: '/.spec-rules/phases/DESIGN' },
            { text: 'PLAN', link: '/.spec-rules/phases/PLAN' },
            { text: 'IMPLEMENTATION', link: '/.spec-rules/phases/IMPLEMENTATION' }
          ]
        },
        {
          text: '📚 参考资料',
          items: [
            { text: '术语表', link: '/.spec-rules/reference/glossary' },
            { text: '完整规则', link: '/.spec-rules/reference/README-FULL' }
          ]
        }
      ],
      
      // 默认侧边栏
      '/': [
        {
          text: '🎯 快速开始',
          items: [
            { text: '5分钟极速入门', link: '/GETTING-STARTED' },
            { text: '完整操作手册', link: '/QUICK-START' }
          ]
        },
        {
          text: '📚 核心文档',
          items: [
            { text: '提示词模板库', link: '/PROMPT-TEMPLATES' },
            { text: 'AI 核心配置', link: '/AGENTS' },
            { text: '文档索引', link: '/DOCUMENTATION-INDEX' }
          ]
        },
        {
          text: '⚙️ 系统配置',
          items: [
            { text: '规则系统', link: '/.spec-rules/README' },
            { text: '项目介绍', link: '/README' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zgs225/PDPI-spec' }
    ],

    footer: {
      message: 'Released under the ISC License.',
      copyright: 'Copyright © 2025 PDPI-spec Contributors'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  lastUpdated: true
})
