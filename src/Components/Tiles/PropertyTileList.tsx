import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Image16x9Component from '../Images/Image16x9Component'
import PrimarySummary from '../Summary/PrimarySummary'
import MetricsSummary from '../Summary/MetricsSummary'

type PropertyTileProps = {
  property: any
}

const PropertyTileList: React.FC<PropertyTileProps> = ({property}) => {

  console.log('property image: ', property.imgSrc)

  return (
    <View style={styles.container}>
      <Image16x9Component image={property.imgSrc} price={property.price} homeType={property.homeType} overlay={true}/>
      <View style={styles.infoContainer}>
        <PrimarySummary property={property}/>
        <MetricsSummary property={property}/>
        <View style={styles.disclaimerContainer}>
          <Text>* Property tax % based on state average *</Text>
          <Text>** Mortage: 20% / 30 Year Fixed / 6.37 IR **</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  infoContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#d4d4d4',
  },
  disclaimerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 4
  }
})

export default PropertyTileList
