import './App.css';
import UseCallbackComponent from './components/UseCallbackComponent/useCallbackComponent';
import UseMemoComponent from './components/UseMemoComponent/UseMemoComponent';
import UseFetchComponent from './components/UseFetchComponent/UseFetchComponent';

const  App = () => {
  const data = ['count'];

  return (
    <div>
      <UseMemoComponent data={data} />
      <UseCallbackComponent data ={data} />
      <div className='header'>Проба useFetch</div>
      <UseFetchComponent endpoint="users" />
      <UseFetchComponent endpoint="posts" />
      <UseFetchComponent endpoint="comments" />
    </div>
  );
}

export default App;
