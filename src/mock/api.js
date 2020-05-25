import Mock from 'mockjs'

Mock.mock('/api/user/login', {
  status: 0,
  data: {
    id: 12,
    username: '@cname',
    email: '@email',
    phone: '@string',
    role: 0,
    createTime: 1479048325000,
    updateTime: 1479048325000,
    'test|1-10': [{ 'id|+1': 1 }]
  }
})
