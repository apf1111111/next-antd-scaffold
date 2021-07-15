import PropTypes from 'prop-types';
import { Table } from 'antd';
import Link from 'next/link';
import { useStore } from 'react-redux';

const columns = [{
  title: 'Username',
  dataIndex: 'username',
  key: 'username',
  render: (text) => (
    <Link href={`/user/[username]`} as={`/user/${text}`}>
      <a>{text}</a>
    </Link>
  )
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
}];

const UserList = () => {
  const { getState } = useStore();
  const { user: { list } } = getState();
  return (
    <Table
      rowKey={record => record.id}
      style={{ minWidth: '600px' }}
      dataSource={list}
      columns={columns}
      bordered
    />
  );
};

export default UserList;

UserList.propTypes = {
  list: PropTypes.array.isRequired
};
