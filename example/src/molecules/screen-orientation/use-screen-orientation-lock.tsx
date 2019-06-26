import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { ScreenOrientation } from 'expo';
import { useScreenOrientationLock } from 'use-expo';
import { Example, Information, Link, Page, Space } from '../../atoms';
import { docs } from '../../providers/urls';

const orientations = [
	ScreenOrientation.OrientationLock.ALL,
	ScreenOrientation.OrientationLock.LANDSCAPE,
	ScreenOrientation.OrientationLock.LANDSCAPE_LEFT,
	ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
	ScreenOrientation.OrientationLock.PORTRAIT,
	ScreenOrientation.OrientationLock.PORTRAIT_UP,
];

export const UseScreenOrientationLock: React.SFC = () => {
	const [orientation, setOrientation] = useState(ScreenOrientation.OrientationLock.ALL);
	useScreenOrientationLock(orientation);

	return (
		<Page
			title='useScreenOrientationLock'
			subtitle='locks the screen to an orientation with'
		>
			<Information>
				This example only uses the <Link url={docs.screenOrientation}>ScreenOrientation</Link> module.
				It renders multiple buttons to change the current screen orientation lock.
			</Information>
			<Example>
				{orientations.map(type => (
					<Space size='small' key={`orientation-${type}`}>
						<Button
							color='#333'
							mode={orientation === type ? 'contained' : 'outlined'}
							onPress={() => setOrientation(type)}
						>
							{type}
						</Button>
					</Space>
				))}
			</Example>
		</Page>
	);
};
