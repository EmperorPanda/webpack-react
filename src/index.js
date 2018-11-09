import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/css/base.css'
import styles from './assets/css/index.css'
import images from './assets/images/001.jpg'
import {
    DatePicker,
    Button
} from 'antd'
// console.log(styles);
class App extends React.Component {
    render () {
        return (
            <div>
                <DatePicker/>
                <Button className={styles['hello']}>
                    年后
                </Button>
                <img src={images}/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);