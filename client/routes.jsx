import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './mainLayout.jsx';
import App from './app.jsx';

FlowRouter.route('/',{
	action(){
		mount(MainLayout,{
			content:(<App/>)
		})
	}
});

