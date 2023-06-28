"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent, Box, IconButton, Avatar, Skeleton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container maxWidth="100vw" sx={{ display: 'flex', margin: '0', padding: '0' }}>
      <Box
        sx={{
          flexGrow: 1,
          marginRight: '9%',
          paddingTop: '2rem',
          paddingRight: '1rem',
          overflowY: 'scroll',
          maxHeight: '100vh',
          '&::-webkit-scrollbar': {
            width: 0,
          },
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Posts
        </Typography>

        <Grid container spacing={2}>
          {isLoading ? (
            // Show skeleton loading while data is being fetched
            Array.from({ length: 6 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <Skeleton variant="rectangular" height={250} />
                  <CardContent>
                    <Skeleton variant="text" height={30} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="text" height={20} width="80%" />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            // Render the actual posts when data is fetched
            posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card
                  sx={{
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" marginBottom="1rem">
                      <Avatar src={post.image} alt={post.title} />
                      <Typography variant="subtitle1" component="span" marginLeft="0.5rem">
                        {post.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      {post.description}
                    </Typography>
                    <Box display="flex" alignItems="center" justifyContent="flex-end" marginTop="1rem">
                      <IconButton
                        aria-label="Like"
                        sx={{
                          transition: 'color 0.2s',
                          '&:hover': {
                            color: 'red',
                          },
                        }}
                      >
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton
                        aria-label="Share"
                        sx={{
                          transition: 'color 0.2s',
                          '&:hover': {
                            color: 'blue',
                          },
                        }}
                      >
                        <ShareIcon />
                      </IconButton>
                      <IconButton
                        aria-label="Comment"
                        sx={{
                          transition: 'color 0.2s',
                          '&:hover': {
                            color: 'green',
                          },
                        }}
                      >
                        <CommentIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Post;
