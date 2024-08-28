import React, { createContext, useContext, ReactNode, useState } from 'react';
import { confirmSignUp, getCurrentUser, resendSignUpCode, resetPassword, signIn, signOut, signUp } from 'aws-amplify/auth';
import axios from 'axios';
import {searchOptions} from '../Utils/ZillowOptions'

export function useApp() {
  return useContext(AppContext);
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType>({
  searchTerm: '', 
  setSearchTerm: () => {},
  loadingResults: false, 
  setLoadingResults: () => {},
  results: [], 
  setResults: () => {},
  searchLocationSearch: () => {}
});

interface AppContextType {
  searchTerm: string, 
  setSearchTerm: (data: string) => void,
  loadingResults: boolean, 
  setLoadingResults: (data: boolean) => void,
  results: any, 
  setResults: (data: any) => void,
  searchLocationSearch: () => void
}

// the main provider
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  const [searchTerm, setSearchTerm] = useState<string>('')

  const [loadingResults, setLoadingResults] = useState<boolean>(false)

  const [results, setResults] = useState<any>([])
  const [resultsPerPage, setResultsPerPage] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [totalResultsCount, setTotalResultsCount] = useState<number>(0)

  const searchLocationSearch = async () => {
    console.log(searchOptions)
    searchOptions.params.location = searchTerm
    try {
      const response = await axios.request(searchOptions);
      console.log(response.data.totalResultCount);
      setResults(response.data.results)
      setResultsPerPage(response.data.resultsPerPage)
      setTotalPages(response.data.totalPages)
      setTotalResultsCount(response.data.totalResultCount)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <AppContext.Provider
      value={{
        searchTerm, 
        setSearchTerm,
        loadingResults, 
        setLoadingResults,
        results, 
        setResults,
        searchLocationSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};