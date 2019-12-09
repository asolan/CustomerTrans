import React from 'react';
import {shallow} from 'enzyme';
import FilterOptions from './FilterOptions';


it('expect to render FilterOption Component',()=>{     
    const mockData = []; 
    const mockCustomerOption = [];
    const mockYearOption = [];
    const mockMonthOption = [];
    const mockSubmitFilter = {};
    expect(shallow(
    <FilterOptions 
        data = {mockData} 
        customerOption = {mockCustomerOption} 
        yearOption = {mockYearOption}
        monthOption = {mockMonthOption}
        submitFilter = {mockSubmitFilter}
       
    />)).toMatchSnapshot();
})

it('Simulate the submit button',()=>{    
    const mockData = []; 
    const mockCustomerOption = [];
    const mockYearOption = [];
    const mockMonthOption = [];
    const mockSubmitFilter = {}; 
    const wrapper= shallow(
        <FilterOptions 
            data = {mockData} 
            customerOption = {mockCustomerOption} 
            yearOption = {mockYearOption}
            monthOption = {mockMonthOption}
            submitFilter = {mockSubmitFilter}
           
        />);
    
        wrapper.find('[id="submit"]').simulate('click');
        expect(wrapper.state()).toEqual({customer:'',month:'',year:''})
})