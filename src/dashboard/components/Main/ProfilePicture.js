import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import firebase from '../../../firebaseConfig';
import { makeStyles } from '@material-ui/core/styles';


class ProfilePicture extends React.Component {
    
  constructor(props) {

    super(props)
    const src = 'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/images.png?alt=media&token=e50e9be6-b8b1-43d6-8783-e9e790bbf0a2'
    this.state = {
      preview: null,
      src: null,
      file: null,
      done: false
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoadMethod = this.onBeforeFileLoadMethod.bind(this)
    this.handleUpload = this.handleUpload.bind()
    //this.readPicture = this.readPicture.bind()
  }
  
  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
  }

  onBeforeFileLoadMethod(event) {

    if (event.target.files[0].type.indexOf("image") == -1) {
      alert("File not supported")
    }

    if (event.target.files[0].size > 102400) {
      alert("Image is Big not supported")
    }

    this.setState({
      file: event.target.files[0], 
    })

  }
  handleUpload = () => {
    console.log("file:  "+this.state.file)
    firebase
      .storage()
      .ref(`/profil_picture/${firebase.auth().currentUser.email+'/'+this.state.file.name}`)
      .put(this.state.file)
    
        firebase.storage()
          .ref(`/profil_picture/${firebase.auth().currentUser.email+'/'+this.state.file.name}`)
          .getDownloadURL()
          .then(url => {
            var uid = firebase.auth().currentUser.uid;
            firebase 
            .firestore()
            .collection("Studente")
            .doc(uid)
            .update({
              ImageUrl: url
            })
            console.log("URL: "+url)
          }).catch((error) => {
            console.log("result: "+error.code)
        })
    this.setState({done: true})
    this.onClose()
  };
  render () {
    return (
     this.state.done === false?
      <div>
          
        <Avatar
          width={390}
          height={295}
          onCrop={this.onCrop}
          onClose={this.onClose}
          required
          onBeforeFileLoad={this.onBeforeFileLoadMethod}
          //src={null}
          //src={this.state.src}
        />
        <Button
          onClick={this.handleUpload}
          variant="contained"
          color="default"
          
          startIcon={<CloudUploadIcon />}
        >
          Changer
        </Button>
      </div>

      :

      <h1>c'est fait</h1>
    )
  }
}

export default ProfilePicture;
