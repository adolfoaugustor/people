import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) =>(
	<View style={style.container}>
		<Text style={style.title}>{ props.title }</Text>
	</View>
);

const style = StyleSheet.create({
	container: {
		marginTop: 20,
		backgroundColor: '#0044b2',

		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 45,
		color: '#fff',
	}
});

export default Header;