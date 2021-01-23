import React, { useEffect, useState } from 'react'
import { TEN_MINUTES_IN_MILISEC } from "../../constants";
import { personal } from './../../constants';

const Subscription = () => {
	const [isHidden, setisHidden] = useState(null);
	const { subscription } = personal;
		
	const handleHideSubscription = () => {
		const currDate = new Date().getTime();
		const panelShowTime = currDate + TEN_MINUTES_IN_MILISEC;

		localStorage.setItem("panelShowTime", panelShowTime);
		handleTimeout();
		setisHidden(true)
	}

	const handleShowSubscription = () => {
		setisHidden(false)
	}

	const handleTimeout = () => {
		const panelShowTimeString = localStorage.getItem("panelShowTime");
		const panelShowTimeInt = Number(panelShowTimeString);
		const currDate = new Date().getTime();
		const cuntdownDuration = panelShowTimeInt - currDate;

		if (panelShowTimeInt && cuntdownDuration > 0) {
			setTimeout(() => {
				handleShowSubscription();
			}, cuntdownDuration);
		} else {
			localStorage.removeItem("panelShowTime");
		}
	}

	const handleScrollListener = () => {
		window.addEventListener("scroll", e => {
			const scrollPosition = window.scrollY;

			if (
				scrollPosition >= (1 / 3) * window.screen.height &&
				!localStorage.getItem("panelShowTime")
			) {
				handleShowSubscription();
			}
		});
	};

	useEffect(handleTimeout, [])
	useEffect(handleScrollListener, [])

	console.log(isHidden)
	return (
		<div className="wrapper-subscription">
			<div className="center-subscription">
				<div className={`card-subscription ${isHidden !== true ? 'slide-up-animation' : 'disapear-animation' }`}>
					<div className="btn-close" onClick={handleHideSubscription}>X</div>
					<div className="head-title">{subscription.title}</div>
					<div className="desc-title">{subscription.description}</div>
					<div className="wrapper-form">
						<input className="input-email" type="text" name="email" placeholder="Email address" />
						<div className="btn-subs">{subscription.button}</div>
					</div>
				</div>
			</div>
		</div>
	);
    }

export default Subscription;