import React from 'react';
import {StyleSheet, Text, ScrollView, Image} from 'react-native';

const aboutGlobo = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`
const whatGlobo = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.pics} source={require('../img/laptop3.jpeg')} />
      <Text style={styles.aboutTitle}>Who we are</Text>
      <Text style={styles.aboutText}>{aboutGlobo}</Text>
      <Image style={styles.pics} source={require('../img/laptop2.jpg')}/>
      <Text style={styles.aboutTitle}>What we do</Text>
      <Text style={styles.aboutText}>{whatGlobo}</Text>
      <Image style={styles.pics} source={require('../img/laptop2.jpg')}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  pics: {
    height: 300,
  },
  aboutTitle: {
    paddingTop: 10,
    textAlign: 'center',
  },
  aboutText: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
})
export default AboutScreen;