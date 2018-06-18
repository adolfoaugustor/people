import { StackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter } from './src/util';

export default StackNavigator({
	'Main':{
		screen:PeoplePage
	},
	'PeopleDetail':{
		screen: PeopleDetailPage,
		navigationOptions: ({navigation}) => {
			const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
			return({
				title: peopleName,
				headerTitleStyle:{
					color:'white',
					fontSize:30, 
				}
			});
		}
	}
}, {
	navigationOptions:{
		title: 'Pessoas!',
		headerTintColor: 'white',
		headerStyle:{
			backgroundColor: '#21a6ff',
			borderBottomWidth: 1,
			borderBottomColor: '#a4a9ad',
		},
		headerTitleStyle:{
			color:'white',
			fontSize:30,
			alignSelf:'center',
		}
	}
});