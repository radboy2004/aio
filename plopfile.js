module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a custom component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'MyComponent'
      }
    ],
    // 把基于模板创建的文件，放到指定的目录
    actions: [
      {
        type: 'add',
        path: 'packages/components/{{name}}/src/{{name}}.vue',
        templateFile: 'plop_templates/src/component.hbs'
      },
      {
        type: 'add',
        path: 'packages/components/{{name}}/index.ts',
        templateFile: 'plop_templates/index.hbs'
      },
      {
        type: 'add',
        path: 'packages/components/{{name}}/package.json',
        templateFile: 'plop_templates/package.hbs'
      },
      {
        type: 'add',
        path: 'packages/components/{{name}}/LICENSE',
        templateFile: 'plop_templates/LICENSE.hbs'
      },
      {
        type: 'add',
        path: 'packages/components/{{name}}/README.md',
        templateFile: 'plop_templates/README.hbs'
      }
    ]
  })
}
