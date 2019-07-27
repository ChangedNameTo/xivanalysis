import React from 'react'

import {ActionLink, StatusLink} from 'components/ui/DbLink'
import ACTIONS from 'data/ACTIONS'
import CONTRIBUTORS from 'data/CONTRIBUTORS'
import STATUSES from 'data/STATUSES'

export const changelog = [
	{
		date: new Date('2019-07-20'),
		Changes: () => <>Suggestions for dance performances and checklist rule for <StatusLink {...STATUSES.STANDARD_FINISH} /> uptime.</>,
		contributors: [CONTRIBUTORS.AKAIRYU],
	},
	{
		date: new Date('2019-07-27'),
		Changes: () => <>Suggestions for dropped and overwritten Procs, does not handle the specific cases where it is better to drop <ActionLink {...ACTIONS.RISING_WINDMILL}/>. </>,
		contributors: [CONTRIBUTORS.TWO_BROKEN],
	},
]
