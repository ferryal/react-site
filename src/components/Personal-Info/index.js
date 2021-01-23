import React from 'react';
import { personal } from './../../constants';

const PersonalInfo = () => {
	const { info } = personal;
	return (
		<div className="wrapper-personal">
			<img className="img-logo" src="/assets/img/y-logo.png" alt="Y-Logo" />
			<div className="container-personal">
				<div className="name-personal">{info.name}</div>
				<div className="skill-personal">{info.title}</div>
				<div className="text-personal">
					{
						info.description.map((desc) => (
							<div>{desc}</div>
						))
					}
				</div>
				<span className="btn-personal">{info.button}</span>
			</div>
		</div>
	);
}

export default PersonalInfo;