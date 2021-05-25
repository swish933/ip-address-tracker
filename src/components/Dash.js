import Search from './Search';
import Info from './Info';

const Dash = ({ input, Submit, ip, isp, location, loaded }) => {
	return (
		<div>
			<Search Submit={Submit} loaded={loaded} />
			<Info ip={ip} isp={isp} location={location} loaded={loaded} />
		</div>
	);
};
export default Dash;
