export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-event-studio-xrkkoie1',
                  apiId: 'ff73c774-9126-4811-8998-8da2ef2208e4'
                },
                {
                  buildHookId: '5d375dc4571a26376ee323e3',
                  title: 'Events Website',
                  name: 'sanity-nuxt-event-web-icg53iaw',
                  apiId: 'f44b7cd0-bb14-45b9-a68a-2b14be7957e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FrankBeatrice/sanity-nuxt-event',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-event-web-icg53iaw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
