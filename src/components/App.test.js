import React from 'react';
import { configure, shallow } from 'enzyme';
import { App } from './App';
import { categories } from '../data/fixtures';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = { categories };

describe('App', () => {
	const app = shallow(<App {...props} />);

	it('renders the title', () => {
		expect(app.find('h2').text()).toEqual('Jeopardy!');
	});

	it('craetes the correct number of links', () => {
		expect(app.find('Link').length).toEqual(categories.length);
	});

	it('title the links correctly', () => {
		app.find('Link h4').forEach((linkTitle, index) => {
			expect(linkTitle.text()).toEqual(categories[index].title);
		});
	})
});