export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61dd3fb65f603ec892a4c5ec",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-wybakttr",
                  apiId: "31c6f336-9a68-4c73-bc49-d07a88a8b478",
                },
                {
                  buildHookId: "61dd3fb7ef922fbf74e7fdc6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-pyhbteu6",
                  apiId: "bef0c9d1-a039-4132-aafd-971e9e2eaae0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kgorzynski/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-pyhbteu6.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
