import React, { useEffect, useState } from 'react';
import styles from './splashScreen.module.scss';

function SplashScreen({ finishLoading }) {
	const [isMounted, setIsMounted] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsMounted(false);
		}, 4000);

		return () => clearTimeout(timeout);
	}, [finishLoading]);

	useEffect(() => {
		if (!isMounted) {
			const timeout = setTimeout(() => {
				finishLoading();
			}, 500);

			return () => clearTimeout(timeout);
		}
	}, [finishLoading, isMounted]);

	return (
		<div className={`${styles.loaderContainer} ${isMounted ? styles.inAni : styles.outAni}`}>
			<div className={styles.glowingEffect}>Krumos</div>
		</div>
	);
}

export default SplashScreen;
