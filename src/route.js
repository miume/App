import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './main/App';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="coupon">
            <IndexRoute component={Coupon}/>
            <Route path=":id" component={CouponDetail}/>
        </Route>
    <Route/>
)
