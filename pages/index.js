import Link from 'next/link'
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material'
// components
import Iconify from '../components/Iconify'
import BlogPostCard from '../components/BlogPostCard'
import BlogPostsSearch from '../components/BlogPostsSearch'
import BlogPostsSort from '../components/BlogPostsSort'
// graphCMS
import { GraphQLClient } from 'graphql-request'
// import POSTS from '../public/mocks/blog'

// ----------------------------------------------------------------------

export async function getStaticProps() {
    const graphcms = new GraphQLClient(
        'https://api-ap-northeast-1.graphcms.com/v2/cl1u5r2hta5ht01z7abpx42m6/master',
    )

    const { posts, categories } = await graphcms.request(
        `
      {
        posts {
          id
          date
          title
          tags
          slug
          excerpt
          createdBy {
              name
            }
          category {
              name
            }
          content {
            text
          }
          coverImage {
            fileName
            url
          }
        }
        categories {
          id
          name
          slug
        }
      }
      `,
    )

    return {
        props: {
            posts,
            categories,
        },
    }
}

export default function Blog({ posts, categories }) {
    return (
        <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
            >
                <Typography variant="h4" gutterBottom>
                    Blog
                </Typography>
                <Button
                    variant="contained"
                    // component={Link}
                    to="#"
                    startIcon={<Iconify icon="eva:plus-fill" />}
                >
                    New Post
                </Button>
            </Stack>

            <Stack
                mb={5}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <BlogPostsSearch posts={posts} />
                <BlogPostsSort />
            </Stack>

            <Grid container spacing={3}>
                {posts.map((post, index) => (
                    <BlogPostCard key={post.id} post={post} index={index} />
                ))}
            </Grid>
        </Container>
    )
}
