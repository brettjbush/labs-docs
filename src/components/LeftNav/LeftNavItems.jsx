/*
  use this file to create the left nav information architecture.

  Example code for parent, child, second level parent, second level child:

  {
    name: 'Title of Parent drawer: Getting started',
    parentSlug: 'Parent path: getting-started',
    url: 'This is the page that the user should land on when clicking on the parent drawer. Can be any url: /docs/postman-flows/flows-overview/',
    subMenuItems1: [
      {
        name: 'first level child: Introduction',
        url: 'path to the first level child: /docs/postman-flows/flows-overview/',
      },
      {
        name: 'This is a first level child that is also the second level parent drawer title: Capturing Request Data',
        subParentSlug: 'second parent path: capturing-request-data',
        slug: 'Page that user should land on when clicking on second level parent. Can be any url: /docs/sending-requests/capturing-request-data/capturing-http-requests/',
        subMenuItems2: [
          {
            name: 'second level child: Capturing HTTP requests',
            url: 'path to second level child: /docs/sending-requests/capturing-request-data/capturing-http-requests/',
          },
        ],
      },
    ],
  }
*/


export const leftNavItems = [
  {
    name: 'Postman Flows',
    parentSlug: 'postman-flows',
    url: '/docs/postman-flows/flows-overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/postman-flows/flows-overview/',
      },
      {
        name: 'Getting Started',
        subParentSlug: 'available-integrations',
        slug: '/docs/postman-flows/available-integrations/apimatic/',
        subMenuItems2: [
          {
            name: 'The Interface',
            url: '/docs/postman-flows/available-integrations/apimatic/',
          },
          {
            name: 'The Block',
            url: '/docs/postman-flows/available-integrations/aws-api-gateway/',
          },
          {
            name: 'Data Types',
            url: '/docs/postman-flows/available-integrations/azure-devops/',
          },
          {
            name: 'Expressions & Operators',
            url: '/docs/postman-flows/available-integrations/ci-integrations/travis-ci/',
          },
        ],
      },
      {
        name: 'FAQs',
        url: '/docs/postman-flows/flows-faq/',
      },
    ],
  },
];

// export default parentSlugItems;