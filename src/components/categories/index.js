import React from 'react';
import { connect } from 'react-redux';
import { triggerActive } from '../../store/reducer';
import { Button, ButtonGroup } from '@material-ui/core';
import './categories.scss';
const Categories = (props) => {
  return (
    <>
      <div className='categories'>
        <h2>Categories</h2>
        <ButtonGroup variant="contained" color="primary" aria-label="outlined secondary button group">
          {props.catAndProReducer.categories.map(category => {
            return (
              <Button key={category.name} onClick={() => props.triggerActive(category.name)}>
                {category.name}
              </Button>
            );
          })}

        </ButtonGroup>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { catAndProReducer: state.catAndProReducer };
};

const mapDispatchToProps = { triggerActive };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);