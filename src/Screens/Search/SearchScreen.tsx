import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import SearchHeader from '../../Components/Headers/SearchHeader'
import { useApp } from '../../Context/AppContext'
import PropertyTileList from '../../Components/Tiles/PropertyTileList'

const SearchScreen = () => {

  const {results} = useApp()

  return (
    <View style={styles.container}>
      <SearchHeader/>
      {
        results && results.length > 0
          ? <FlatList
              style={styles.flatList}
              data={results}
              renderItem={(property: any) => {
                return(
                  <PropertyTileList property={property.item}/>
                )
              }}
              keyExtractor={(property: any) => property.zpid}
            />
          : <Text>No Results Found</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  flatList: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default SearchScreen
