import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));
const mainFeaturedPost = {
    title: 'Available Coupon',
    description:
        "Digital coupons are discounts, offers and promotions offered by an online store to current or\n" +
        "                    prospective customers. Similar to their tangible counterparts, coupons are aimed at enticing a\n" +
        "                    consumer to make a purchase at an online",
    image: 'https://themeforest.img.customer.envatousercontent.com/files/91547459/preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=2e2cc31c033868f53be3adf710083e24',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                {/*<Header title="Blog" sections={sections} />*/}
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    {/*<Grid container spacing={4}>*/}
                    {/*    {featuredPosts.map((post) => (*/}
                    {/*        <FeaturedPost key={post.title} post={post} />*/}
                    {/*    ))}*/}
                    {/*</Grid>*/}
                    <Grid container spacing={5} className={classes.mainGrid}>
                        {/*<Main title="From the fire house" posts={posts} />*/}
                        {/*<Sidebar*/}
                        {/*    title={sidebar.title}*/}
                        {/*    description={sidebar.description}*/}
                        {/*    archives={sidebar.archives}*/}
                        {/*    social={sidebar.social}*/}
                        {/*/>*/}
                    </Grid>
                </main>
            </Container>
            {/*<Footer title="Footer" description="Something here to give the footer a purpose!" />*/}
        </React.Fragment>
    );
}