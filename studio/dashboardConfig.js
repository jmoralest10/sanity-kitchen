export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62376750dbdc795c249c2c23',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-studio-5t1qqjw2',
                  apiId: '6e4383cb-1902-4d97-ae10-01b20ef7ca47'
                },
                {
                  buildHookId: '623767504910027a08f6f768',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-web-a62xj5ga',
                  apiId: '3422f544-0b23-478f-a5b5-0491b72d695c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmoralest10/sanity-kitchen',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-web-a62xj5ga.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
