import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper,Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
   

    setPostData({  title: '', message: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };
  if (!user?.result?.name) {
    return (
     
      <Paper className={classes.paper}>
        
        <Typography  variant="h6" align="Center"  justifyContent="center" display= "flex"  height = '100vh'>
          Veuillez se connecter pour consuler ou déposer une réclamation .
        </Typography>
        
      </Paper>
     
    );
  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Déposer votre Réclamation'}</Typography>
        <TextField name="title" variant="outlined" label="Titre" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Description" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        
        <div className={classes.fileInput}><FileBase type="file" multiple={false} id="corps" onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /><p>Merci de déposer une image de votre problème</p></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Valider</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Vider les champs</Button>
      </form>
    </Paper>
  );
};

export default Form;