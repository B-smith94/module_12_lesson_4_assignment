import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ViewPosts from './componenets/ViewPosts';
import CreatePost from './componenets/CreatePost';
import UpdatePostMutation from './componenets/UpdatePost';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<ViewPosts />} />
          <Route path='/new-post' element={<CreatePost />} />
          <Route path='/update-post/:id' element={<UpdatePostMutation />} />
        </Routes>
    </QueryClientProvider>
  )
}

export default App
