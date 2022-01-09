import React, { useEffect, useState } from "react";
import firebase from "../firebaseConfig";

export const isAuthenticated = () => firebase.auth().currentUser
