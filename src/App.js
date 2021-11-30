import {Route, Routes, Navigate} from 'react-router-dom';
import { Fragment } from "react";

import Layout from "./components/Layout/Layout";
import Home from './components/Page/Home';
import Save from './components/Page/Save';
import DiaryDetail from './components/Page/DiaryDetail';
import PageNotFound from './components/Page/PageNotFound';
import OperationMessage from './components/UI/OperationMessage';

function App() {
  

  return (
    <Fragment>
      <OperationMessage/>
      <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/create" element={<Save/>}></Route>
            <Route path="/diary-detail/:diaryId" element={<DiaryDetail/>}></Route>
            <Route path="/update-diary-detail/:diaryId" element={<Save/>}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
