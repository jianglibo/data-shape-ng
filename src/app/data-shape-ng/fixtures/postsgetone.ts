export const POST_BODY = {
  data: {
    id: '65537',
    type: 'posts',
    attributes: {
      toAll: true,
      createdAt: 1499829564891,
      read: true,
      title: 'title',
      content: 'content',
      dtoAction: null,
      dtoApplyTo: null,
    },
    relationships: {
      sharedUsers: {
        links: {
          self: 'http://localhost/jsonapi/posts/65537/relationships/sharedUsers',
          related: 'http://localhost/jsonapi/posts/65537/sharedUsers',
        },
      },
      creator: {
        links: {
          self: 'http://localhost/jsonapi/posts/65537/relationships/creator',
          related: 'http://localhost/jsonapi/posts/65537/creator',
        },
      },
      sharedGroups: {
        links: {
          self: 'http://localhost/jsonapi/posts/65537/relationships/sharedGroups',
          related: 'http://localhost/jsonapi/posts/65537/sharedGroups',
        },
      },
      media: {
        links: {
          self: 'http://localhost/jsonapi/posts/65537/relationships/media',
          related: 'http://localhost/jsonapi/posts/65537/media',
        },
      },
    },
    links: {
      self: 'http://localhost/jsonapi/posts/65537',
    },
  },
};
