import React, { useState } from "react";
import firebase  from "../../../../firebaseConfig"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Progress } from 'rsuite';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const ReactFirebaseFileUpload = () => {

  const classes = useStyles();

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setLoading(true);
    const uploadTask = firebase
      .storage()
      .ref(`/inscription/${firebase.auth().currentUser.email+'/'+image.name}`)
      .put(image)
    
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
      },
      () => {
        firebase.storage()
          .ref(`/inscription/${firebase.auth().currentUser.email+'/'+image.name}`)
          .getDownloadURL()
          .then(url => {
            var uid = firebase.auth().currentUser.uid;
            firebase 
            .firestore()
            .collection("Studente")
            .doc(uid)
            .update({
              Inscription: url
            })
            console.log("URL: "+url)
          }).catch((error) => {
              console.log("result: "+error.code)
          })
      }
    );


  };

  console.log("image: ", image);

  return (
    loading === false?
      <div>
        <input required type="file" onChange={handleChange}/>
        <Button
          onClick={handleUpload}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Inscription
        </Button>
        
      </div>
    :
      <progress value={progress} max={100} style={{width:"100%",color:"#0f0"}} />
  );
};
export default ReactFirebaseFileUpload;