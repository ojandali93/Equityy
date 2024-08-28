import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type PrimarySummaryProps = {
  property: any
}

const PrimarySummary: React.FC<PrimarySummaryProps> = ({property}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusContianer}>
        <Text style={styles.address}>{property.streetAddress} {property.city}, {property.state} {property.zipcode}</Text>
      </View>
      <View style={styles.propertySummary}>
        <Text style={styles.info}>{property.bedrooms} Beds</Text>
        <Text style={styles.info}> | </Text>
        <Text style={styles.info}>{property.bathrooms} Baths</Text>
        <Text style={styles.info}> | </Text>
        <Text style={styles.info}>{property.livingArea} Sqft.</Text>
        <Text style={styles.info}> | </Text>
        <Text style={styles.info}>{property.lotAreaValue} {property.lotAreaUnit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#d4d4d4',
  },
  propertyAddress: {

  },
  statusContianer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
  propertySummary: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 6
  },
  address: {
    fontSize: 18,
    fontWeight: '500'
  },
  info: {
    fontSize: 18,
    fontWeight: '500'
  }

})

export default PrimarySummary
