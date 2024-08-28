import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const width = Dimensions.get('screen').width
const height = (width * 9) / 16

type ImageProps = {
  image: string,
  price?: number,
  homeType?: string,
  overlay?: boolean
}

const Image16x9Component: React.FC<ImageProps> = ({image, price, homeType, overlay}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={{uri: image}} alt={'Property Image'}/>
      {
        overlay 
          ? <View style={styles.imageOverlay}>
              <View style={styles.infoBar}>
                <Text style={styles.price}>${price}</Text>
                <Text style={styles.homeType}>{homeType}</Text>
              </View>
            </View>
          : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: '100%',
  },
  imageContainer: {
    flex: 1
  },
  imageOverlay: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    padding: 16,
    zIndex: 5,
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },
  infoBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  homeType: {
    padding: 6,
    backgroundColor: '#97bbfc',
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 6,
    overflow: 'hidden'
  }
})

export default Image16x9Component
