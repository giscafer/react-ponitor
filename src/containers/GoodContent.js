import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GoodList from '../components/goods/GoodList'
import CategoryFilter from '../components/goods/CategoryFilter'
import goodAction from '../actions/goods'


class GoodContent extends Component{
   /* constructor(){
        super();
    }*/
    componentWillMount(){
        const {queryList} = this.props
        queryList('all')
    }

    render(){
        let {goods,queryList}=this.props;
       return (
            <div>
                <CategoryFilter onFilterClick={queryList}/>
                <GoodList goods={goods}/>
            </div>
       )
    }
}


function mapStateToProps(state){
    console.log(state)
    return {
        goods:state.goods
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(goodAction,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(GoodContent)




