import React from 'react';
import { Tabs, Layout} from 'antd';
import { TableOutlined, ReadOutlined } from '@ant-design/icons';
import NewsTab from './NewsTab';
import ResearchTables from './ResearchTables';
import "./App.css";
import ReactDOM from 'react-dom';
// import results from '../output.json';
import news from '../api/news';
import database from '../api/database';
import axios from 'axios'
// import paper from '../articles.db';


const { TabPane } = Tabs;

class App extends React.Component{
  state = { articles: []}

  async componentDidMount(){
    const response = await news.get('/v2/everything', {
      params: {
        q: '"duke university" machine learning',
        language: 'en',
        sortBy: 'relevancy',
        pageSize: 8
      }
    })

    this.setState({ articles: response.data.articles })
  }
  
  handleClick = (e) => {
    this.setState({ currentMenu: e.key });
  }

  render(){

    return (
      <div className="body">
        <Layout>
          <h1 className="ui dividing header" id = "fonts"> Duke@Scholars </h1>
          <Tabs tabBarStyle={{ 
            display: 'flex', 
            justifyContent: 'left',
            alignItems: 'center'
            }} size="large" centered={true} defaultActiveKey="1">
            <TabPane tab={<span> <ReadOutlined />News</span>} key="1">
              <NewsTab articles={this.state.articles}/>
            </TabPane>
            <TabPane tab={<span><TableOutlined />Research</span>} key="2">
              <ResearchTables/>
            </TabPane>
          </Tabs>
        </Layout>
      </div>
    );
  }
};



export default App;