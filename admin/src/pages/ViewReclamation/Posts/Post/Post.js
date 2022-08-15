import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import useStyles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import 'moment/locale/fr'  



const Post = ({ post,setCurrentId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    moment.locale('fr');

    if (user?.result?.googleId === post?.creator || user?.result?._id === post?.creator ) {

    return (
<Card className={classes.card}>
<React.Fragment>
        
       
        <CardMedia style={{height: 250, paddingTop: '23.25%'}} className={classes.media} image={post.selectedFile} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>  
        </div>

        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography> 
        </CardContent>
        
       
        
        
        <CardActions className={classes.cardActions}>
           
         
           {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
             <Button size="small" color="primary" onClick={() => setCurrentId(post._id)}><EditIcon fontSize="small" /> Edit</Button>
           )}
           
        </CardActions>
        </React.Fragment>
      </Card>
    );
 } 
 {
   return(null);
 }
};
export default Post;