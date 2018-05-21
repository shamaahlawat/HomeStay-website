import RootContainer from '../pages/root_container';
import HomePage from '../pages/home_page';
import HomeStayInfo from '../pages/home_stay_info';
import EmailVerification1 from '../pages/email_verification1';
import EmailVerification2 from '../pages/email_verification2';
import AdditionalInfo from '../pages/additional_info';
import OwnerVerification1 from '../pages/owner_verification';
import OwnerVerification2 from '../pages/owner_verification2';
import OwnerVerification3 from '../pages/owner_verification3';
import CongratulationScreen from '../pages/congratulation_screen';


const AppRoutes = {
	path: '/',
	component: RootContainer,
	childRoutes: [
		{
			path: 'home',
			component: HomePage
		},
		{
			path: 'homestayinfo',
			component: HomeStayInfo
		},
		{
			path: 'emailVerification',
			component: EmailVerification1
		},
		{
			path: 'emailVerification2',
			component: EmailVerification2
		},
		{
			path: 'additionalInfo',
			component: AdditionalInfo
		},
		{
			path: 'ownerVerification',
			component: OwnerVerification1
		},
		{
			path: 'ownerVerification2',
			component: OwnerVerification2
		},
		{
			path: 'ownerVerification3',
			component: OwnerVerification3
		},
		{
			path: 'congrats',
			component: CongratulationScreen
		}
	]
};

module.exports = AppRoutes;
