import Home from './src/views/Home';
import TaskDetails from './src/views/TaskDetails';
import CreateTask from './src/views/CreateTask';

const routes = [
  {name: 'Home', component: Home, options: {headerShown: false}},
  {name: 'TaskDetails', component: TaskDetails, options: {headerShown: false}},
  {name: 'CreateTask', component: CreateTask, options: {headerShown: false}},
];

export default routes;
