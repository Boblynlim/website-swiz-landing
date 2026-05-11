import {
  buildWispClient,
  type GetPostsResult,
  type GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: process.env.NEXT_PUBLIC_WISP_BLOG_ID ?? "",
});

export type { GetPostsResult, GetPostResult };
