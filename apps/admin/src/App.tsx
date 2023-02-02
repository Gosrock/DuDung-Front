import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NotFound from '@pages/common/NotFound';
import EventsRouter from '@pages/events';
import HostsRouter from '@pages/hosts';
import Login from './components/home/Login';
import RefuseAuth from './components/shared/auth/RefuseAuth';
import Callback from '@pages/kakao/Callback';
import Refresh from './components/shared/auth/Refresh';
import NewRouter from '@pages/new';
import AdminNoMenuLayout from '@components/shared/layout/AdminNoMenuLayout';
import Home from '@pages/common/Home';

function App() {
  return (
    <Routes>
      <Route element={<Refresh />}>
        <Route element={<AdminNoMenuLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/new/*" element={<NewRouter />} />
        </Route>
        <Route path="/hosts/:hostId/*" element={<HostsRouter />} />
        <Route path="/events/:eventId/*" element={<EventsRouter />} />
      </Route>
      <Route element={<RefuseAuth />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="/kakao/callback" element={<Callback />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
