import React, { createContext, useContext, ReactNode, useState } from 'react';
import { confirmSignUp, getCurrentUser, resendSignUpCode, resetPassword, signIn, signOut, signUp } from 'aws-amplify/auth';
import axios from 'axios';

export function useUser() {
  return useContext(UserContext);
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType>({
  currentUser: false,
  currentProfile: false,
  signInUserAws: () => {},
  getCurrentUserAccount: () => {}, 
  signOutUserAws: () => {},
  username: '' ,
  setUsername: () => {},
  password: '', 
  setPassword: () => {},
  firstName: '', 
  setFirstName: () => {}, 
  lastName: '',
  setLastName: () => {}, 
  email: '',
  setEmail: () => {},
  phone: '', 
  setPhone: () => {}, 
  location: '',
  setLocation: () => {},
  verify: '', 
  setVerify: () => {},
  signUpNewUser: () => {}
});

interface UserContextType {
  currentUser: any;
  currentProfile: any;
  signInUserAws: (username: string, password: string) => void;
  getCurrentUserAccount: () => void;
  signOutUserAws: () => void;
  username: string ;
  setUsername: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  firstName: string; 
  setFirstName: (text: string) => void;
  lastName: string;
  setLastName: (text: string) => void;
  email: string;
  setEmail: (text: string) => void;
  phone: string; 
  setPhone: (text: string) => void;
  location: string;
  setLocation: (text: string) => void;
  verify: string; 
  setVerify: (text: string) => void;
  signUpNewUser: () => void;
}

// the main provider
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

  const [currentUser, setCurrentUser] = useState<any>(null)
  const [currentProfile, setCurrentProfile] = useState<any>(null)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verify, setVerify] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  const signUpNewUser = () => {
    const signupData = {
      username,
      password,
      options: {
        userAttributes: {
          email,
          given_name: firstName,
          family_name: lastName,
          nickname: username,
          name: `${firstName} ${lastName}`,
          locale: location,
          preferred_username: username,
        }
      }
    }
    signUp(signupData)
      .then((currentUser: any) => {
        console.log('User is signed in: ', currentUser)
      })
      .catch((err: any) => {
        console.log('Could not create user:', err);
      });
  }

  const signInUserAws = (username: string, password: string) => {
    signIn({username, password})
      .then((response: any) => {
        console.log('sign in respose: ', response.data)
      })
      .catch((signInError: any) => {
        console.log('Error signing in user: ', signInError)
      })
  }

  const getCurrentUserProfile = () => {

  }

  const getCurrentUserAccount = () => {
    getCurrentUser()
      .then((response: any) => {
        console.log('current signed in user account: ', response)
      })
      .catch((userAccountError: any) => {
        console.log("Error getting the current logged in user: ", userAccountError)
      })
  }

  const signOutUserAws = () => {
    signOut()
      .then((response: any) => {
        console.log('Successfull Signout')
      })
      .catch((error: any) => {
        console.log("Error signing out user: ", error);
      });
  }
  
  return (
    <UserContext.Provider
      value={{
        currentUser,
        currentProfile,
        username, 
        setUsername,
        password, 
        setPassword,
        firstName, 
        setFirstName, 
        lastName,
        setLastName, 
        email,
        setEmail,
        phone, 
        setPhone, 
        location,
        setLocation,
        verify, 
        setVerify,
        signInUserAws,
        getCurrentUserAccount, 
        signOutUserAws, 
        signUpNewUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};