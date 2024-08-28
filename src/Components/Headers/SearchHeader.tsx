import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Search, Sliders } from 'react-native-feather'
import { useApp } from '../../Context/AppContext'

const SearchHeader = () => {

  const {searchTerm, setSearchTerm, searchLocationSearch} = useApp()

  return (
    <View style={styles.container}>
      <View style={styles.containerFormat}>
        <View style={styles.searchBar}>
          <Search height={20} width={20} color={'black'}/>
          <TextInput
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search..."
            placeholderTextColor={'grey'}
            style={styles.searchInput}
            returnKeyType="done"
            onSubmitEditing={() => {searchLocationSearch()}}
          />
          <TouchableOpacity onPress={() => {searchLocationSearch()}}>
            <Text style={styles.searchButton}>Search</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Sliders style={styles.settingsIcon} height={24} width={24} color={'blue'} strokeWidth={2}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  containerFormat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchBar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    padding: 6,
    borderRadius: 20
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 4,
  },
  searchButton: {
    backgroundColor: '#1969ff',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    overflow: 'hidden',
    color: 'white',
    fontWeight: '500'
  },
  settingsIcon: {
    marginLeft: 8
  }
})

export default SearchHeader
