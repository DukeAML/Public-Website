import React from 'react';
// import results from '../output.json';
import "./App.css";
import moment from 'moment';
import { Table, Input, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, message} from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';
// import articles from '../articles.db';
// import SqliteToJson from 'sqlite-to-json';
// import sqlite3 from 'sqlite3';

// const exporter = new SqliteToJson({
//   client: new sqlite3.Database('../articles.db')
// });

// exporter.save('paper', './test.json', function (err) {
//   // no error and you're good.
// });

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

// const menu = (
//   <Menu onClick={handleMenuClick}>
//     <Menu.Item key="1" icon={<FileSearchOutlined />}>
//       Machine Learning
//     </Menu.Item>
//     <Menu.Item key="2" icon={<FileSearchOutlined />}>
//       CNN
//     </Menu.Item>
//     <Menu.Item key="3" icon={<FileSearchOutlined />}>
//       Neural Network
//     </Menu.Item>
//   </Menu>
// );




class table extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };  
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
  render() {
    let articleLink = '';
    
    
  const linkUpdate = (link) => {
    articleLink = link;
  }
  const columns = [
    {
      title: '',
      dataIndex: 'link',
      key: 'titleLinker',
      render: text => (
        <script>
          function Links() {
            linkUpdate(text)
          }
        </script>
      )
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 250,
      ...this.getColumnSearchProps('title'),  
      render: text => <a href={articleLink}>{text}</a>,  
    },
    {
      title: 'Authors',
      dataIndex: 'authors',
      key: 'authors',
      ...this.getColumnSearchProps('authors'),  
      width: 250,
    },
    {
      title: 'Publication Date',
      dataIndex: 'published_date',
      key: 'published_date',
      width: 200,
      sorter: (a, b) => moment(a.published_date).unix() - moment(b.published_date).unix(),
      width:200,
    },
   
    {
      title: 'Publication Location',
      dataIndex: 'publication_location',
      key: 'publication_location',
      ...this.getColumnSearchProps('publication_location'),  
      width:200,
    },
    // {
    //   title: 'link',
    //   dataIndex: 'link',
    //   key: 'link',
    //   render: text => <a href={text}>{text}</a>
    // },
    {
      title: 'citations',
      dataIndex: 'citations',
      key: 'citations',
      
    },
    {
      title: 'Mendeley Readership',
      dataIndex: 'readership',
      key: 'readership',
    },
    {
      title: 'Tweets',
      dataIndex: 'tweets',
      key: 'tweets',
    },
  ];
  
return (
  <div id="components-dropdown-demo-dropdown-button">
  <Table style={{marginRight:50, marginLeft:50}} columns={columns} dataSource={this.props.data} />
</div>
 
  
)
}
}


export default table;
    


