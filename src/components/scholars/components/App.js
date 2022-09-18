import { ReadOutlined, TableOutlined } from '@ant-design/icons';
import { Layout, Tabs } from 'antd';
import React from 'react';
import './App.css';
import NewsTab from './NewsTab';
import ResearchTables from './ResearchTables';
// import results from '../output.json';
import Navigation from '../../tools/Navigation';
import news from '../api/news';
// import paper from '../articles.db';

const { TabPane } = Tabs;

class App extends React.Component {
  state = { articles: [] };

  async componentDidMount() {
    const response = await news.get('/v2/everything', {
      params: {
        q: '"duke university" machine learning',
        language: 'en',
        sortBy: 'relevancy',
        pageSize: 8,
      },
    });

    this.setState({ articles: response.data.articles });
  }

  handleClick = (e) => {
    this.setState({ currentMenu: e.key });
  };

  render() {
    return (
      <div>
        <Navigation />

        <Layout>
          <h1 className="ui dividing header" id="title">
            {' '}
            Current Research at Duke{' '}
          </h1>
          <Tabs
            tabBarStyle={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
            }}
            size="large"
            centered={true}
            defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  {' '}
                  <ReadOutlined />
                  News
                </span>
              }
              key="1">
              <NewsTab articles={this.state.articles} />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <TableOutlined />
                  Research
                </span>
              }
              key="2">
              <ResearchTables />
            </TabPane>
          </Tabs>
        </Layout>
      </div>
    );
  }
}

export default App;
