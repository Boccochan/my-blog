interface PageInput {
  path: string;
  component: string;
  layout?: string;
  context?: any;
}

interface BoundActionCreators {
  createPage: (page: PageInput) => void;
  deletePage: (page: PageInput) => void;
  createRedirect: (opts: {
    fromPath: string;
    isPermanent?: boolean;
    redirectInBrowser?: boolean;
    toPath: string;
  }) => void;
}

export type GatsbyCreatePages = (fns: {
  graphql: any;
  boundActionCreators: BoundActionCreators;
}) => void;

export type BlogInfo = {
  slug: string;
  excerpt: string;
  title: string | null | undefined;
  date: any;
  description: string | null | undefined;
};

export type Tree = {
  key: string;
  node?: Tree[];
};
