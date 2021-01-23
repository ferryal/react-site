import React from 'react';
import { skills, personal } from './../../constants';

const PersonalSkill = () => {
	const { skill } = personal;
	return (
		<div className="wrapper-skills">
			<div className="container-header">
				<div className="font-large">{skill.title}</div>
				<div className="font-small">{skill.subtitle}</div>
			</div>
			<div className="container-skills">
				{ skills.map((data, i) => (
					<div className="card-skills">
						<div className="card-header">
							{data.name}
							<div className="icon-wrapper"><i className={data.class}/></div>
						</div>
						<div className="desc-skills">{data.description}</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default PersonalSkill;