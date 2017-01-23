import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Add from '../components/goods/Add'
import GoodList from '../components/goods/GoodList'
import CategoryFilter from '../components/goods/CategoryFilter'
import goodAction from '../actions/goods'


class GoodContent extends Component {
    /* constructor(){
         super();
     }*/
    componentWillMount() {
        const {queryList} = this.props
        queryList('all')
    }

    render() {
        let {good, queryList, addGood} = this.props;
        // console.log(good)
        return (
            <div>
                <Add onAddClickHandler={addGood} />
                <CategoryFilter onFilterClick={queryList} filterType={good.goodType}/>
                <GoodList goods={good.goods} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    // console.log(state)
    return {
        good: state.goods
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(goodAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodContent)




