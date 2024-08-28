import React from 'react'
import { StyleSheet, View } from 'react-native'
import Image16x9Component from '../Images/Image16x9Component'
import PrimarySummary from '../Summary/PrimarySummary'

type PropertyTileProps = {
  property: any
}

const PropertyTileList: React.FC<PropertyTileProps> = ({property}) => {

  console.log('property image: ', property.imgSrc)

  return (
    <View style={styles.container}>
      <Image16x9Component image={property.imgSrc} price={property.price} homeType={property.homeType} overlay={true}/>
      <PrimarySummary property={property}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

export default PropertyTileList
