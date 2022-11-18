// When making GQL request to leetcode.com./graphql
export interface problemSetVariable {
  categorySlug: string;
  limit?: number;
  skip?: string;
  filters?: {
    difficulty?: string;
    searchKeywords?: string;
    tags?: Array<string>;
  };
}
