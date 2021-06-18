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
                    "60ccb058d772a31beb044a75",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-iyr7w5or",
                  apiId: "060d6e5d-6c01-46a2-a43c-1f6ff46b78eb",
                },
                {
                  buildHookId: "60ccb058341eb600dd611622",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-bikcog9t",
                  apiId: "90768a72-eeb8-4f16-a484-be7de25d0e9e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DalstraReizen/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-bikcog9t.netlify.app",
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
