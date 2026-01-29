export const endpoints = {
  healthCheck: "/health-check",
  postEnquiry: "/public/enquiry",
  public: {
    leaderboard: "/public/leaderboard",
    blogs: "/public/blogs",
    getBlogById: (id: string) => `/public/blogs/${id}`,
    getBlogResponse: (id: string) => `/public/blogs/${id}/response`,
  },
  blog: {
    advancedListing: "/external/blogs/advanced-listing",
  },
  entityLink: {
    listForward: (type: string, id: string) =>
      `/public/entity-link/list-forward/${type}/${id}`,
  },
};
