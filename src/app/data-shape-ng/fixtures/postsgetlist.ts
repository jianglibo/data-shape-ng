export const POSTS_BODY = {
  data: [
    {
      id: '360449',
      type: 'posts',
      attributes: {
        toAll: true,
        createdAt: 1505353227255,
        read: false,
        title: 'title--1389046650',
        content: 'content-1822915060',
        dtoAction: null,
        dtoApplyTo: null,
      },
      relationships: {
        sharedUsers: {
          links: {
            self: 'http://localhost/jsonapi/posts/360449/relationships/sharedUsers',
            related: 'http://localhost/jsonapi/posts/360449/sharedUsers',
          },
        },
        creator: {
          links: {
            self: 'http://localhost/jsonapi/posts/360449/relationships/creator',
            related: 'http://localhost/jsonapi/posts/360449/creator',
          },
        },
        sharedGroups: {
          links: {
            self: 'http://localhost/jsonapi/posts/360449/relationships/sharedGroups',
            related: 'http://localhost/jsonapi/posts/360449/sharedGroups',
          },
        },
        media: {
          links: {
            self: 'http://localhost/jsonapi/posts/360449/relationships/media',
            related: 'http://localhost/jsonapi/posts/360449/media',
          },
        },
      },
      links: {
        self: 'http://localhost/jsonapi/posts/360449',
      },
    },
  ],
  links: {
    first: 'http://localhost/jsonapi/posts/?filter[posts][toAll][EQ]=true&page[limit]=19',
    last: 'http://localhost/jsonapi/posts/?filter[posts][toAll][EQ]=true&page[limit]=19',
    next: null,
    prev: null,
  },
  meta: {
    totalResourceCount: 1,
  },
};
