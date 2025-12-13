export const endpoints = {
  healthCheck: "/health-check",
  postEnquiry: "/public/enquiry",
  public: {
    leaderboard: "/public/leaderboard",
    blogs: "/public/blogs",
    getBlogById: (id: string) => `/public/blogs/${id}`,
    getBlogResponse: (id: string) => `/public/blogs/${id}/response`,
  },
};
