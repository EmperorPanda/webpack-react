import React from 'react';
import ReactDOM from 'react-dom';
import styles from './assets/css/index.css'
import images from './assets/images/001.jpg'
console.log(styles);
class App extends React.Component {
    render () {
    return (
    <div className={styles.hello}>
        你好中国年
    
    是不是对你陈诺了太多还是11ß
        <img src={images}/>
    </div>
    )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);