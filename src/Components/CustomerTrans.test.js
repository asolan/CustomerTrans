import React from 'react';
import {shallow} from 'enzyme';
import CustomerTrans from './CustomerTrans';


it('expect to render CustomerTrans Component',()=>{     
      const mockData = [
        {
            amountSpend: 120,
            date: "12/1/2019",
            firstName: "John",
            lastName: "Doe",
            month: 11,
            points: 90,
            store: "Walmart",
        }
      ];
      const mockTotalMonthlyRewards=90;
      const mockTotalRewards=220;

    expect(shallow(
    <CustomerTrans 
        data={mockData}
        totalMonthlyRewards = {mockTotalMonthlyRewards}
        totalRewards = {mockTotalRewards}
    />)).toMatchSnapshot();
})