export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f9baef35c197883037ddc6f',
                  title: 'Sanity Studio',
                  name: 'phanphuocy-sanity-gatsby-studio',
                  apiId: 'b932c5c7-2abd-4b9b-957f-57141810e830'
                },
                {
                  buildHookId: '5f9baef37da6a9a0fc19c788',
                  title: 'Portfolio Website',
                  name: 'phanphuocy-sanity-gatsby',
                  apiId: '93ea3979-85cc-4f0b-af28-6b4ece402ce9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/phanphuocy/phanphuocy-sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://phanphuocy-sanity-gatsby.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
