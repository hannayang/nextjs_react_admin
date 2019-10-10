// This is the Link API
import Link from 'next/link'
import restProvider from 'ra-data-simple-rest'
import { Admin, Resource } from 'react-admin'
import { PostList, PostEdit, PostCreate } from './posts'

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
    </Admin>
  </div>
)

export default Index
