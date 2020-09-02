import React, { Component } from 'react';
import Tab from '../Tabs/Tab';
import data from '../assests/data.json';

class Content extends Component {
  constructor() {
    super();
    console.log(data.content);
    this.items = data.content.map(ele => ele.heading);
    console.log(this.items);
    this.initialContent = data.content.filter(ele => ele.heading === this.items[0])[0];
    this.state = {
      tabs: this.items,
      this.items[0],
      content: this.initialContent
    };
    console.log(this.state);
  }
  
    clickFunction = (option) => {
      let optionSelected = option.ele;
      let optionContent = data.content.filter(ele => ele.heading === optionSelected)[0];
      console.log(optionContent);
      this.setState({ //method allow to update special property state nad make sure reacts know about update and update DOM
        content: optionContent,
        active: optionSelected
      })
    };
  
    render() {
      return (
        <div className="container">
          <div className="row justify-content-md-center">
          
            <div className="col-md-auto FormSection">
              <ul className="nav nav-tabs">
                {
                  this.state.tabs.map(ele => {
                    return <li className={this.state.active === ele? 'active' : ''} key={ele}>
                      <a href="javascript:void(0);" onClick={this.clickFunction.bind(this, {ele})}>{ele}</a>
                    </li>
                  })
                }
              </ul>
              <div className="mytab" id="mytab">
                  {/* Creating Class Component */}
                  <Tab
                      content={this.state.content}
                  ></Tab>
              </div>
            </div>

          </div>
        </div>
      );
    }
  }

  export default Content;